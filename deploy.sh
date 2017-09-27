echo -n "Are you sure you want to deply? (y/n) "
read ANSWER

if [ "$ANSWER" != "y" ]; then
   echo "exiting..."
   exit 1
fi

echo "Deploying..."

git checkout dev || exit 1
git branch -D master || exit 1
git checkout -b master || exit 1
npm run build

for f in $(ls)
do
   if ["$f" != "public"]; then
      echo $f
      rm -fr $f
   fi
done

cp -r public/* .

echo -n "Enter a deployment version: "
read VERSION

git add -A
git commit -m "deploy-$VERSION"


