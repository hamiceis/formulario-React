import { Button } from "./components/Button";
import { Input } from "./components/Input";

import {
  MdOutlineLocalPostOffice,
  MdStorm,
  MdPermIdentity,
  MdLockOutline
} from "react-icons/md";

function App() {
  return (
    <div className="h-screen flex flex-col justify-center">

      <div className="w-4/5  my-auto mx-auto flex justify-between items-center shadow-black shadow-2xl">
        <div className="w-full h-96 flex flex-col justify-center items-center gap-6 bg-black">
          <h1 className="text-3xl font-bold ">Formulário</h1>
          <MdStorm className="text-8xl text-violet-800" />
        </div>

        <form className="w-4/5 h-full flex flex-col justify-center items-center gap-4 bg-violet-800">
          <label>
            <Input
              name="name"
              placeholder="Nome completo"
              showIcon={<MdPermIdentity />}
            />
          </label>

          <label>
            <Input
              name="name"
              type="email"
              placeholder="Email"
              showIcon={<MdOutlineLocalPostOffice />}
            />
          </label>

          <label>
            <Input
              name="password"
              type="password"
              placeholder="Digite uma senha"
              showIcon={<MdLockOutline />}
            />
          </label>

          <label>
            <Input
              name="password"
              type="password"
              placeholder="Confirme sua senha"
              showIcon={<MdLockOutline />}
            />
          </label>
          <Button title="Cadastrar"/>
        </form>
      </div>
    </div>
  );
}
export default App;
