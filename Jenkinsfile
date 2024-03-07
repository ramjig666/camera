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
            sh 'docker build -t robot .'
        }
    }

    stage("Docker Push"){
        steps{
            withCredentials([usernamePassword(credentialsId: 'docker_cred', passwordVariable: 'DOCKERHUB_PASSWORD', usernameVariable: 'DOCKERHUB_USERNAME' )]){
                sh "docker login -u $DOCKERHUB_USERNAME -p $DOCKERHUB_PASSWORD"
                sh "docker tag my robot sonu861/hand"
                sh "docker push sonu861/hand"
                sh "docker logout"
            }
        }
    }
}
}


