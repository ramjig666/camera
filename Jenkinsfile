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
        }
    }

        stage("Build Image"){
        steps{
            sh 'sudo docker build -t robot .'
        }
    }

    stage("Docker Push"){
        steps{
            withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME' )]){
                sh "sudo docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                sh "sudo docker tag my robot sonu861/hand"
                sh "sudo docker push sonu861/hand"
                sh "sudo docker logout"
            }
        }
    }
}
}


