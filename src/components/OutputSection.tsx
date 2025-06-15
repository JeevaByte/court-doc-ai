
type Props = {
  pdfReady: boolean;
  onDownload: () => void;
  onEmail: () => void;
  onBack: () => void;
};

const OutputSection = ({ pdfReady, onDownload, onEmail, onBack }: Props) => (
  <div className="flex flex-col items-center gap-7 justify-center min-h-[180px]">
    {!pdfReady ? (
      <>
        <div className="flex items-center gap-2 text-blue-700 font-medium text-lg">
          <span className="animate-spin inline-block w-6 h-6 border-t-2 border-b-2 border-blue-600 rounded-full mr-2"></span>
          Generating your PDF…
        </div>
        <div className="text-sm text-muted-foreground">
          This may take a few seconds. Please wait.
        </div>
      </>
    ) : (
      <>
        <div className="flex flex-col items-center gap-3">
          <span className="text-green-700 text-2xl font-semibold">
            ✅ PDF is ready!
          </span>
          <div className="flex gap-4 justify-center flex-wrap mt-2">
            <button
              className="px-5 py-2 rounded-lg bg-primary text-white hover:bg-blue-800 font-semibold shadow transition"
              onClick={onDownload}
            >
              Download PDF
            </button>
            <button
              className="px-5 py-2 rounded-lg bg-secondary text-primary hover:bg-accent font-semibold shadow transition"
              onClick={onEmail}
            >
              Email Output
            </button>
          </div>
        </div>
        <button
          className="px-4 py-1 rounded border border-border text-muted-foreground mt-6 hover:bg-muted"
          onClick={onBack}
        >
          Back to Input
        </button>
      </>
    )}
  </div>
);

export default OutputSection;
