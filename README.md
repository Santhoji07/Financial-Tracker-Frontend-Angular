# Financial Tracker Frontend (Angular)

This project is the frontend of a Financial Tracker application, built using [Angular CLI](https://github.com/angular/angular-cli).

Check this repository for Backend and Database setup with Springboot and MySQL -> https://github.com/Santhoji07/Financial-Tracker-Springboot-MySql.git

## Features

- Track and manage your expenses
- Dashboard with data visualization
- Responsive design
- Built with Angular 19+
- SCSS styling
- Unit and e2e testing setup

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Santhoji07/Financial-Tracker-Frontend-Angular.git
   cd Financial-Tracker-Frontend-Angular
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Development Server

Start the local server with:

```bash
ng serve
```

Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/). The application will automatically reload if you change any source files.

### Building for Production

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

This project uses [Karma](https://karma-runner.github.io) for unit testing.

```bash
ng test
```

### Running End-to-End Tests

To run end-to-end tests (configure a framework as needed):

```bash
ng e2e
```

## Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For more commands, run:

```bash
ng generate --help
```

## Project Structure

- `src/` - Source code for the Angular application
- `public/` - Static assets
- `.vscode/` - Recommended VS Code settings and tasks
- `angular.json` - Angular workspace configuration
- `.editorconfig` - Editor configuration for consistent coding styles

## Recommended VS Code Extensions

- Angular Language Service (`angular.ng-template`)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss your ideas.

If you have specific features or usage instructions you'd like to highlight, let me know!

