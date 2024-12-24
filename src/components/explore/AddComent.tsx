export const AddComent = () => {
  return (
    <div className="p-4  bg-white rounded-lg shadow-md w-full md:w-9/12">
      {/* <div className="lg:col-span-4 col-span-1"> */}
        <form action="" method="POST" className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Write a review
          </h2>
          <div className="flex justify-start items-center space-x-1 mb-4">
            <input
              type="radio"
              id="5-stars"
              name="rating"
              value="5"
              className="hidden"
            />
            <label
              // for="5-stars"
              className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
            >
              ★
            </label>
            <input
              type="radio"
              id="4-stars"
              name="rating"
              value="4"
              className="hidden"
            />
            <label
              // for="4-stars"
              className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
            >
              ★
            </label>
            <input
              type="radio"
              id="3-stars"
              name="rating"
              value="3"
              className="hidden"
            />
            <label
              // for="3-stars"
              className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
            >
              ★
            </label>
            <input
              type="radio"
              id="2-stars"
              name="rating"
              value="2"
              className="hidden"
            />
            <label
              // for="2-stars"
              className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
            >
              ★
            </label>
            <input
              type="radio"
              id="1-star"
              name="rating"
              value="1"
              className="hidden"
            />
            <label
              // for="1-star"
              className="text-yellow-400 text-2xl cursor-pointer hover:scale-110"
            >
              ★
            </label>
          </div>
          <textarea
            id="review"
            name="review"
            rows={4}
            required
            className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-watercourse-600 focus:border-watercourse-600"
            placeholder="Write your review"
          ></textarea>
          <div className="text-right py-4">
            <a
              href="/user"
              className="text-white bg-watercourse-600 hover:bg-watercourse-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3"
            >
              Publicar
            </a>
          </div>
        </form>
      {/* </div> */}
    </div>
  );
};
