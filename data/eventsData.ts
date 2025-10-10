const eventsData = {
  scheduled: [
    {
      id: "1a",
      title: "Pixel Palettes",
      description: "24-hour AI-powered hackathon featuring cutting-edge challenges and expert mentorship.",
      href: "/pixelpalettes",
      status: "scheduled",
    },
    /*{
      id: "2a",
      title: "Techno Vision 3.0",
      description: "24-hour AI-powered ideathon featuring cutting-edge challenges and expert mentorship.",
      href: "/technovision",
      status: "scheduled",
    },*/
    {
      id: "2a",
      title: "Wings And Wires",
      description: "24-hour AI-powered hackathon featuring cutting-edge challenges and expert mentorship.",
      href: "/wingsandwires",
      status: "scheduled",
    },

  ],
  upcoming: [
    {
      id: "1b",
      title: "Tech Workshops",
      description: "Regular hands-on workshops covering latest technologies in robotics and automation.",
      href : "",
      status: "upcoming",
    },
  ],
};

// 1. Combine your event arrays into a single list for rendering.
export const allEvents = [...eventsData.scheduled, ...eventsData.upcoming];