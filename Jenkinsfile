pipeline {
    agent any
    stages {
    stage('checkout'){
        steps{
            checkout scm
    }
    }

    stage('Test'){
        steps{
            sh 'sudo apt install npm -y'
            sh 'sudo npm update -g npm'
        }
    }

        stage("Build Image"){
        steps{
            sh 'sudo docker build -t robot .'
        }
    }

    stage("Docker Push"){
        steps{
            withCredentials([usernamePassword(credentialsId: 'docker_cred', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]){
                sh "sudo docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                sh "sudo docker tag robot sonu861/hand"
                sh "sudo docker push sonu861/hand"
                sh "sudo docker logout"
            }
        }
    }
}
}


