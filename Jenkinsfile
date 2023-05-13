pipeline {
  agent any
  stages {

    stage ('Remove old images') {
       steps {
         sh 'docker image prune'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'docker compose up -d'
        }
      }
    }
  }
}
