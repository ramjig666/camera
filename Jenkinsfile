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

    stage('start'){
        steps{
            sh 'npm react-scripts start'
        }
    }
}
}


