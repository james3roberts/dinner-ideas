import Layout from '../components/Layout';

function DinnerIdeas() {
  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4">Dinner Ideas</h1>
          <p className="text-lg">This is where you will input the information for the dinners.</p>
        </div>
        <div className="px-4 py-8">
          {/* CENTERED FORM */}
          <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md mx-auto">
            <form className="flex flex-col space-y-6">
              {/* Meal Name */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Meal Name</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-lg w-full"
                  placeholder="Enter meal name"
                />
              </div>

              {/* Time Info Section (2 Columns on Small Screens, 3 on Medium Screens) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Prep Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-lg"
                    placeholder="e.g., 15 min"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Cook Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-lg"
                    placeholder="e.g., 30 min"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Total Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded-lg"
                    placeholder="e.g., 45 min"
                  />
                </div>
              </div>

              {/* Nutrition Info Section (Always 2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Calories</label>
                  <input
                    type="number"
                    className="border border-gray-300 p-2 rounded-lg"
                    placeholder="Enter calories"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Yield</label>
                  <input
                    type="number"
                    className="border border-gray-300 p-2 rounded-lg"
                    placeholder="Servings or yield"
                  />
                </div>
              </div>

              {/* Ingredients */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Ingredients</label>
                <textarea
                  className="border border-gray-300 p-3 rounded-lg min-h-[200px] w-full"
                  placeholder="List ingredients"
                />
              </div>

              {/* Directions */}
              <div className="flex flex-col">
                <label className="mb-1 font-semibold">Directions</label>
                <textarea
                  className="border border-gray-300 p-3 rounded-lg min-h-[300px] w-full"
                  placeholder="List directions"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DinnerIdeas;
