export default function Card({imagen, titulo, descripcion, onClick}) {
  return (

    <div onClick={onClick} className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src={imagen}
        alt="titulo"
      />
      

      <div className="p-4">
        <h1 className="text-lg font-semibold">{titulo}</h1>
        <p className="text-gray-600">{descripcion}</p>
      </div>
    </div>
  );
}