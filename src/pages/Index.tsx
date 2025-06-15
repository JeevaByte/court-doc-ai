
import Hero from "@/components/Hero";
import Stepper from "@/components/Stepper";
import FormSelector from "@/components/FormSelector";
import InputSection from "@/components/InputSection";
import OutputSection from "@/components/OutputSection";
import { useState } from "react";

const formOptions = [
  { label: "Form 25 - Affidavit", value: "form_25" },
  { label: "Form 23A - Claim", value: "form_23a" },
  { label: "Form 23B - Defence", value: "form_23b" },
  { label: "Form 47 - Notice of Motion", value: "form_47" },
  // Add more as needed
];

export default function Index() {
  const [step, setStep] = useState(1);
  const [selectedForm, setSelectedForm] = useState(formOptions[0]);
  const [inputData, setInputData] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [pdfReady, setPdfReady] = useState(false);

  // Dummy simulate PDF generation
  const handleGenerate = () => {
    setStep(3);
    setTimeout(() => setPdfReady(true), 1600);
  };

  // Step content
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-0 py-12">
      <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
        <Hero />
        <Stepper step={step} setStep={setStep} />
        <div className="bg-card shadow-lg rounded-xl px-8 py-8 transition-all min-h-[320px]">
          {step === 1 && (
            <FormSelector
              formOptions={formOptions}
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
              onNext={() => setStep(2)}
            />
          )}
          {step === 2 && (
            <InputSection
              inputData={inputData}
              setInputData={setInputData}
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
              onBack={() => setStep(1)}
              onNext={handleGenerate}
            />
          )}
          {step === 3 && (
            <OutputSection
              pdfReady={pdfReady}
              onDownload={() => alert("Download PDF (placeholder)")}
              onEmail={() => alert("Email output (placeholder)")}
              onBack={() => setStep(2)}
            />
          )}
        </div>
        <footer className="w-full text-center text-muted-foreground text-xs pt-6">
          © {new Date().getFullYear()} SCC Form Filler | For demo purposes only. Not legal advice.
        </footer>
      </div>
    </div>
  );
}
