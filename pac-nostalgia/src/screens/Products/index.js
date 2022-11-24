import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Api } from '../../Services';
import { Menu } from '../../components/Menu';
import {Container, Title, ProductImage, Price, Card, ContainerText} from "./styles.js"

// import { Container } from './styles';

export const Products = () => {
    const route = useRoute();
    const [produto, setProduto] = useState([]);
  
    useEffect(() => {
      getProduto();
    }, [produto]);
  
    const getProduto = async () => {
      const { data } = await Api.get("/produto");
      setProduto(data);
    };

    const ShowProduct = ()=>{
        const filtro = produto.filter((prod)=>prod.categoria.nome===route.params.name)
        return (
            <>
                {filtro?.map((prod)=>{
                    return(
                        <Card key={prod.id}>
                            <ProductImage source={prod.foto} />
                            <ContainerText>
                            <Title>
                                {prod.nome}
                            </Title>
                            <Price>
                                R$ {prod.preco.toFixed(2)}
                            </Price>
                            </ContainerText>
                        </Card>
                    )
                })}
            </>
        )
    }
  return (
    <>
    <Container>
         <ShowProduct />
    </Container>
    <Menu />
    </>
  )
}

