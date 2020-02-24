source ./src/insult.sh
mkdir ~/.insulter
cp -r ./src ~/.insulter
echo "source ~/.insulter/src/insult.sh" >> ~/.bash_profile
echo "source ~/.insulter/src/insult.sh" >> ~/.zshrc
rm init.sh