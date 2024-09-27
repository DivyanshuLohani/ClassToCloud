# Class To Cloud (React Native App)

Class To Cloud is an EdTech app that enables coaching institutes to make their offline classes available online. It also offers features like uploading notes, DPPs, and managing students across different batches. This app provides a user-friendly solution for both teachers and students, with a unified platform for lectures, notes, and batch management.

## Features

- **Offline to Online**: Coaching institutes can seamlessly transition their offline classes to online, making them accessible to students.
- **Lecture Playback**: Utilizes \`react-native-video-player\` for streaming lectures.
- **Notes and DPPs**: Teachers can upload notes and DPPs, viewable by students through \`react-native-pdf\`.
- **Batch Management**: Teachers can create and manage batches of students, adding or removing students as per their needs.
- **User-Friendly**: One app serves both teachers and students, providing an intuitive interface for all actions.

## Tech Stack

### Frontend

- **React Native** (without Expo)
- **React Navigation**: For smooth navigation between app screens.
- **React Native Video Player**: To play lecture videos.
- **React Native PDF**: To view notes and DPPs in PDF format.

### Backend

- **Django**: Handles the server-side functionality (setup is managed separately).

## Installation

### Prerequisites

- Ensure you have Node.js and Yarn installed on your system.
- Install React Native CLI.

### Steps

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/DivyanshuLohani/ClassToCloud.git
   \`\`\`

2. **Install dependencies**:
   Navigate to the project directory and run:
   \`\`\`bash
   yarn install
   \`\`\`

3. **Run the app**:
   To run the app on an Android or iOS device:
   \`\`\`bash
   npx react-native run-android   # For Android
   npx react-native run-ios       # For iOS
   \`\`\`

## Usage

1. **Teacher**: Create and manage batches, upload lecture videos, notes, and DPPs.
2. **Student**: Access classes, watch lectures, and view the uploaded notes and DPPs.

## Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

## License

This project is licensed under the CC BY-NC 4.0 License.