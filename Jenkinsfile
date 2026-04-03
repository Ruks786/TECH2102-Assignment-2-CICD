pipeline {
    agent any

    environment {
        NETLIFY_SITE_ID = '03390069-dc5f-4376-9190-fefe1b774af2'
        NETLIFY_AUTH_TOKEN = credentials('myToken')
    }

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
        stage('Deploy') {
            agent {
                docker {
                    image 'node:22.17.1-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                npm install netlify-cli
                npx netlify --version
                echo "Deploying to netlify..."

                npx netlify deploy \
            --dir=dist \
            --prod \
            --site=$NETLIFY_SITE_ID \
            --auth=$NETLIFY_AUTH_TOKEN \
                '''
            }
        }
    }
}