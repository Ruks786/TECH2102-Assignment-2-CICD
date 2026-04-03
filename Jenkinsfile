pipeline {
    agent any

    stages {

        stage('Test') {
            agent {
                docker {
                    image 'node:22.17.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                npm install
                npm test
                '''
            }
        }

        stage('Build') {
            agent {
                docker {
                    image 'node:22.17.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                npm run build
                ls -la dist
                '''
            }
        }
    }
}