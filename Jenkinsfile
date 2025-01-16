pipeline {
    agent any
    environment {
        AWS_REGION = 'eu-west-2'
        EKS_CLUSTER_NAME = 'chat-app-cluster'
        DOCKER_IMAGE = 'ngozin/chat-app:latest'
        KUBECONFIG = '/home/jenkins/.kube/config'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Ngozi-N/Chat_App_Project.git'
            }
        }
        stage('Terraform Deploy') {
            steps {
                sh '''
                terraform init
                terraform apply -auto-approve
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                sh '''
                docker build -t $DOCKER_IMAGE .
                docker push $DOCKER_IMAGE
                '''
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f deployment.yaml
                kubectl apply -f service.yaml
                '''
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
