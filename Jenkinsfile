pipeline {
  agent any
  tools {
    nodejs 'node 18'
  }
  stages {
    stage ('Build') {
      steps {
        script {
          sh 'npm install'
          sh 'rm -rf dist'
          sh 'ng build --prod'
        }
      }
    }

    stage('Kill old task') {
      steps {
          script {
              sh 'pkill -f "ng serve"'
          }
      }
    }

    stage('Start') {
      steps {
          script {
              // Start a new Angular app
              sh 'ng serve --port 4200 --open'
          }
      }
    }
  }
}
