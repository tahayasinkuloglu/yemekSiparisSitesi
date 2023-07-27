import Title from "../ui/Title";
import Image from "next/image";

const Products = () => {
  return (
    <div className="lg:mt-10 lg:px-10 flex-1 lg:text-start text-center mb-10 lg:mb-0">
      <Title className="text-[40px]">Products</Title>
      <div className="w-full mt-5 h-80 overflow-y-auto">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/hamburger1.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Burger
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/hamburger2.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Burger
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/hamburger3.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Burger
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/hamburger4.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Burger
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/hamburger3.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Burger
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/pizza1.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Pizza
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/pizza3.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Pizza
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/pizza4.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Pizza
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/pizza5.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Pizza
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
          <thead className="text-gray-400 uppercase bg-gray-700 text-xs sm:text-sm">
            <tr>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                IMAGE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ID
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                TITLE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                PRICE
              </th>
              <th scope="col" className="sm:py-3 py-2 sm:px-6">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-gray-700 hover:bg-primary transition-all text-xs sm:text-sm">
              <td className="sm:py-4 py-2 sm:px-6 font-medium whitespace-nowrap hover:text-white flex items-center justify-center gap-2">
                <Image
                  src="/images/pizza1.png"
                  alt="food"
                  width={50}
                  height={50}
                />
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                973126
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                Pizza
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                $15
              </td>
              <td className="sm:py-4 py-2 sm:px-6 font-medium hover:text-white">
                <button className="btn-primary !bg-danger font-semibold">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
