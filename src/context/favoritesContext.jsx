import { createContext, useState, useEffect } from "react";

// Crear el contexto
export const FavoritesContext = createContext();

const FavoritesComponentContext = ({ children }) => {
  // Estado para manejar los favoritos
  const [favorites, setFavorites] = useState([]);
  console.log(favorites);

  // Agregar un producto a favoritos
  const agregarFavorito = (producto) => {
    // Verificar si ya está en favoritos
    const existe = favorites.some((fav) => fav.id === producto.id);
    if (!existe) {
      setFavorites([...favorites, producto]);
    }
  };

  // Eliminar un producto de favoritos
  const eliminarFavorito = (id) => {
    const nuevosFavoritos = favorites.filter((producto) => producto.id !== id);
    setFavorites(nuevosFavoritos);
  };

  // Vaciar la lista de favoritos
  const limpiarFavoritos = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, agregarFavorito, eliminarFavorito, limpiarFavoritos }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesComponentContext;