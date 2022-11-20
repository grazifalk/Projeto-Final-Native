import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Container, TextButton, StButton, InputName,InputCPF,InputDate,InputPassword,InputConfirmPassword, Title } from "./styles";
/*import {
    Container,
    TextButton,
    StButton,
    InputPassword,
    
    InputConfirmPassword,
    Title,
  } from "./styles.js";
  */

export default  function Registration () {
    const [user, setUser] = useState({
        name: '',
        cpf: '',
        date:'',
        password:'',
        confirmPassword:'',

      });

    
      return (
        <Container>
                       
          <Logo source={logo}/>      
          <Title>CADASTRO</Title>
          <InputName
            value={user.name}
            onChangeText={setUser}
            placeholder={'Nome Completo'}
            placeholderTextColor={'gray'}
          />
          <InputCPF
            value={user.cpf}
            onChangeText={setUser}
            placeholder={'CPF/CNPJ'}
            placeholderTextColor={'gray'}
          />
          <InputDate
            value={user.date}
            onChangeText={setUser}
            placeholder={'Data de Nascimento'}
            placeholderTextColor={'gray'}
          />
          <InputPassword
            value={user.password}
            onChangeText={setUser}
            placeholder={'Senha'}
            placeholderTextColor={'gray'}
          />
          <InputConfirmPassword
            value={user.confirmPassword}
            onChangeText={setUser}
            placeholder={'Confirma a senha'}
            placeholderTextColor={'gray'}
          />
     
        
          <StButton>
        <TextButton>CADASTRAR</TextButton>
      </StButton>

    
          <StatusBar style="auto" />
        </Container>
      );
    }
    
    
    
    
    
