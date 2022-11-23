import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { Api } from '../../services';
import { Menu } from '../../components/Menu';



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
                        <View key={prod.id}>
                            <Text>
                                {prod.nome}
                            </Text>
                            <Text>
                                {prod.descricao}
                            </Text>
                        </View>
                    )
                })}
            </>
        )
    }
  return (
    <>
    <View>
         <ShowProduct />
         
    </View>
    <Menu />
    </>
  )
}

