## Exercice pratique 6.1

Voyez si vous pouvez écrire une fonction pour vous-même. Nous voulons écrire une fonction qui ajoute deux nombres.

    Créez une fonction qui prend deux paramètres, additionne les paramètres et renvoie le résultat.
    Configurez deux variables différentes avec deux valeurs différentes.
    Utilisez votre fonction sur les deux variables et affichez le résultat en utilisant console.log.
    Créez un deuxième appel à la fonction en utilisant deux nombres supplémentaires comme arguments envoyés à la fonction.

## Exercice pratique 6.2

Nous allons créer un programme qui décrira aléatoirement un nom saisi.

    Créez un tableau de mots descriptifs.
    Créez une fonction qui contient une invite demandant à l'utilisateur un nom.
    Sélectionnez une valeur aléatoire dans le tableau en utilisant Math.random.
    Affichez dans la console la valeur de l'invite et la valeur du tableau sélectionnée au hasard.
    Invoquez la fonction.

## Exercice pratique 6.3

Créez une calculatrice de base qui prend deux nombres et une valeur de chaîne indiquant une opération. Si l’opération est égale à ajouter, les deux nombres doivent être additionnés. Si l’opération équivaut à soustraire, les deux nombres doivent être soustraits l’un de l’autre. Si aucune option n'est spécifiée, la valeur de l'option doit être add.

Le résultat de cette fonction doit être enregistré. Testez votre fonction en l'appelant avec différents opérateurs et aucun opérateur spécifié.

    Configurez deux variables contenant des valeurs numériques.
    Configurez une variable pour contenir un opérateur, + ou -.
    Créez une fonction qui récupère les deux valeurs et la valeur de la chaîne d'opérateur dans ses paramètres. Utilisez ces valeurs avec une condition pour vérifier si l'opérateur est + ou -, et ajoutez ou soustrayez les valeurs en conséquence (rappelez-vous que si aucun opérateur valide n'est présenté, la fonction doit par défaut être addition).
    Dans console.log(), appelez la fonction en utilisant vos variables et affichez la réponse sur la console.
    Mettez à jour la valeur de l'opérateur pour qu'elle soit l'autre type d'opérateur (plus ou moins) et appelez à nouveau la fonction avec les nouveaux arguments mis à jour.

## Exercice pratique 6.4

Modifiez la calculatrice que vous avez créée lors de l'exercice pratique 6.2 pour qu'elle renvoie les valeurs ajoutées au lieu de les imprimer. Ensuite, appelez la fonction 10 fois ou plus dans une boucle et stockez les résultats dans un tableau. Une fois la boucle terminée, affichez le tableau final dans la console.

    Configurez un tableau vide pour stocker les valeurs qui seront calculées dans la boucle.
    Créez une boucle qui s'exécute 10 fois, en incrémentant de 1 à chaque fois, créant deux valeurs à chaque itération. Pour la première valeur, multipliez la valeur du compteur de boucles par 5. Pour la deuxième valeur, multipliez la valeur du compteur de boucles par elle-même.
    Créez une fonction qui renvoie la valeur des deux paramètres passés dans la fonction lors de son appel. Additionnez les valeurs ensemble et renvoyez le résultat.
    Dans la boucle, appelez la fonction de calcul, en transmettant les deux valeurs comme arguments dans la fonction et en stockant le résultat renvoyé dans une variable de réponse.
    Toujours dans la boucle, insérez les valeurs de résultat dans le tableau au fur et à mesure qu'il parcourt la boucle.
    Une fois la boucle terminée, affichez la valeur du tableau dans la console.
    Vous devriez voir les valeurs [0, 6, 14, 24, 36, 50, 66, 84, 104, 126]pour le tableau dans la console.

## Exercice pratique 6.5
https://developer.mozilla.org/en-US/docs/Glossary/IIFE

Utilisez IIFE pour créer quelques fonctions immédiatement invoquées et observez comment la portée est affectée.

    Créez une valeur variable avec letet attribuez-lui une valeur de chaîne de 1000.
    Créez une fonction IIFE et, dans la portée de cette fonction, attribuez une nouvelle valeur à une variable du même nom. Dans la fonction, imprimez la valeur locale sur la console.
    Créez une expression IIFE, en l'attribuant à un nouveau resultvariable et attribuez une nouvelle valeur à une variable du même nom dans cette portée. Renvoyez cette valeur locale au resultvariable et invoquez la fonction. Imprimez le resultvariable, ainsi que le nom de la variable que vous avez utilisée : quelle valeur contient-elle maintenant ?
    Enfin, créez une fonction anonyme comportant un paramètre. Ajoutez une logique qui attribuera une valeur transmise au même nom de variable que les autres étapes et l'imprimera dans le cadre d'une phrase de chaîne. Appelez la fonction et transmettez la valeur souhaitée entre parenthèses arrondies.


## Exercice pratique 6.8

    attribuez une fonction à une variable. Créez une expression de fonction avec un paramètre qui renvoie un argument fourni à la console.
    Passez un argument dans la fonction.
    Créez la même fonction qu'une déclaration de fonction normale.

## Projet - Définir l'ordre du délai d'attente

Utilisez le format de flèche pour créer des fonctions qui génèrent les valeurs one et two à la console. Créez une troisième fonction qui génère la valeur three à la console, puis appelle les deux premières fonctions.

Créez une quatrième fonction qui génère le mot four à la console et utilisez également setTimeout() pour appeler immédiatement la première fonction, puis la troisième fonction.

À quoi ressemble votre sortie dans la console ? Essayez de faire afficher la console :

Four
Three
One
Two
One


