export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test Page
        </h1>
        <p className="text-lg text-gray-600">
          If you can see this, React is working correctly!
        </p>
        <div className="mt-4 p-4 bg-orange-100 rounded">
          <p className="text-orange-800">
            This is a simple test to verify that the website is rendering properly.
          </p>
        </div>
      </div>
    </div>
  )
}
