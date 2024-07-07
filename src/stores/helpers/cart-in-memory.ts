import { ProductInCardType, ProductType } from "@/@types/product";


/*
    @description Adiciona novo produto no carrinho
    @param {Array} Produtos atuais no carrinho
    @param {Object} Novo produto a ser adicionado
    @returns {Array} Retorna o carrinho atualizado
*/
export function add(productsInCart: ProductInCardType[], newProduct: ProductType){

    const existingProduct = productsInCart.find((product) => product.id === newProduct.id)

    if (existingProduct){
        return productsInCart.map((product) => product.id === existingProduct.id 
            ? {...product, quantity: product.quantity + 1}
            : product
        )
    }

    return [...productsInCart,{ ...newProduct, quantity: 1}]
}

/*
    @description Remove um produto do carrinho ou diminuiu sua quantidade em -1 enquanto sua quantidade for maior que 1
    @param {Array} Produtos atuais no carrinho
    @param {String} O id do produto a ser removido
    @returns {Array} Array atualizado sem produtos com quantidade zerada
*/
export function remove(productsInCart: ProductInCardType[], productId: string){

    const updatedProducts = productsInCart.map((product) => product.id === productId 
        ? {
            ...product,
            quantity: product.quantity > 1 ? product.quantity - 1 : 0
        }
        : product

    )

    return updatedProducts.filter((product) => product.quantity > 0)
}