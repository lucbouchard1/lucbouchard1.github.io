echo -n "Are you sure you want to deploy? (y/n) "
read ANSWER

if [ "$ANSWER" != "y" ]; then
   echo "exiting..."
   exit 1
fi

echo "Deploying..."

if [ "$(git status -s)" != "" ]; then
   echo "Uncommited changes in current directory! Quitting..."
   exit 1
fi

git checkout dev || exit 1
git branch -D master || exit 1
git checkout -b master || exit 1

rm -fr .cache/

npm install || exit 1
npm run build || exit 1

for f in $(ls)
do
   if [ "$f" != "public" ]; then
      echo $f
      rm -fr $f
   fi
done

cp -r public/* .
touch .nojekyll
rm -fr public

echo -n "Enter a deployment version: "
read VERSION

git add -A
git commit -m "deploy-$VERSION"

