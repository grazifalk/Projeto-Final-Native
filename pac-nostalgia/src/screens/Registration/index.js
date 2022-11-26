import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import { useNavigation } from "@react-navigation/native";
import {
  Container,
  TextButton,
  StButton,
  InputName,
  InputCPF,
  InputDate,
  InputPassword,
  InputConfirmPassword,
  Title,
} from "./styles";
import {Api} from "../../Services";

export default function Registration() {
  const [ativo, setAtivo] = useState(true)
  const [cpf, setCpf] = useState("")
  const [nascimento, setNascimento] = useState("")
  const [login, setLogin] = useState("")
  const [nome, setNome] = useState("")
  const [senha, setSenha] = useState("")
  const [image, setImage] = useState("")

  const navigation = useNavigation();

  function screenUserRegistered() {
    navigation.navigate("UserRegistered");
  }

  const addPost = () => {
    const data = {
      ativo: ativo,
      cpf: cpf,
      dtNascimento: nascimento,
      foto: image,
      login: login,
      nome: nome,
      senha: senha
      }

    Api.post("/usuario", data)
       .then((res) => {
        console.log(res.data)
       }).catch((err) => {
        console.log(err)
       });
};

  return (
    <Container>
      <Title>CADASTRO</Title>

      <InputName
        value={nome}
        onChangeText={(data)=>setNome(data)}
        placeholder="Nome Completo"
        placeholderTextColor={"#ffffff"}
      />
      <InputCPF
        value={cpf}
        onChangeText={(data)=>setCpf(data)}
        placeholder="CPF/CNPJ"
        placeholderTextColor={"#ffffff"}
      />
      <InputDate
        value={nascimento}
        onChangeText={(data)=>setNascimento(data)}
        placeholder="Data de Nascimento"
        placeholderTextColor={"#ffffff"}
      />
      <InputPassword
        value={senha}
        onChangeText={(data)=>setSenha(data)}
        placeholder="Senha"
        placeholderTextColor={"#ffffff"}
      />
      <InputConfirmPassword
        placeholder="Confirma a senha"
        placeholderTextColor={"#ffffff"}
      />
            <InputName
        value={image}
        onChangeText={(data)=>setImage(data)}
        placeholder="Imagem"
        placeholderTextColor={"#ffffff"}
      />
            <InputName
        value={ativo}
        onChangeText={(data)=>setAtivo(data)}
        placeholder="Ativo"
        placeholderTextColor={"#ffffff"}
      />
            <InputName
        value={login}
        onChangeText={(data)=>setLogin(data)}
        placeholder="Login"
        placeholderTextColor={"#ffffff"}
      />

      <StButton onPress={addPost}>
        <TextButton>CADASTRAR</TextButton>
      </StButton>

      <Menu />
      <StatusBar style="auto" />
    </Container>
  );
}
