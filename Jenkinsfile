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
          script {
            def dockerImage = docker.image('duclv1132/chodo:v1')
            if (dockerImage != null) {
                dockerImage.remove() // Remove the old Docker image
            }
          }
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
