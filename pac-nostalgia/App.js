import { Routes } from "./src/Routes";
import { CartProvider } from "./src/context/cart";

export default function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  )
}