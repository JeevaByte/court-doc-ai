
type StepperProps = { step: number; setStep: (n: number) => void };

const steps = [
  { title: "Select Form" },
  { title: "Input Data" },
  { title: "Get PDF" },
];

const Stepper = ({ step, setStep }: StepperProps) => (
  <nav aria-label="Steps" className="w-full flex items-center justify-center pb-1">
    <ul className="flex gap-6 w-fit px-0">
      {steps.map((s, i) => {
        const active = step === i + 1;
        const completed = step > i + 1;
        return (
          <li
            key={s.title}
            className="flex items-center gap-2 group cursor-pointer"
            onClick={() => setStep(i + 1)}
          >
            <span
              className={[
                "flex items-center justify-center rounded-full w-8 h-8 text-base transition-all",
                active
                  ? "bg-primary text-primary-foreground font-bold scale-110 shadow"
                  : completed
                  ? "bg-green-500 text-white scale-100"
                  : "bg-muted text-muted-foreground",
                "border-2 border-border",
              ].join(" ")}
            >
              {completed ? "✔" : i + 1}
            </span>
            <span
              className={[
                "transition-all text-base font-medium",
                active ? "text-primary" : "text-muted-foreground",
              ].join(" ")}
            >
              {s.title}
            </span>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default Stepper;
