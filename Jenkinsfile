pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t ngozin/chat-app .'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Run your tests here"'
            }
        }
        stage('Push') {
            steps {
                withCredentials([string(credentialsId: 'chatappdockerhub', variable: 'DOCKER_PASSWORD')]) {
                    sh 'echo $DOCKER_PASSWORD | docker login -u ngozin --password-stdin'
                }
                sh 'docker push ngozin/chat-app:latest'
            }
        }
        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s-deployment.yaml'
            }
        }
    }
}
