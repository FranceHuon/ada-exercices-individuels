# Bonjour, JavaScript! 👋

Pensez à commiter votre solution au problème posé dans cet exercice.

Si c’est votre premier exercice individuel, sur votre compte Github, créez un nouveau repository, appelez-le `ada-exercices-individuels`, dans lequel vous ajouterez un répertoire par exercice. Dans ce répertoire, vous pourrez déposer le fichier de l’énoncé ainsi que les sources de la solution que vous proposez.

→ Langage : JS


Ce premier exercice individuel complétera votre introduction au code. Vous manipulerez des variable et des chaines de caractères.

Nous avons découpé l’exercice en étapes, il faut donc les suivre pour arriver au bout. Le but n’étant pas forcement de tout faire mais d’essayer d’aller le plus loin, chacun·e peut aller à son rythme, ce n’est pas une compétition.

Pour commencer, vous pouvez télécharger le [template](https://github.com/adatechschool/exercices-individuels/raw/master/html_template.zip). 

Ce fichier zip contient : 
- une page HTML, une page web qu’un navigateur pourra afficher (en double cliquant dessus) 
- un fichier Javascript (`.js`), qui contiendra le corps de votre exercice. C’est ici que vous devrez écrire votre code. 

Vous le verrez plus en détail dans les fiches des prochaines semaines, mais le rôle du navigateur est d’afficher les pages HTML et d’exécuter le Javascript qu’elles contiennent.


## Étape 1: L’heure des présentations 🤝

Commencer par télécharger le template.

- Dans le fichier `script.js`, utilisez la fonction `prompt()` pour demander son nom à l’utilisateur·ice
- Creer une variable de type texte dans laquelle vous utiliserez la concaténation pour stocker la chaine de caractère `"👋 Bonjour"` suivi du nom saisi par l’utilisateur·ice.
- Ajouter un element `h2` dans le corps de la page HTML qui entoure la chaine de caractères stockée.

Pour ajouter un élément au contenu de la page HTML, dans cet exercice, nous utiliserons le procédé suivant:

```
document.body.innerHTML += '<h1> Coucou! </h1>’
```

Notez l’usage de l’opérateur `+=` qui implique une addition au contenu existant dans la variable, ici `document.body.innerHTML`, qui correspond au contenu de notre page HTML.


## Étape 2: Faisons connaissance 😇

- À la suite de ce qui a été écrit dans l’étape 1, réutiliser le même procédé pour demander l’année de naissance de l’utilisateur·ice.
- Créer une variable qui contient l’age de l’utilisateur·ice, calculé à partir de son année de naissance et de l'année en cours.
- Sur la page HTML, ajouter un element `h3` qui affiche `"Vous avez "` suivi de l’age calculé précédemment suivi de `"ans"` (exemple: `"Vous avez 32 ans"`).

## Étape 3: Et un peu de ménage 🧹

À ce stade, le fichier JavaScript commence à contenir un petit paquet de lignes de code!

Organiser ce fichier, en découpant le code en fonction (`function`).

- Une première fonction que nous appellerons `askName()` qui contiendra le code de l’étape 1.
- Une seconde, `askBirthYear()` pour le code de l’étape 2.

Ces fonctions, une fois définies, seront appelées en bas de page.

C’est mieux ainsi, vous ne trouvez pas ?


## Étape bonus: Soyons précis, voulez-vous ? 🧐

Pour plus de précisions sur l’age de notre utilisateur·ice, demandez-lui également son mois de naissance et prenez-le en compte dans le calcul.
