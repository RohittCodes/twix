# Twix

Twix is a simple, yet effective tool for mind mapping you ideas into a visual representation. It is a web application that allows you to create, edit and customize your mind maps. Twix is a great tool for brainstorming, planning, organizing and presenting your ideas.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Technologies](#technologies)
- [Usage](#usage)
- [Additional Usage](#additional-usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- Create mind maps with nodes and connections
- Customize nodes and connections with colors and styles
- Drag and drop nodes to rearrange them
- Zoom in and out of the mind map
- AI integration for auto-generating mind maps
  - Text to mind map conversion
  - Explainable AI for mind map generation, and AI suggestions for mind map improvement
  - AI-powered mind map analysis and insights
- Export mind maps as json, png, pdf, svg, txt, and markdown files. (JSON is the default format, and others are yet to be implemented)
- Import mind maps from json files

## Installation

1. Clone the repository
2. Install the dependencies
   ```bash
   npm install
   ```
3. Start the development server
   ```bash
    npm run dev
    ```
4. Open the browser and go to `http://localhost:3000`
5. Start creating mind maps!
6. To build the project for production, run
   ```bash
   npm run build
   ```
    and then
    ```bash
    npm run start
    ```
7. To run the tests, run
  ```bash
   npm run test
   ```

## Technologies

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [CopilotKit](https://docs.copilotkit.ai/)
- [DagreJS](https://www.npmjs.com/package/dagrejs)
- [React Flow](https://reactflow.dev/)
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- [Zod](https://zod.dev/)
- [Shadcn-ui](https://ui.shadcn.com/)
- [Radix-ui](https://radix-ui.com/)

## Usage

1. Create a new twix file by clicking on the `File` menu and selecting `New File` or `Save as new file`, as there's always a default file open.
2. Add nodes by clicking on the `Edit` menu and selecting `Add Node`.
3. Connect nodes by clicking on the `Edit` menu and selecting `Connect Nodes`.
4. Customize nodes and connections by right-clicking on them.
5. Drag and drop nodes to rearrange them.
6. Zoom in and out of the mind map using the zoom buttons.
7. Export the mind map by clicking on the `File` menu and selecting `Export`.
8. Import a mind map by clicking on the `File` menu and selecting `Import`.

## Additional Usage

1. To use the AI features, click on the `Chat with AI` button on the bottom right corner.
2. You can even generate suggestions for your mind map by clicking on the `Generate Suggestions` button, which can be accessed when a node is selected.

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push to the branch
6. Create a pull request
7. Wait for the pull request to be reviewed
8. Merge the pull request
9. Celebrate your contribution!
10. If you find any bugs or have any feature requests, please create an `issue`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
