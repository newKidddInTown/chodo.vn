pipeline {
  agent any
  stages {

    stage ('Clone') {
      steps {
        git 'https://github.com/newKidddInTown/chodo.vn.git'
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
          sh 'docker compose up -d'
        }
      }
    }
  }
}
