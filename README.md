CRM Statistics Dashboard
A visually appealing and fully responsive CRM statistics dashboard built with HTML, CSS, and JavaScript. The dashboard displays various statistics such as total sales, new customers, conversion rates, and sales trends using charts. The design focuses on clean and modern UI, offering smooth user experience with dynamic interactions and data filtering.

Features
Responsive Design: Optimized for various screen sizes including mobile, tablet, and desktop.
Interactive Elements: Hover effects on cards and smooth transitions enhance the user experience.
Data Visualization:
Pie Chart: Displays sales distribution across categories.
Line Chart: Visualizes sales trends over time.
Time Range Filtering: Allows users to filter data by different time periods (e.g., 1 day, 1 week, 1 month, 1 year).
Dummy Data: Simulated API data for demonstration purposes.
Technologies Used
HTML5: Structure of the web page.
CSS3: Styling and responsive design.
JavaScript: Client-side interactivity and dynamic content updates.
Chart.js: For rendering responsive and beautiful charts.
Getting Started
Follow these instructions to set up the project on your local machine.

Prerequisites
To run this project locally, you need a browser and any code editor to view/edit the files.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/crm-statistics-dashboard.git
Navigate to the project directory:

bash
Copy code
cd crm-statistics-dashboard
Open the index.html file in your browser:

You can simply double-click the index.html file or use the command:

bash
Copy code
open index.html
File Structure
bash
Copy code
crm-statistics-dashboard/
│
├── index.html        # The main HTML file
├── styles.css        # CSS for the layout and styling
├── scripts.js        # JavaScript for interactivity and chart rendering
├── README.md         # Project documentation
How It Works
Cards: Display total sales, new customers, and conversion rates. The data in the cards is dynamically updated based on the selected time range.

Charts:

Pie Chart visualizes sales distribution across different product categories.
Line Chart shows sales trends over time.
Time Selector: A dropdown allows users to select a time range (1 day, 1 week, 1 month, 1 year) to filter data. The dashboard fetches simulated data and updates charts and statistics accordingly.

Demo
You can see the dashboard in action by simply opening the index.html file in any browser.

Customization
Update Data: You can easily modify the dummy data in the scripts.js file or integrate a real API by replacing the fetchData function.
Chart Types: The charts use Chart.js library. To change chart types or add more visualizations, refer to the Chart.js documentation.

License
This project is licensed under the MIT License - see the LICENSE file for details.
