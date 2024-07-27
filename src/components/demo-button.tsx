import { Button, ButtonProps } from "@roysupriyo10/figr-ui";
import { FC, useState } from "react";
import { sleep } from "../utils";

type DemoButtonProps = {
  variant: ButtonProps["variant"];
};

const DemoButton: FC<DemoButtonProps> = ({ variant }) => {
  const [loading, setLoading] = useState(false);

  return (
    <Button
      style={{
        minWidth: "100px",
      }}
      onClick={async () => {
        console.log("clicked");
        try {
          setLoading(true);

          await sleep(5000);
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }}
      isLoading={loading}
      variant={variant}
    >
      Submit
    </Button>
  );
};

export default DemoButton;
