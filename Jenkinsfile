pipeline {
  agent any
  tools {
    nodejs "18.16.0"
  }
  stages {

    stage ('clean') {
      steps {
        script {
          sh "rm -rf dist"
        }
      }
    }

    stage ('install package') {
      steps {
        script {
          sh "npm install"
          sh "npm run build --prod"
        }
      }
    }

    stage ('clean docker containers'){
      steps{
          script{
              def doc_containers = sh(returnStdout: true, script: 'docker container ps -aq').replaceAll("\n", " ")
              if (doc_containers) {
                  sh "docker stop ${doc_containers} && docker rm ${doc_containers}"
              }
          }
      }
    }

    stage ('remove old images') {
       steps {
         sh 'docker image rm duclv1132/chodo:v1'
      }
    }

    stage('deploy') {
      steps {
        script {
          sh 'docker compose up -d'
        }
      }
    }
  }
}
