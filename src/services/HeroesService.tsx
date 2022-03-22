import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-type": "application/json",
    },
});
// const fetchHeroDetailsById = (heroId: any) => {
//     return axios.get(`http://localhost:4000/superheroes/${heroId}`);
// };

const fetchHeroDetailsById = async (heroId: any) => {
    return await apiClient.get(`http://localhost:4000/superheroes/${heroId}`);
}
const HeroesService = {
    fetchHeroDetailsById
}

export default HeroesService;