const events = [
  { title: "Annual Science Expo", date: "Jan 2026", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80" },
  { title: "Chess Tournament", date: "Feb 2026", image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=900&q=80" },
  { title: "Music Recital", date: "Feb 2026", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { title: "Coding Workshop", date: "Mar 2026", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
  { title: "Art & Craft Day", date: "Mar 2026", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" },
  { title: "Dance Showcase", date: "Apr 2026", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80" },
  { title: "Robotics Lab", date: "Apr 2026", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80" },
  { title: "Bengali Recitation", date: "May 2026", image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=900&q=80" },
  { title: "Career Seminar", date: "May 2026", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80" },
  { title: "Flute Session", date: "Jun 2026", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { title: "Science Practical", date: "Jun 2026", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=900&q=80" },
  { title: "Mathematics Camp", date: "Jul 2026", image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=900&q=80" },
  { title: "Vocal Practice", date: "Jul 2026", image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80" },
  { title: "Guitar Jam", date: "Aug 2026", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80" },
  { title: "Board Review", date: "Aug 2026", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80" },
  { title: "Group Study", date: "Sep 2026", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80" },
  { title: "Spell Bee", date: "Sep 2026", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80" },
  { title: "Open House", date: "Oct 2026", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80" },
  { title: "Talent Hunt", date: "Oct 2026", image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80" },
  { title: "Kids Activity Day", date: "Nov 2026", image: "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?auto=format&fit=crop&w=900&q=80" },
  { title: "Chess League", date: "Nov 2026", image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=900&q=80" },
  { title: "Music Evening", date: "Dec 2026", image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80" },
  { title: "Winter Workshop", date: "Dec 2026", image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80" },
  { title: "Student Meet", date: "Jan 2027", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80" },
  { title: "Drawing Contest", date: "Jan 2027", image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=900&q=80" },
  { title: "Class Presentation", date: "Feb 2027", image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80" },
  { title: "Coding Demo", date: "Feb 2027", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80" },
  { title: "Music Rehearsal", date: "Mar 2027", image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=900&q=80" },
  { title: "Prize Distribution", date: "Mar 2027", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80" },
  { title: "Annual Celebration", date: "Apr 2027", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80" }
];

const collage = document.getElementById("eventsCollage");

function getSpanClass(index) {
  const pattern = [2, 1, 1, 2, 1, 1];
  return pattern[index % pattern.length] === 2 ? "event-card event-card-wide" : "event-card";
}

collage.innerHTML = events
  .map((eventItem, index) => `
    <article class="${getSpanClass(index)}">
      <img src="${eventItem.image}" alt="${eventItem.title}">
      <div class="event-card-body">
        <h3>${eventItem.title}</h3>
        <p>${eventItem.date}</p>
      </div>
    </article>
  `)
  .join("");
