import axios from "axios";
import Card from "./components/card";
import { useEffect, useState } from "react";
export default function App() {

    const [tarjetas, setTarjetas] = useState([])
    const [PopupData, setPopupData] = useState(null)

    useEffect(() => {

        axios.get("http://localhost:8000/tarjetas")
        .then(response => {
            setTarjetas(response.data)
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }, []);
    console.log(tarjetas);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-6">Galeria de imagenes</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {tarjetas.map(item => (
                <Card onClick={() => setPopupData(item)} key={item.id} {...item} />
            ))}
           </div>
            {PopupData && ( 
            <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4">
                <button className="mb-4" onClick={() => setPopupData(null)}>Cerrar</button>
                <img className="w-full h-48 object-cover" src={PopupData.imagen} alt={PopupData.titulo} />
                <h2 className="text-lg font-semibold">{PopupData.titulo}</h2>
                <p className="text-gray-600">{PopupData.descripcion}</p>
            </div>
        </div>)}
        </div>
            )}