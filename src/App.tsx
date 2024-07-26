import { Button, Card, Modal } from "figr-ui";
import "figr-ui/dist/esm/index.css";

function App() {
  return (
    <>
      <Button variant="primary" size="default" isLoading loadingVariant="bar">
        Hello
      </Button>
      <Card
        variant="elevated"
        cardHeader={{
          title: "Nice Card",
          description: "Hello buddy",
        }}
      ></Card>
      <Modal
        
      trigger={"Open this modal"}>
      Excellent Modal
      </Modal>
    </>
  );
}

export default App;
