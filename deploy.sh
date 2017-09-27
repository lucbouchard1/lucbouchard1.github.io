echo -n "Are you sure you want to deply? (y/n) "
read ANSWER

if [ "$ANSWER" != "y" ]; then
   echo "exiting..."
   exit
fi

echo "Deploying..."

git checkout dev
git branch -D master
git checkout -b master
npm run build

for f in $(ls)
do
   if ["$f" != "public"]; then
      echo $f
      rm -fr $f
   fi
done

cp -r public .

echo "Enter a deployment version: "
read VERSION

git add -A
git commit -m "deploy-$VERSION"


