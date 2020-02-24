insult() {
    currentPath=`pwd`
    cd ~/.insulter/src
    node . $1 $2
    cd $currentPath
}