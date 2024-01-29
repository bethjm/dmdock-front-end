# DM Dock

This application was designed with Dungeons and Dragons (D&D) game masters in mind, particularly my partner who runs two D&D games each week. The primary challenge he faced was the inconvenience of managing multiple open programs during game sessions, leading to confusion and system slowdowns on his laptop.

***Features***

- **Centralized Information:** DM Dock serves as a one-stop solution for game masters to access monster stats, manage player information, and generate random weather patterns.

- **Favorites List:** Users can save monster data in a favorites list, facilitating quick and easy access to essential information.

- **Private Profiles:** DM Dock utilizes JWT Web tokens, allowing each game master to create and maintain their private profiles for added security.

***Tech Stack***

- **Backend:** Built using Django, PostgreSQL, JSON Web Tokens.
  
- **Frontend:** Developed with ReactJS, leveraging React Hooks, LocalStorage, React Router, and CSS for a seamless user experience.

***Data Sources***

- **Open5e Monster API:** The app pulls information from the Open5e Monster API, making a vast collection of 1,500 monsters easily searchable.

- **Local Storage:** Favorites lists for both monsters and players utilize local storage for data persistence, providing a cost-effective solution.

***Usage***

- Access the website: [DM Dock](https://dmdock.netlify.app/)

- Explore the backend repository: [DM Dock Back End](https://github.com/bethjm/dmdock-front-end)

***User Statistics***

DM Dock currently has 2 active users per month.
