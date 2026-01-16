import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background">
      <Button
        onClick={() => setShowMessage(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-8 py-6"
      >
        Olá
      </Button>
      
      {showMessage && (
        <h1 className="text-7xl md:text-9xl font-light text-foreground animate-fade-in">
          Olá
        </h1>
      )}
    </div>
  );
};

export default Index;
