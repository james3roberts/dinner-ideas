import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

function DinnerIdeas() {
  return (
    <Layout>
      <>
        <Navbar />
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-8">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Dinner Ideas</h1>
            <p className="text-lg">This is where you will input the information for the dinners.</p>
          </div>
          <div className="px-4 py-8">
            {/* CENTERED FORM */}
            <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md mx-auto">
              <form className="flex flex-col space-y-4">
                {/* Meal Name */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Meal Name</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter meal name"
                  />
                </div>

                {/* Prep Time */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Prep Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter prep time"
                  />
                </div>

                {/* Cook Time */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Cook Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter cook time"
                  />
                </div>

                {/* Total Time */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Total Time</label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter total time"
                  />
                </div>

                {/* Calories */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Calories</label>
                  <input
                    type="number"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter calories"
                  />
                </div>

                {/* Yield */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Yield</label>
                  <input
                    type="number"
                    className="border border-gray-300 p-2 rounded"
                    placeholder="Enter serving size or yield"
                  />
                </div>

                {/* Ingredients */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Ingredients</label>
                  <textarea
                    className="border border-gray-300 p-2 rounded"
                    placeholder="List ingredients"
                    rows={4}
                  />
                </div>

                {/* Directions */}
                <div className="flex flex-col">
                  <label className="mb-1 font-semibold">Directions</label>
                  <textarea
                    className="border border-gray-300 p-2 rounded"
                    placeholder="List directions"
                    rows={6}
                  />
                </div>

                {/* Save Button */}
                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </Layout>
  );
}

export default DinnerIdeas;
