
type Option = { label: string; value: string };

type Props = {
  formOptions: Option[];
  selectedForm: Option;
  setSelectedForm: (opt: Option) => void;
  onNext: () => void;
};

const FormSelector = ({
  formOptions,
  selectedForm,
  setSelectedForm,
  onNext,
}: Props) => (
  <div className="flex flex-col gap-8">
    <fieldset>
      <legend className="block text-lg font-medium mb-2 text-primary">
        Choose the SCC form you want to generate
      </legend>
      <select
        value={selectedForm.value}
        onChange={e =>
          setSelectedForm(
            formOptions.find(f => f.value === e.target.value) || formOptions[0]
          )
        }
        className="border border-border rounded-lg px-4 py-3 mt-2 bg-background text-lg w-full max-w-lg focus:ring focus:ring-blue-300 outline-none shadow"
      >
        {formOptions.map(option => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
    <button
      className="ml-auto px-5 py-2 rounded-lg text-white bg-primary hover:bg-blue-800 text-base font-semibold shadow transition disabled:opacity-50"
      onClick={onNext}
    >
      Next: Input Data
    </button>
  </div>
);

export default FormSelector;
