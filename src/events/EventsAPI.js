export const fetchEvents = async (category = "all") => {
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
