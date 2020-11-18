# React Native & Django Setup

## Tech-stack

- [React Native](https://reactnative.dev/) (using [Expo](https://docs.expo.io/) and [TypeScript](https://www.typescriptlang.org/) workflow) for the frontend client (mobile app)
- [Django](https://www.djangoproject.com/) for the server backend

## Notable Packages (TODO)

Name | Stack | Purpose
---|---|---
[Redux](https://redux.js.org/) | React Native | State Management
[Django REST Framework](https://www.django-rest-framework.org/) | Django | Django-based Web API Library

## Contributing

### Setting up Development Environment

#### Via Docker

1. Clone the repository

   ```git clone https://github.com/JimmeeX/react-native-django.git```

2. Navigate to the directory

    ```cd react-native-django```

3. Create ```.env``` file in ```./frontend``` directory and add the following:

   ```bash
   REACT_NATIVE_PACKAGER_HOSTNAME="<YOUR HOST IP ADDRESS (eg, 192.168.1.16)>"
   ```

4. Run the development environment (requires [Docker](https://www.docker.com/) & [docker-compose](https://docs.docker.com/compose/))

   ```docker-compose up --build```

#### Manually

1. Clone the repository

   ```git clone https://github.com/JimmeeX/react-native-django.git```

2. [Install npm (Node Package Manager)](https://www.npmjs.com/get-npm).

3. Install npm packages in `react-native-django/frontend`.

   ```bash
   npm install
   ```

4. Create a virtual Python environment in `react-native-django/backend` and install required packages.

   ```bash
   virtualenv -p python3 venv
   source venv/bin/activate
   python -m pip install requirements.txt
   ```

5. Start the Expo Client

   ```npm start```

6. In a separate terminal, start the Django server

   ```python manage.py runserver 0.0.0.0:8000```

You can now test the App on your real phone (by scanning the QR Code via Expo app) or on a simulator (via Xcode or Android Studio). More details [here](https://docs.expo.io/get-started/installation/).

### Dev Tools

- [Docker](https://www.docker.com/) - Sets up the dev environment effortlessly
- [flake8](https://flake8.pycqa.org/en/latest/) (Python Linter)
- [pylint](https://flake8.pycqa.org/en/latest/) (Python Linter)
- [black](https://github.com/psf/black) (Python Auto Formatter)
- [ptsvd](https://github.com/microsoft/ptvsd) (Python Debugger)
- [ESLint](https://eslint.org/) (JavaScript/TypeScript Linter)
- [Prettier](https://prettier.io/) (JavaScript/TypeScript Auto Formatter)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)

### CI/CD

#### Github Actions

- Django CI - Runs [Django Testing](https://docs.djangoproject.com/en/3.1/topics/testing/) and [flake8](https://flake8.pycqa.org/en/latest/) Linter
- React Native CI - Runs [Jest](https://jestjs.io/), [ESLint](https://eslint.org/) and [TypeScript](https://www.typescriptlang.org/) Linting
- Docker CI - Builds and runs containers and asserts that port 8000 (for Django) is available.

### Testing

- [Jest](https://jestjs.io/) (JavaScript Testing Framework)
- [Django Testing](https://docs.djangoproject.com/en/3.1/topics/testing/)
