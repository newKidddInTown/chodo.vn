pipeline {
  agent any
  stages {

    stage ('Stop current container') {
      steps {
        sh 'docker stop chodo && docker rm chodo'
      }
    }

    stage ('Remove old images') {
       steps {
         sh 'docker image prune'
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'docker compose up'
        }
      }
    }
  }
}
