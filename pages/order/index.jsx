import Image from "next/image";

const Order = () => {
  return (
    <div className="min-h-[calc(100vh_-_436px)] flex flex-col justify-center items-center md:p-10 p-3 gap-6">
      <div className="flex items-center w-full">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="sm:py-3 sm:px-6 p-1">
                Order ID
              </th>
              <th scope="col" className="sm:py-3 sm:px-6 p-1">
                CUSTOMER
              </th>
              <th scope="col" className="sm:py-3 sm:px-6 p-1">
                ADDRESS
              </th>
              <th scope="col" className="sm:py-3 sm:px-6 p-1">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all">
              <td className="sm:py-4 sm:px-6 p-1 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                63107f5599...
              </td>
              <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">
                Taha Yasin KULOĞLU
              </td>
              <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">
                İstanbul
              </td>
              <td className="sm:py-4 sm:px-6 p-1 font-medium hover:text-white">
                $18
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between w-full bg-primary md:p-10 p-2">
        <div className="flex flex-col items-center gap-1">
          <Image className="md:w-10 w-7" src="/images/paid.png" alt="paid" width={40} height={40} />
          <span>Payment</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image className="md:w-10 w-7" src="/images/bake.png" alt="paid" width={40} height={40} />
          <span>Preparing.</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image className="md:w-10 w-7" src="/images/bike.png" alt="paid" width={40} height={40} />
          <span>On the way</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Image className="md:w-10 w-7" src="/images/delivered.png" alt="paid" width={40} height={40} />
          <span>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export default Order;
