import React, {useContext} from 'react';
import { View, Text } from 'react-native';
import { Menu } from "../../components/Menu";

import { CartContext } from '../../context/cart';

export const Carrinho = () => {
    const { produtoCarrinho,
        adcionandoItem,
        removendoItemCarrinho,
        removendoItem,
        limpandoCarrinho,} = useContext(CartContext);
  return (
    <>
    <View>
        {produtoCarrinho.length==0&&(
            <Text>
                Carrinho Vazio!
            </Text>
        )}
    </View>
    <Menu />
    </>
  )
}

