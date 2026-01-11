export default function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">CoderKit vs Alternatives</h2>
        <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-200">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Feature</th>
                <th className="py-3 px-4 text-center gradient-bg">CoderKit</th>
                <th className="py-3 px-4 text-center">Pydroid</th>
                <th className="py-3 px-4 text-center">AIDE</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-3 px-4">Offline Python</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4">Go & C Support</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr>
                <td className="py-3 px-4">20+ Visualizers</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4">Structured Courses</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr>
                <td className="py-3 px-4">Ghost Code Practice</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4">VS Code Sync</td>
                <td className="py-3 px-4 text-center text-green-500"><i className="fa-solid fa-check"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
                <td className="py-3 px-4 text-center text-gray-300"><i className="fa-solid fa-xmark"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
