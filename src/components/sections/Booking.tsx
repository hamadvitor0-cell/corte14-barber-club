"use client";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock3,
  Scissors,
  X,
} from "lucide-react";
import { money, services, team, type ServiceId } from "@/lib/content";
import {
  addDays,
  dayOfWeek,
  formatDate,
  timeSlots,
  todayInBrazil,
  validDate,
} from "@/lib/booking";
import { useDialog } from "@/components/ui/useDialog";

const steps = ["Serviço", "Profissional", "Data", "Horário", "Resumo"];
export function Booking({
  preselected,
  onClose,
}: {
  preselected?: ServiceId;
  onClose: () => void;
}) {
  const dialog = useDialog(true, onClose);
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState<ServiceId | undefined>(
    preselected,
  );
  const [professional, setProfessional] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const content = useRef<HTMLDivElement>(null);
  const service = services.find((item) => item.id === serviceId);
  const person = team.find((item) => item.id === professional);
  const today = todayInBrazil();
  const dates = Array.from({ length: 14 }, (_, i) => addDays(today, i));
  const slots = date && service ? timeSlots(date, service.duration) : [];
  const canContinue = [
    !!service,
    !!person,
    validDate(date, today),
    !!time && slots.includes(time),
    !!service && !!person && validDate(date, today) && slots.includes(time),
  ][step];
  useEffect(() => {
    if (step > 0 || complete) heading.current?.focus({ preventScroll: true });
    content.current?.scrollTo(0, 0);
  }, [step, complete]);
  function proceed() {
    setError("");
    if (!canContinue) {
      setError("Revise sua escolha para continuar.");
      return;
    }
    if (step === 4) {
      if (
        !service ||
        !validDate(date, todayInBrazil()) ||
        !timeSlots(date, service.duration).includes(time)
      ) {
        setStep(2);
        setTime("");
        setError("Escolha uma nova data e horário para a simulação.");
        return;
      }
      setComplete(true);
    } else setStep(step + 1);
  }
  return (
    <dialog
      ref={dialog}
      className="booking-modal"
      aria-labelledby="booking-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="booking-shell">
        <header className="booking-header">
          <span className="eyebrow">CORTE 14 / Sua experiência</span>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="Fechar agendamento demonstrativo"
          >
            <X size={22} />
          </button>
        </header>
        <div className="booking-disclaimer">
          <span className="status-dot" /> Apenas uma demonstração. Nenhum dado
          será enviado.
        </div>
        {!complete ? (
          <>
            <ol className="booking-progress" aria-label="Etapas do agendamento">
              {steps.map((label, i) => (
                <li
                  key={label}
                  className={
                    i === step ? "is-current" : i < step ? "is-done" : ""
                  }
                  aria-current={i === step ? "step" : undefined}
                >
                  <span>{i < step ? <Check size={12} /> : `0${i + 1}`}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
            <div className="booking-layout">
              <div className="booking-main" ref={content}>
                <div key={step} className="booking-step">
                  <p className="eyebrow booking-step-label">
                    Etapa 0{step + 1} / 05
                  </p>
                  <h2 ref={heading} tabIndex={-1} id="booking-title">
                    {
                      [
                        "O QUE VAMOS FAZER?",
                        "EM BOAS MÃOS.",
                        "ESCOLHA O SEU DIA.",
                        "UM TEMPO PARA VOCÊ.",
                        "O SEU PRÓXIMO VISUAL.",
                      ][step]
                    }
                  </h2>
                  {step === 0 && (
                    <fieldset className="booking-options">
                      <legend className="sr-only">Escolha um serviço</legend>
                      {services.map((item) => (
                        <label
                          className={`booking-option service-option ${serviceId === item.id ? "is-selected" : ""}`}
                          key={item.id}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={item.id}
                            checked={serviceId === item.id}
                            onChange={() => {
                              setServiceId(item.id);
                              setTime("");
                            }}
                          />
                          <span className="option-radio" />
                          <span className="option-text">
                            <strong>{item.name}</strong>
                            <small>{item.duration} minutos</small>
                          </span>
                          <span className="option-price">
                            {money(item.price)}
                          </span>
                        </label>
                      ))}
                    </fieldset>
                  )}
                  {step === 1 && (
                    <>
                      <p className="booking-help">
                        Três estilos. O mesmo cuidado. Escolha um profissional
                        fictício para a sua experiência.
                      </p>
                      <fieldset className="booking-options">
                        <legend className="sr-only">
                          Escolha um profissional
                        </legend>
                        {team.map((item) => (
                          <label
                            className={`booking-option ${professional === item.id ? "is-selected" : ""}`}
                            key={item.id}
                          >
                            <input
                              type="radio"
                              name="professional"
                              value={item.id}
                              checked={professional === item.id}
                              onChange={() => setProfessional(item.id)}
                            />
                            <span className="option-radio" />
                            <span className="option-text">
                              <strong>{item.name}</strong>
                              <small>{item.specialty}</small>
                            </span>
                            <span className="option-number">
                              /{item.number}
                            </span>
                          </label>
                        ))}
                      </fieldset>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <p className="booking-help">
                        Selecione um dos próximos dias ou escolha outra data, em
                        até 60 dias. Aos domingos, a casa descansa.
                      </p>
                      <fieldset className="date-grid">
                        <legend className="sr-only">Próximos 14 dias</legend>
                        {dates.map((item) => {
                          const day = dayOfWeek(item);
                          return (
                            <label
                              key={item}
                              className={`date-option ${date === item ? "is-selected" : ""} ${day === 0 ? "is-disabled" : ""}`}
                            >
                              <input
                                type="radio"
                                name="date"
                                checked={date === item}
                                disabled={day === 0}
                                onChange={() => {
                                  setDate(item);
                                  setTime("");
                                  setError("");
                                }}
                              />
                              <small>
                                {new Intl.DateTimeFormat("pt-BR", {
                                  weekday: "short",
                                  timeZone: "UTC",
                                })
                                  .format(new Date(`${item}T12:00:00Z`))
                                  .replace(".", "")}
                              </small>
                              <strong>{item.slice(8)}</strong>
                              <small>
                                {new Intl.DateTimeFormat("pt-BR", {
                                  month: "short",
                                  timeZone: "UTC",
                                })
                                  .format(new Date(`${item}T12:00:00Z`))
                                  .replace(".", "")}
                              </small>
                            </label>
                          );
                        })}
                      </fieldset>
                      <label className="custom-date">
                        Outra data
                        <input
                          type="date"
                          min={today}
                          max={addDays(today, 60)}
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                            setTime("");
                            setError(
                              e.target.value &&
                                !validDate(e.target.value, today)
                                ? "Escolha um dia de segunda a sábado, entre hoje e os próximos 60 dias."
                                : "",
                            );
                          }}
                        />
                      </label>
                    </>
                  )}
                  {step === 3 && (
                    <>
                      <p className="booking-help">
                        {formatDate(date)}
                        <br />
                        Horários ilustrativos. Não representam disponibilidade
                        real.
                      </p>
                      <fieldset className="time-grid">
                        <legend className="sr-only">
                          Escolha um horário demonstrativo
                        </legend>
                        {slots.map((item) => (
                          <label
                            className={`time-option ${time === item ? "is-selected" : ""}`}
                            key={item}
                          >
                            <input
                              type="radio"
                              name="time"
                              checked={time === item}
                              onChange={() => setTime(item)}
                            />
                            <Clock3 size={13} />
                            <span>{item}</span>
                          </label>
                        ))}
                      </fieldset>
                      {slots.length === 0 && (
                        <div className="booking-empty">
                          <Clock3 size={24} />
                          <p>
                            Os horários ilustrativos deste dia já passaram.
                            <br />
                            Volte e escolha outra data.
                          </p>
                          <button
                            className="text-link"
                            onClick={() => setStep(2)}
                          >
                            Escolher outra data <ArrowUpRight size={16} />
                          </button>
                        </div>
                      )}
                    </>
                  )}
                  {step === 4 && (
                    <>
                      <p className="booking-help">
                        Confira suas escolhas. Você pode voltar e alterar
                        qualquer detalhe.
                      </p>
                      <dl className="review-list">
                        {[
                          { label: "Serviço", value: service?.name, edit: 0 },
                          {
                            label: "Profissional",
                            value: person?.name,
                            edit: 1,
                          },
                          { label: "Data", value: formatDate(date), edit: 2 },
                          { label: "Horário", value: time, edit: 3 },
                        ].map((item) => (
                          <div key={item.label}>
                            <dt>{item.label}</dt>
                            <dd>
                              {item.value}
                              <button
                                className="edit-choice"
                                onClick={() => setStep(item.edit)}
                                aria-label={`Alterar ${item.label.toLowerCase()}`}
                              >
                                Alterar
                              </button>
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <div className="review-total">
                        <span>Total ilustrativo</span>
                        <strong>{service ? money(service.price) : "—"}</strong>
                      </div>
                      <p className="review-notice">
                        Ao concluir, você finaliza somente esta simulação.
                        Nenhuma reserva ou cobrança será feita.
                      </p>
                    </>
                  )}
                  {error && (
                    <p className="booking-error" role="alert">
                      {error}
                    </p>
                  )}
                </div>
              </div>
              <aside className="booking-sidebar" aria-label="Sua seleção">
                <Scissors size={29} strokeWidth={1} />
                <p className="eyebrow">O seu ritual</p>
                <h3>{service?.name ?? "Seu estilo começa aqui."}</h3>
                <dl>
                  <div>
                    <dt>Profissional</dt>
                    <dd>{person?.name ?? "A escolher"}</dd>
                  </div>
                  <div>
                    <dt>Data</dt>
                    <dd>
                      {date && validDate(date, today)
                        ? formatDate(date)
                        : "A escolher"}
                    </dd>
                  </div>
                  <div>
                    <dt>Horário</dt>
                    <dd>{time || "A escolher"}</dd>
                  </div>
                </dl>
                <div className="sidebar-total">
                  <span>
                    {service
                      ? `${service.duration} min de cuidado`
                      : "Feito para você"}
                  </span>
                  <strong>{service ? money(service.price) : "—"}</strong>
                </div>
                <span className="tiny-caption">
                  Valores e profissionais fictícios.
                </span>
              </aside>
            </div>
            <footer className="booking-footer">
              <button
                className="booking-back"
                disabled={step === 0}
                onClick={() => {
                  setStep(step - 1);
                  setError("");
                }}
              >
                <ArrowLeft size={16} /> Voltar
              </button>
              <button
                className="button button-fill"
                onClick={proceed}
                disabled={!canContinue}
              >
                {step === 4 ? "Concluir simulação" : "Continuar"}
                <ArrowRight size={17} />
              </button>
            </footer>
          </>
        ) : (
          <div className="booking-complete">
            <span className="complete-symbol">
              <Check size={35} strokeWidth={1} />
            </span>
            <p className="eyebrow">Um ensaio do seu próximo estilo.</p>
            <h2 id="booking-title" ref={heading} tabIndex={-1}>
              SIMULAÇÃO
              <br />
              <span className="lime">CONCLUÍDA.</span>
            </h2>
            <p>
              Esta é uma demonstração de agendamento.
              <br />
              <strong>Nenhuma reserva foi realizada.</strong>
            </p>
            <div className="complete-recap">
              {service?.name} · {person?.name}
              <br />
              {formatDate(date)} às {time} ·{" "}
              {service ? money(service.price) : ""}
            </div>
            <button className="button button-fill" onClick={onClose}>
              Voltar à experiência <ArrowUpRight size={17} />
            </button>
            <button
              className="text-link"
              onClick={() => {
                setComplete(false);
                setStep(0);
              }}
            >
              Explorar outra combinação <ArrowRight size={15} />
            </button>
          </div>
        )}
      </div>
    </dialog>
  );
}
