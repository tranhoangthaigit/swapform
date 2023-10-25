import Form from "./components/Form";
import Header from "./components/Header";

export default async function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex justify-center mt-20">
      <Form />
      </div>
    </div>

  )
}

