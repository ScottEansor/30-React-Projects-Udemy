import Alert from "../components/Alert";
export default function AlertApp() {
  return (
    <div className="container mx-auto">
      <Alert type={"success"} message={"hello"} />
      <Alert type={"info"} message={"hello 2"} />
      <Alert type={"success"} message={"hello 3"} />
    </div>
  );
}
