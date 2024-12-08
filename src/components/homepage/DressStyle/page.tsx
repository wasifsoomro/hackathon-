// components/BrowseStyles.tsx
export default function BrowseStyles() {
  return (
      <section className="py-8  px-4 max-w-full h-auto mx-auto bg-lightGray  rounded-[60px]">
          <h2 className="text-center text-3xl font-bold mb-10">Browse by Dress Style</h2>
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center gap-4">
              {/* Row 1 */}
              <div className="flex flex-col lg:flex-row gap-4 mb-4 w-full lg:w-auto items-center justify-center">
                  <div className="bg-white h-[300px] w-full  lg:w-[400px] rounded-[40px] flex overflow-hidden">
                      <div>
                          <h3 className="font-bold p-6 text-xl mb-4">Casual</h3>
                      </div>
                      <div className="">
                          <img src="/image 11.png" alt="Casual" className="w-full h-full object-cover" />
                      </div>
                  </div>
                  <div className="bg-white h-[300px] w-full  lg:w-[600px] rounded-[40px] flex overflow-hidden">
                      <div>
                          <h3 className="font-bold text-xl mb-4 p-6">Formal</h3>
                      </div>
                      <div className="">
                          <img src="/image 13.png" alt="Formal" className="w-full h-full object-cover" />
                      </div>
                  </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-auto items-center justify-center">
                  <div className="bg-white h-[300px] w-full  lg:w-[600px] rounded-[40px] flex overflow-hidden">
                      <div>
                          <h3 className="font-bold text-xl mb-4 p-6">Sporty</h3>
                      </div>
                      <div className="">
                          <img src="/image 12.png" alt="Sporty" className="w-full h-full object-cover" />
                      </div>
                  </div>
                  <div className="bg-white h-[300px] w-full   lg:w-[400px] rounded-[40px] flex overflow-hidden">
                      <div>
                          <h3 className="font-bold text-xl mb-4 p-6">Traditional</h3>
                      </div>
                      <div className=" ">
                          <img src="/image 14.png" alt="Traditional" className="w-full h-full object-cover" />
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}
