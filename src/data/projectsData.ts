import { Project, DemoProject } from '@/types/ProjectTypes'

export const projects: Project[] = [
    {
        title: "Real Time News Aggregator",
        description: "A React app that aggregates news from multiple sources and displays them in a user-friendly interface. It uses the NewsAPI to fetch news articles and displays them in a grid layout with a search bar to filter articles by keyword.",
        image: "/images/Real-Time-News-Aggregator.png",
        imageHeight: 2200,
        techStack: ["React.Js", "Bootstrap", "Fake-News-API"],
        sourceLink: "https://github.com/Shahnawazvhora/Real-Time-News-Aggregator",
    },
    {
        title: "E-Commerce Shopping Cart",
        description: "A React app that allows users to browse and purchase products. It uses the FakeStoreAPI to fetch product data and displays them in a grid layout. Implemented Redux for state management to handle cart functionality including incrementing/decrementing product quantities and calculating total cart value. Users can add/remove items and see real-time price updates.",
        image: "/images/ECommerceShoppingCart.png",
        imageHeight: 6300,
        techStack: ["React.Js", "Bootstrap", "Redux"],
        demoLink: "https://react-js-e-commerce-shopping-cart.vercel.app/",
        sourceLink: "https://github.com/Shahnawazvhora/React.js-ECommerceShoppingCart",
    }
]

export const demoProjects: DemoProject[] = [
    {
        title: "Random Password Generator",
        description: "A React app that generates secure random passwords with customizable options. Users can specify password length (8-32 characters) and choose to include uppercase letters, lowercase letters, numbers, and special characters. Features a copy-to-clipboard button for easy password copying and a strength indicator showing how secure the generated password is. The interface is clean and responsive, built with React and styled with Bootstrap for a polished look.",
        techStack: ["React.Js", "Bootstrap"],
        demoLink: "https://shahnawazvhora.github.io/React.js-RandomPasswordGenrator/",
        sourceLink: "https://github.com/Shahnawazvhora/React.js-RandomPasswordGenrator",
    },
    {
        title: "Drum Kit",
        description: "An interactive drum kit built with vanilla JavaScript that lets you play drum sounds by pressing keyboard keys. Each key corresponds to a different drum sound - including kick drum, snare, hi-hat, crash cymbal, and toms. When a key is pressed, it triggers the corresponding drum sound and shows a visual animation, creating an engaging drumming experience right in your browser.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        sourceLink: "https://github.com/Shahnawazvhora/JavaScript_Drum_Kit",
        demoLink: "https://shahnawazvhora.github.io/JavaScript_Drum_Kit/"
    },
    {
        title: "Calculator App",
        description: "A calculator app built with React.js that performs basic arithmetic operations like addition, subtraction, multiplication and division. Features a clean, responsive interface with a display screen showing both the current input and calculation history. Includes decimal support, clear/delete functionality, and keyboard input handling for a seamless user experience.",
        techStack: ["HTML5", "CSS3", "React.js"],
        sourceLink: "https://github.com/Shahnawazvhora/React.Js-Calculator-App",
        demoLink: "https://shahnawazvhora.github.io/React.Js-Calculator-App/"
    },
    {
        title: "Clock App",
        description: "An elegant analog clock built with vanilla JavaScript that displays real-time hours, minutes and seconds with smooth hand movements. Features a minimalist design with custom CSS styling for clock face, hands and numbers. The clock updates continuously to show the current time and includes subtle animations for a polished look.",
        techStack: ["HTML5", "CSS3", "JavaScript"],
        sourceLink: "https://github.com/Shahnawazvhora/Clock_JS",
        demoLink: "https://shahnawazvhora.github.io/Clock_JS/",
    },
    {
        title: "Weather App",
        description: "A weather application built with React.js that provides real-time weather information for any city worldwide. Features include current temperature, humidity, wind speed, and weather conditions with corresponding icons. Users can search for cities and get instant weather updates powered by the OpenWeatherMap API. The app includes a responsive design with a clean, intuitive interface and smooth animations for weather transitions.",
        techStack: ["HTML5", "CSS3", "React.js"],
        sourceLink: "https://github.com/Shahnawazvhora/React.js-Weather-app",
        demoLink: "https://shahnawazvhora.github.io/React.js-Weather-app/",
    }
] 