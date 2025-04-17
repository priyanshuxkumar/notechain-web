import ProfileAvatar from "./Avatar";

const dummy_users = [
  {
    name: "Maud Nathan",
  },
  {
    name: "Gertrude Stein",
  },
  {
    name: "Wilma Mankiller",
  },
  {
    name: "Pearl Kendrick",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full bg-gradient-to-b from-blue-50 to-white py-16 md:py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-24 h-32 bg-yellow-100 rounded-md transform rotate-12 opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-32 h-40 bg-blue-100 rounded-md transform -rotate-6 opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-28 bg-green-100 rounded-md transform rotate-3 opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-8">
            <div>
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-4">
                Student-to-Student Exchange
              </span>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Trade Your</span>
                <span className="block text-blue-600">Study Materials</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Trade handwritten notes, cheatsheets, and study guides with students around the world.{" "}
                <span className="text-blue-600 font-bold">
                  Built on Solana.
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
                Share Your Notes
              </button>
              <button className="px-8 py-3 bg-white text-gray-900 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors">
                Find Materials
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {dummy_users.map((item, index) => (
                  <div
                    key={index}
                    className="inline-block h-8 w-8 rounded-full bg-gray-200 ring-2 ring-white"
                  >
                    <ProfileAvatar name={item.name} />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">99+</span>{" "}
                students already joined
              </p>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Notebook with handwritten notes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[280px] h-[350px] bg-white rounded-md shadow-xl transform -rotate-6">
                <div className="absolute left-0 top-0 bottom-0 w-[30px] bg-blue-100 rounded-l-md">
                  <div className="h-full flex flex-col justify-center items-center">
                    <div className="w-4 h-4 rounded-full bg-white mb-2"></div>
                    <div className="w-4 h-4 rounded-full bg-white mb-2"></div>
                    <div className="w-4 h-4 rounded-full bg-white"></div>
                  </div>
                </div>
                <div className="absolute left-[30px] right-0 top-0 bottom-0 p-4">
                  <div className="border-b border-gray-200 pb-2 mb-3">
                    <div className="text-sm font-semibold text-blue-600">
                      Organic Chemistry
                    </div>
                    <div className="text-xs text-gray-500">
                      by Sarah J. • 4.8 ★
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-2 bg-gray-200 rounded-full"
                      >
                        <div
                          className="h-full bg-gray-400 rounded-full"
                          style={{ width: `${Math.random() * 70 + 20}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full text-white text-xs font-medium">
                    TRADE
                  </div>
                </div>
              </div>

              {/* Cheatsheet */}
              <div className="absolute top-1/4 right-1/4 z-10 w-[200px] h-[250px] bg-yellow-50 rounded-md shadow-lg transform rotate-12">
                <div className="p-3">
                  <div className="text-xs font-bold text-gray-800 mb-2">
                    CALCULUS CHEATSHEET
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-xs font-bold mr-2">
                        f&apos;
                      </div>
                      <div className="text-[8px] text-gray-700">{`d/dx [f(x) + g(x)] = f'(x) + g'(x)`}</div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center text-xs font-bold mr-2">
                        ∫
                      </div>
                      <div className="text-[8px] text-gray-700">{`∫ x^n dx = x^(n+1)/(n+1) + C`}</div>
                    </div>
                    <div className="w-full h-[1px] bg-yellow-200 my-2"></div>
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full h-1 bg-yellow-200 rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Study guide */}
              <div className="absolute bottom-1/4 left-1/4 z-0 w-[180px] h-[220px] bg-green-50 rounded-md shadow-lg transform -rotate-12">
                <div className="p-3">
                  <div className="text-xs font-bold text-gray-800 mb-2">
                    HISTORY TIMELINE
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-10 text-[8px] font-bold text-gray-700 mr-1">
                        1914-1918
                      </div>
                      <div className="flex-1 h-1 bg-green-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 text-[8px] font-bold text-gray-700 mr-1">
                        1929
                      </div>
                      <div className="flex-1 h-1 bg-green-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 text-[8px] font-bold text-gray-700 mr-1">
                        1939-1945
                      </div>
                      <div className="flex-1 h-1 bg-green-200 rounded-full"></div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 text-[8px] font-bold text-gray-700 mr-1">
                        1947
                      </div>
                      <div className="flex-1 h-1 bg-green-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
