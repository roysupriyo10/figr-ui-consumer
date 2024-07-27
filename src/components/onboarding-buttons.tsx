import { Button } from "@roysupriyo10/figr-ui";
import { FC } from "react";

const OnboardingNextButton: FC = () => {
  return (
    <Button
      variant="primary"
      className="
        inline-flex
        items-center
        gap-x-2
      "
      children={
        <>
          <span>Next</span>
        </>
      }
    />
  );
};
OnboardingNextButton.displayName = "OnboardingNextButton";

const OnboardingPreviousButton: FC = () => {
  return <Button variant="ghost" children="Previous" />;
};
OnboardingPreviousButton.displayName = "OnboardingPreviousButton";

export { OnboardingNextButton, OnboardingPreviousButton };
