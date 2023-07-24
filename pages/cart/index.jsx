import Title from "@/components/ui/Title";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_436px)]">
      <div className="flex flex-wrap items-center">
        <div className="min-h-[calc(100vh_-_436px)] flex items-center flex-1 md:px-10">
          <table className="w-full text-sm text-center text-gray-500">
            <thead className="text-xs text-gray-400 uppercase bg-gray-700">
              <tr>
                <th scope="col" className="sm:py-3 sm:px-6 p-1">PRODUCT</th>
                <th scope="col" className="sm:py-3 sm:px-6 p-1">EXTRAS</th>
                <th scope="col" className="sm:py-3 sm:px-6 p-1">PRICE</th>
                <th scope="col" className="sm:py-3 sm:px-6 p-1">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
                <td className="sm:py-4 sm:px-6 p-1 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                  <Image className="max-sm:w-8"
                    src="/images/pizza.png"
                    alt="cart"
                    width={50}
                    height={50}
                  />
                  <span>Good Pizza</span>
                </td>
                <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">
                  <span>mayonez, acı sos, ketçap</span>
                </td>
                <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">$20</td>
                <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary py-6 lg:py-0 lg:min-h-[calc(100vh_-_436px)] text-white flex flex-col gap-4 px-10 justify-center lg:w-auto w-full
        text-center lg:text-start">
            <Title className="text-[40px]">CART TOTAL</Title>

            <div className="flex flex-col">
                <span><b>Subtotal:</b> $20</span>
                <span><b>Discount:</b> $0.00</span>
                <span><b>Total:</b> $20</span>
            </div>
            <button className="btn-primary w-max flex mx-auto">CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
