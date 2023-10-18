import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api",
    headers: {
        'Content-Type': 'application/json',
        // Vous pouvez ajouter des en-têtes personnalisés ici
      },
      withCredentials: true,
});