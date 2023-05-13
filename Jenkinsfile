pipeline {
  agent any
  tools {
    nodejs '18.16.0'
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
