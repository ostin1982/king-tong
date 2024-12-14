import { useEffect } from "react";
import { backButton, useSignal } from "@telegram-apps/sdk-react";

export default function BackButton() {
  const isVisible = useSignal(backButton.isVisible);

  useEffect(() => {
    console.log("The button is", isVisible ? "visible" : "invisible");
  }, [isVisible]);

  useEffect(() => {
    backButton.show();
    return () => {
      backButton.hide();
    };
  }, []);

  return null;
}
