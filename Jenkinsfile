node {

    stage('Checkout') {
        cleanWs()
        withCredentials([string(credentialsId: 'OAUTH_TOKEN', variable: 'token')]) {
           withEnv(['HTTPS_PROXY=http://webproxy-internett.nav.no:8088']) {
            sh 'git clone https://${token}:x-oauth-basic@github.com/navikt/engangsstonad-akseptansetest.git .'
           }
         }
    }

    stage('Setup') {
       sh 'npm i'
       withCredentials([file(credentialsId: 'engangsstonad_e2e_config', variable: 'TESTCONF')]) {
          sh 'cat $TESTCONF > config.js'
       }
    }

    stage('Tests') {
       try {
          sh 'npm test'
       } finally {
          sh 'rm config.js'
       }
    }

}
