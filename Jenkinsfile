node {
  stage('LS') {
   sh 'ls'
  }
  stage('Hello') {
    sh 'echo "Hello World"'
  }
  stage('SCM') {
    checkout scm
  }
  stage('Build') {
    sh 'echo "mvn -B -DskipTests clean package"'
  }
}
