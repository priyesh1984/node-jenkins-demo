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
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '/usr/local/bin/docker build -t my-first-ci-pipeline .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '/usr/local/bin/docker run -d -p 3000:3000 my-first-ci-pipeline'
            }
        }
    }

    post {
        success {
            echo '✅ Build and deployment successful!'
        }
        failure {
            echo '❌ Build failed!'
        }
    }
}
