
import { fetchEvents } from './EventsAPI.js';
import { EventsList } from './EventsList.js';

const EventsPage = async () => {
    const eventsContainer = document.getElementById('events-container');
    const searchInput = document.getElementById('search-events');
    const categoryFilter = document.getElementById('category-filter');

    // Fetch and render events
    const renderEvents = async () => {
        const searchQuery = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        // Fetch events and filter them
        const events = await fetchEvents(selectedCategory);
        const filteredEvents = events.filter(event =>
            event.name.toLowerCase().includes(searchQuery)
        );

        eventsContainer.innerHTML = EventsList(filteredEvents, likeEvent, addToCalendar);
    };

    // Handle user interactions
    searchInput.addEventListener('input', renderEvents);
    categoryFilter.addEventListener('change', renderEvents);

    // Interaction functions
    const likeEvent = (id) => alert(`You liked event #${id}`);
    const addToCalendar = (name, time) =>
        alert(`Event "${name}" at ${time} added to your calendar!`);

    // Initial render
    await renderEvents();
};

document.addEventListener('DOMContentLoaded', EventsPage);
