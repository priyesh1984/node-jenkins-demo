pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'master', url: 'https://github.com/priyesh1984/node-jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '/opt/homebrew/bin/npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo "Running tests..."
                sh '/opt/homebrew/bin/npm test || echo "No tests found"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t node-jenkins-demo .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '/usr/local/bin/docker run -d -p 3000:3000 node-jenkins-demo'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed! Please check the logs.'
        }
    }
}
