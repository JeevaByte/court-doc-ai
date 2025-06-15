
import VoiceInputPlaceholder from "./VoiceInputPlaceholder";

type Props = {
  inputData: string;
  setInputData: (v: string) => void;
  uploadedFile: File | null;
  setUploadedFile: (f: File | null) => void;
  onBack: () => void;
  onNext: () => void;
};

const InputSection = ({
  inputData,
  setInputData,
  uploadedFile,
  setUploadedFile,
  onBack,
  onNext,
}: Props) => (
  <div className="flex flex-col gap-10">
    <div className="flex flex-col md:flex-row gap-6">
      {/* Text area */}
      <div className="flex-1 flex flex-col gap-2">
        <label className="font-semibold text-primary mb-1">
          Paste or type your information
        </label>
        <textarea
          value={inputData}
          onChange={e => setInputData(e.target.value)}
          rows={7}
          placeholder="Describe your case, enter names, addresses, or any information for the form..."
          className="w-full border border-input rounded-lg px-4 py-3 text-base bg-background focus:ring focus:ring-blue-200"
        />
      </div>
      {/* File upload */}
      <div className="flex-1 flex flex-col gap-3 min-w-[200px]">
        <label className="font-semibold text-primary mb-1">
          Or upload a document
        </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx,.txt"
          className="file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-none file:bg-muted file:text-muted-foreground hover:file:bg-accent file:transition cursor-pointer"
          onChange={e => setUploadedFile(e.target.files?.[0] || null)}
        />
        {uploadedFile && (
          <div className="text-green-700 text-sm mt-1">
            <span className="font-medium">Uploaded:</span> {uploadedFile.name}
          </div>
        )}
      </div>
    </div>
    {/* Voice input placeholder */}
    <div>
      <VoiceInputPlaceholder />
    </div>
    {/* Navigation */}
    <div className="flex gap-4 justify-end">
      <button
        className="px-5 py-2 rounded-lg bg-muted text-muted-foreground hover:bg-secondary font-semibold transition"
        onClick={onBack}
      >
        Back
      </button>
      <button
        className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-blue-800 font-semibold shadow transition"
        onClick={onNext}
        disabled={!inputData && !uploadedFile}
      >
        Generate PDF
      </button>
    </div>
  </div>
);

export default InputSection;
