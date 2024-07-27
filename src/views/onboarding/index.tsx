import { FC, useState } from "react";
import {
  OnboardingNextButton,
  DemoButton,
  OnboardingPreviousButton,
} from "../../components/";
import {
  Button,
  Card,
  CardVariant,
  ColorBox,
  ColorPropertyNames,
  DarkModeToggle,
  Modal,
  Switch,
} from "@roysupriyo10/figr-ui";

const Onboarding: FC = () => {
  const [cardStyle, setCardStyle] = useState<CardVariant>("elevated");

  return (
    <>
      <header
        className="
          flex
          flex-col
          items-center
          gap-y-4
        "
      >
        <h2
          className="
            text-gray-1000
            text-3xl
            font-semibold
            text-secondary-foreground
          "
        >
          Customise your theme
        </h2>
        <DarkModeToggle />
      </header>
      <main
        className="
          grow
          flex
          gap-y-8
          flex-col
          justify-between
        "
      >
        <Card
          variant={cardStyle}
          style={{
            padding: "32px",
          }}
          className="
            max-w-[800px]
            self-center
          "
          contentClassName="
            flex
            flex-col
            gap-y-12
          "
          cardFooter={
            <div
              className="
                px-2
                text-xs
                font-light
              "
            >
              This is just a demonstration of the components. You can still pass
              in props to modify their behaviour wherever they are used.
            </div>
          }
        >
          <div
            className="
              flex
              flex-col
              h-full
              gap-y-4
            "
          >
            <div
              className="
                flex
                flex-col
              "
            >
              <h2
                className="
                  text-lg
                  font-medium
                "
              >
                Theme color
              </h2>
              <h3
                className="
                  text-xs
                  text-muted-foreground
                  font-light
                  tracking-tight
                "
              >
                Click on the colors to change them
              </h3>
            </div>
            <div
              className="
                flex
                h-full
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  min-h-full
                  gap-x-5
                "
              >
                <ColorBox
                  propertyName={ColorPropertyNames.PRIMARY}
                  label="Primary"
                />
                <ColorBox
                  propertyName={ColorPropertyNames.PRIMARY_FOREGROUND}
                  label="Primary Foreground"
                />
              </div>
              <div
                className="
                  bg-gray-200
                  flex
                  items-center
                  justify-center
                  min-w-[160px]
                  rounded-sm
                  px-6
                  py-10
                "
              >
                <DemoButton variant={"primary"} />
              </div>
            </div>
            <div
              className="
                flex
                h-full
                justify-between
                gap-x-20
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-x-5
                  min-h-full
                "
              >
                <ColorBox
                  propertyName={ColorPropertyNames.SECONDARY}
                  label="Secondary"
                />
                <ColorBox
                  propertyName={ColorPropertyNames.SECONDARY_FOREGROUND}
                  label="Secondary Foreground"
                />
              </div>
              <div
                className="
                  bg-gray-200
                  flex
                  items-center
                  justify-center
                  rounded-sm
                  min-w-[160px]
                  px-6
                  py-10
                "
              >
                <DemoButton variant={"secondary"} />
              </div>
            </div>
          </div>
          <div
            className="
              flex
              flex-col
              h-full
              gap-y-4
            "
          >
            <h2
              className="
                text-lg
                font-medium
              "
            >
              Card variant
            </h2>
            <label
              className="
                flex
                items-center
                justify-between
              "
            >
              <p>Elevated shadow</p>
              <Switch
                checked={cardStyle === "elevated"}
                onCheckedChange={(checked: boolean) =>
                  setCardStyle(checked ? "elevated" : "flat")
                }
              />
            </label>
          </div>
          <div
            className="
              flex
              flex-col
              h-full
              items-start
              gap-y-4
            "
          >
            <h2
              className="
                text-lg
                font-medium
              "
            >
              Test Modal
            </h2>
            <div
              className="
                flex
                items-center
                gap-x-2
              "
            >
              <Modal
                isDraggable
                modalBackdrop={false}
                title="Draggable Popover"
                description="Description of some action"
                className="
                  items-start
                  flex
                  flex-col
                  gap-y-4
                "
                footer={
                  <div
                    className="
                      font-light
                      tracking-tight
                      w-full
                      text-xs
                      text-muted-foreground
                    "
                  >
                    Example footer with side information about action
                  </div>
                }
                trigger={"Open draggable popover"}
              >
                <Button
                  variant="primary"
                  className="
                    self-start
                  "
                >
                  Primary Button
                </Button>
                <Button
                  variant="secondary"
                  className="
                    self-start
                  "
                >
                  Secondary Button
                </Button>
                <Button
                  variant="ghost"
                  className="
                    self-start
                  "
                >
                  Ghost Button
                </Button>
              </Modal>
              <Modal
                isDraggable
                modalBackdrop={true}
                title="Draggable Modal"
                description="Description of some action"
                className="
                  items-start
                  flex
                  flex-col
                  gap-y-4
                "
                footer={
                  <div
                    className="
                      font-light
                      tracking-tight
                      w-full
                      text-xs
                      text-muted-foreground
                    "
                  >
                    Example footer with side information about action
                  </div>
                }
                trigger={"Open draggable modal"}
              >
                <Button
                  variant="primary"
                  className="
                    self-start
                  "
                >
                  Primary Button
                </Button>
                <Button
                  variant="secondary"
                  className="
                    self-start
                  "
                >
                  Secondary Button
                </Button>
                <Button
                  variant="ghost"
                  className="
                    self-start
                  "
                >
                  Ghost Button
                </Button>
              </Modal>
              <Modal
                title="Non-draggable Modal"
                description="Description of some action"
                className="
                  items-start
                  flex
                  flex-col
                  gap-y-4
                "
                footer={
                  <div
                    className="
                      font-light
                      tracking-tight
                      w-full
                      text-xs
                      text-muted-foreground
                    "
                  >
                    Example footer with side information about action
                  </div>
                }
                trigger={"Open non-draggable modal"}
              >
                <Button
                  variant="primary"
                  className="
                    self-start
                  "
                >
                  Primary Button
                </Button>
                <Button
                  variant="secondary"
                  className="
                    self-start
                  "
                >
                  Secondary Button
                </Button>
                <Button
                  variant="ghost"
                  className="
                    self-start
                  "
                >
                  Ghost Button
                </Button>
              </Modal>
            </div>
          </div>
        </Card>
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <OnboardingPreviousButton />
          <Modal
            hasCloseButton={false}
            title="Your theme is ready"
            description="This is a sample theme generator during the onboarding of a website."
            footer={
              <div
                className="
                  flex
                  items-center
                  gap-x-2
                "
              >
                <Button
                  className="
                    flex
                    gap-x-2
                    items-center
                  "
                >
                  <a
                    href="https://github.com/roysupriyo10/figr-ui"
                    target="_blank"
                  >
                    Go to docs
                  </a>
                </Button>
                figr-ui
              </div>
            }
            trigger={<OnboardingNextButton />}
            className="
              tracking-tight
              flex
              flex-col
              gap-y-8
              text-secondary-foreground
            "
          >
            For further instructions, check out the documentation of this
            component library.
          </Modal>
        </div>
      </main>
    </>
  );
};

export default Onboarding;
