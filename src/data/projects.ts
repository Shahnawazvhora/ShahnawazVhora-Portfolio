import { Project } from '@/types/Project'

export const projects: Project[] = [
    {
        year: '2024',
        title: 'Real Time News Aggregator',
        techStack: 'React.js, Bootstrap, Fake-News-API',
        githubLink: 'https://github.com/Shahnawazvhora/Real-Time-News-Aggregator',
        description: 'A React app that aggregates news from multiple sources and displays them in a user-friendly interface. It uses the NewsAPI to fetch news articles and displays them in a grid layout with a search bar to filter articles by keyword.'
    },
    {
        year: '2023',
        title: 'E-Commerce Shopping Cart',
        techStack: 'React.js, Bootstrap, Redux',
        githubLink: 'https://github.com/Shahnawazvhora/React.js-ECommerceShoppingCart',
        liveLink: 'https://react-js-e-commerce-shopping-cart.vercel.app/',
        description: 'A React app that allows users to browse and purchase products. It uses the FakeStoreAPI to fetch product data and displays them in a grid layout. Implemented Redux for state management to handle cart functionality including incrementing/decrementing product quantities and calculating total cart value. Users can add/remove items and see real-time price updates.'
    },
    {
        year: '2024',
        title: 'Random Password Generator',
        techStack: 'React.js, Bootstrap',
        githubLink: 'https://github.com/Shahnawazvhora/React.js-RandomPasswordGenrator',
        liveLink: 'https://shahnawazvhora.github.io/React.js-RandomPasswordGenrator/',
        description: 'A React app that generates secure random passwords with customizable options. Users can specify password length (8-32 characters) and choose to include uppercase letters, lowercase letters, numbers, and special characters. Features a copy-to-clipboard button for easy password copying and a strength indicator showing how secure the generated password is. The interface is clean and responsive, built with React and styled with Bootstrap for a polished look.'
    },
    {
        year: '2024',
        title: 'Drum Kit',
        techStack: 'HTML5, CSS3, JavaScript',
        githubLink: 'https://github.com/Shahnawazvhora/JavaScript_Drum_Kit',
        liveLink: 'https://shahnawazvhora.github.io/JavaScript_Drum_Kit/',
        description: 'An interactive drum kit built with vanilla JavaScript that lets you play drum sounds by pressing keyboard keys. Each key corresponds to a different drum sound - including kick drum, snare, hi-hat, crash cymbal, and toms. When a key is pressed, it triggers the corresponding drum sound and shows a visual animation, creating an engaging drumming experience right in your browser.'
    },
    {
        year: '2023',
        title: 'Calculator App',
        techStack: 'HTML5, CSS3, React.js',
        githubLink: 'https://github.com/Shahnawazvhora/JavaScript_Calculator_App',
        liveLink: 'https://shahnawazvhora.github.io/JavaScript_Calculator_App/',
        description: 'A calculator app built with React.js that performs basic arithmetic operations like addition, subtraction, multiplication and division. Features a clean, responsive interface with a display screen showing both the current input and calculation history. Includes decimal support, clear/delete functionality, and keyboard input handling for a seamless user experience.'
    },
    {
        year: '2024',
        title: 'Clock App',
        techStack: 'HTML5, CSS3, JavaScript',
        githubLink: 'https://github.com/Shahnawazvhora/Clock_JS',
        liveLink: 'https://shahnawazvhora.github.io/Clock_JS/',
        description: 'An elegant analog clock built with vanilla JavaScript that displays real-time hours, minutes and seconds with smooth hand movements. Features a minimalist design with custom CSS styling for clock face, hands and numbers. The clock updates continuously to show the current time and includes subtle animations for a polished look.'
    },
    {
        year: '2023',
        title: 'Weather App',
        techStack: 'HTML5, CSS3, React.js',
        githubLink: 'https://github.com/Shahnawazvhora/React.js-Weather-app',
        liveLink: 'https://shahnawazvhora.github.io/React.js-Weather-app/',
        description: 'A weather application built with React.js that provides real-time weather information for any city worldwide. Features include current temperature, humidity, wind speed, and weather conditions with corresponding icons. Users can search for cities and get instant weather updates powered by the OpenWeatherMap API. The app includes a responsive design with a clean, intuitive interface and smooth animations for weather transitions.'
    }
] 