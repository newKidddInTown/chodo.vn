pipeline {
  agent any
  stages {

    stage('Clean docker containers'){
      steps{
          script{
              def doc_containers = sh(returnStdout: true, script: 'docker container ps -aq').replaceAll("\n", " ")
              if (doc_containers) {
                  sh "docker stop ${doc_containers} && docker rm ${doc_containers}"
              }
          }
      }
    }

    stage ('Remove old images') {
       steps {
         sh 'docker image rm duclv1132/chodo:v1'
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
