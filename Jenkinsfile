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
            sh 'sudo docker run -it --name camera robot /bin/bash'
        }
    }
}
}


