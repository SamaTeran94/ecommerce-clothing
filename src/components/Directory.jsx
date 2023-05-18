/* eslint-disable react/prop-types */

const Directory = ({categories}) => {
  return (
    <div className="ml-5 mr-5 mt-5">
    <div className="flex gap-8">
      {categories.slice(0, 3).map(({ title, id, imageUrl }) => (
        <div
          key={id}
          className="flex flex-col justify-center items-center border border-black flex-1 h-72 cursor-pointer bg-cover relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="border border-black p-6 text-center opacity-70 bg-slate-300 font-light">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
          <div className="absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-25 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
    <div className="flex gap-8 mt-6">
      {categories.slice(3, 5).map(({ title, id, imageUrl }) => (
        <div
          key={id}
          className="flex flex-row justify-center items-center border border-black flex-1 h-72 cursor-pointer bg-cover relative"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="border border-black p-6 text-center opacity-70 bg-slate-300 font-light">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
          <div className="absolute inset-0 bg-transparent hover:bg-black hover:bg-opacity-25 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Directory
