export const EventsList = (events, onLike, onAddToCalendar) => {
    return events.map(event => `
        <div class="event-card">
            <h3>${event.name}</h3>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
            <button onclick="onLike(${event.id})">Like</button>
            <button onclick="onAddToCalendar('${event.name}', '${event.time}')">Add to Calendar</button>
        </div>
    `).join('');
};
