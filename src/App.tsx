import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


import {
  MdOutlineLocalPostOffice,
  MdStorm,
  MdPermIdentity,
  MdLockOutline,
} from "react-icons/md";

interface IFormsInputs {
  name: string;
  email: string;
  password: string;
  passwords: string;
}

const schema = yup
  .object({
    name: yup.string().required("Esse campo é obrigatório"),
    email: yup
      .string()
      .required("Esse campo é obrigátorio")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Esse campo é obrigatório")
      .min(6, "A senha deve ter no minímo 6 caracteres")
      .max(12, "A senha deve ter no máximo 12 caracteres"),
    passwords: yup
      .string()
      .required("Esse campo é obrigatório")
      .oneOf([yup.ref("password")], "A senha não corresponde a senha acima"),
  }).required();

function App() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<IFormsInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwords: "",
    },
  });

  const onSubmit: SubmitHandler<IFormsInputs> = (data) => {
    console.log(data)
    reset()
  }

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="w-4/5  my-auto mx-auto flex justify-between items-center shadow-black shadow-2xl">
        <div className="w-full h-96 flex flex-col justify-center items-center gap-6 bg-black">
          <h1 className="text-3xl font-bold ">Formulário</h1>
          <MdStorm className="text-8xl text-violet-800" />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-4/5 h-full flex flex-col justify-center items-center gap-4 bg-violet-900"
        >
          <Input
            name="name"
            control={control}
            placeholder="Nome completo"
            showIcon={<MdPermIdentity />}
            errorMessage={errors?.name?.message}
          />

          <Input
            name="email"
            control={control}
            type="email"
            placeholder="Email"
            showIcon={<MdOutlineLocalPostOffice />}
            autoComplete="username"
            errorMessage={errors?.email?.message}
          />
          <Input
            name="password"
            control={control}
            type="password"
            placeholder="Digite uma senha"
            showIcon={<MdLockOutline />}
            autoComplete="new-password"
            errorMessage={errors?.password?.message}
          />
          <Input
            name="passwords"
            control={control}
            type="password"
            placeholder="Confirme sua senha"
            showIcon={<MdLockOutline />}
            autoComplete="new-password"
            errorMessage={errors.passwords?.message}
          />

          <Button title="Cadastrar" />
        </form>
      </div>
    </div>
  );
}
export default App;
