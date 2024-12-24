import Image from "next/image";

export const JoinCard = () => {
  return (
    <div className="flex justify-center items-center h-auto mt-10">
      <div className="w-5/6 md:w-full lg:w-[950px] mx-10">
        {/* <div className="max-w-[720px] mx-auto"> */}

        {/* <!-- Centering wrapper --> */}
        <div className="relative flex flex-col text-gray-700 shadow-md bg-clip-border rounded-xl w-full items-center px-1 py-2">
          <div className="relative mx-6 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-t-xl h-56 md:h-72 w-11/12">
            <Image
              // src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=927&amp;q=80"
              alt="card-image"
              className="object-cover w-full h-4/5"
              src={"/ventajas/tigre.jpg"}
              width={300}
              height={200}
            />
          </div>
          <div className="px-6 bg-white w-11/12 rounded-b-xl h-auto mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="block font-sans text-base antialiased font-semibold leading-relaxed text-blue-gray-900 md:text-2xl">
                Quieres unirte?
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75 md:text-xl">
              No esperes mas registra tu zoologico ahora y potencia el numero de
              visitantes
            </p>
            <div className="p-6 pt-0">
              <button
                className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 border-watercourse-300 border-solid border mt-5 text-watercourse-300"
                type="button"
              >
                Registrar habitat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};