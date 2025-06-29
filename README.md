## UI Garden - React Component Library Deployment Guide

This guide explains how to run the UI Garden React Component Library from Docker Hub using Docker.

#### 🛠 Prerequisites

1. **Docker installed on your machine**
2. **Internet access to pull the Docker image**

#### 🚀 Run the App from Docker Hub

1. **Pull the image from Docker Hub**

```bash
docker pull williamwyl/ui-garden:latest
```

2. **Run the container**

This command runs the container and maps it to localhost:8083:

```bash
docker run -d -p 8083:80 --name wang_wei_coding_assignment12 williamwyl/ui-garden:latest
```



3. **Open the App in Browser**

Go to:

http://127.0.0.1:8083

You should see the production build of the UI Garden React component library.

#### 🛑 Stopping the Container (Optional)

To stop the running container:

```bash
docker stop wang_wei_coding_assignment12
```

To remove it:

```bash
docker rm wang_wei_coding_assignment12
```

#### 📦 About This App

This is a component library built with:

    React + TypeScript
    
    Storybook for interactive previews
    
    Styled-components for styling
    
    Docker for deployment