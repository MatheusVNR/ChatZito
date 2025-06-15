import { Toaster } from "@/components/ui/toaster";
import ChatWindow from "@/components/ChatWindow";

const App = () => (
  <div className="min-h-screen flex flex-col items-center justify-start bg-background pt-10">
    <h1 className="text-3xl font-bold mb-2">ChatZito</h1>
    <ChatWindow />
    <div className="mt-8 text-sm text-gray-400">Powered by <b>prazos curtos e ideias longas</b></div>
    <Toaster />
  </div>
);

export default App;