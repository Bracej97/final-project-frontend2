import api from "../api/axios";

export const fetchEvents = async (category = "all") => {
    useEffect(() => {
        const getAllEvents = async () => {
            const response = await api.get('EventAPI/')
            setList(response.data.data)


            return list;
        }
        getAllFAQ()
    }, []);

    try {
        const response = await fetch(`/api/events`); // Confirm with backend team
        const events = await response.json();
        return category === "all"
            ? events
            : events.filter(event => event.category === category);
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

export default fetchEvents;
