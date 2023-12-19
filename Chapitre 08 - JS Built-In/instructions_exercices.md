## Exercice pratique 8.1

Sortez le decodeURIComponent()pour la chaîne How's%20it%20going%3F à la console. Encodez également la chaîne How's it going? à sortir dans la console. Créez une URL Web et codez l'URI :

    Ajouter les chaînes en tant que variables dans le code JavaScript
    En utilisant encodeURIComponent()et decodeURIComponent()afficher les résultats dans la console
    Créer un URI Web avec des paramètres de requête http://www.basescripts.com?=Hello World";
    Encoder et afficher l'URI Web dans la console

## Exercice pratique 8.2

Supprimez les doublons du tableau en utilisant filter() et indexOf(). Le tableau de départ est :

["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"]

Utiliser le tableau filter()méthode, cela créera un nouveau tableau en utilisant les éléments qui réussissent la condition de test implémentée par la fonction. Le résultat final sera :

 [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]

Suivez les étapes suivantes :

- Créez un tableau de noms de personnes. Assurez-vous d'inclure les doublons. L'exercice supprimera les noms en double.
- En utilisant le filter(), attribuez les résultats de chaque élément du tableau comme arguments dans une fonction anonyme. À l’aide des arguments valeur, index et tableau, renvoyez le résultat filtré. Vous pouvez définir la valeur de retour sur truetemporairement car cela construira le nouveau tableau avec tous les résultats du tableau d'origine.
- Ajouter un console.log dans la fonction qui affichera la valeur d'index de l'élément actuel dans le tableau. Ajoutez également la valeur afin que vous puissiez voir les résultats de la valeur d'élément qui a le numéro d'index actuel et le premier résultat correspondant à la valeur d'index du tableau.
- En utilisant indexOf() la valeur actuelle renvoie la valeur d'index de l'élément et applique la condition pour vérifier si elle correspond à la valeur d'index d'origine. Cette condition ne sera vraie que sur le premier résultat, donc tous les doublons suivants seront faux et ne seront pas ajoutés au nouveau tableau. falsene renverra pas la valeur dans le nouveau tableau. Les doublons seront tous faux puisque le indexof() n'obtient que la première correspondance du tableau.
- Affichez le nouveau tableau de valeurs unique sur la console.

## Exercice pratique 8.3

Utiliser le map(), mettre à jour le contenu d’un tableau. Suivez les étapes suivantes :

- Créez un tableau de nombres.
- Utiliser le map et une fonction anonyme, renvoie un tableau mis à jour, en multipliant tous les nombres du tableau par 2. Affichez le résultat dans la console.
- Comme méthode alternative, utilisez le format de fonction flèchée pour multiplier chaque élément du tableau par 2 avec le map() en une seule ligne de code.
- Affichez le résultat dans la console.

## Exercice pratique 8.4

À l’aide de la manipulation de chaînes, créez une fonction qui renverra une chaîne avec la première lettre de tous les mots en majuscule et le reste des lettres en minuscules. Tu devrais transformer la phrase "ceCi deVraiT êtrE cApiTalisé pOur chaQue mot" en "Ceci Devrait Etre Capitalisé Pour Chaque Mot":

- Créez une chaîne avec plusieurs mots contenant des lettres avec des casses différentes, un mélange de mots majuscules et minuscules.
- Créez une fonction qui obtient une chaîne comme argument, qui sera la valeur que nous allons manipuler.
- Dans la fonction, transformez d’abord tout en lettres minuscules.
- Créez un tableau vide pouvant contenir les valeurs des mots lorsque nous les mettons en majuscule.
- Convertissez la phrase en mots dans un tableau en utilisant le split()méthode.
- Parcourez chacun des mots qui se trouvent désormais dans le nouveau tableau afin de pouvoir les sélectionner indépendamment. Vous pouvez utiliser forEach()pour ça.
- En utilisant slice() isolez la première lettre de chaque mot, puis transformez-la en majuscule. En utilisant à nouveau slice(), obtenez la valeur restante du mot sans inclure la première lettre. Ensuite, concaténez les deux pour former le mot qui est maintenant en majuscule.
- Ajoutez le nouveau mot en majuscule dans le tableau vide que vous avez créé. À la fin de la boucle, vous devriez avoir un tableau avec tous les mots comme éléments séparés dans le nouveau tableau.
- Prenez le tableau de mots mis à jour et utilisez le join(), transformez-les en une chaîne avec des espaces entre chaque mot.
- Renvoie la valeur de la chaîne nouvellement mise à jour avec des mots en majuscules qui peuvent ensuite être affichés dans la console.

## Exercice pratique 8.5

En utilisant la méthode replace(), terminez cet exercice de remplacement de voyelles en remplaçant les voyelles d'une chaîne par des nombres. Vous pouvez commencer avec cette chaîne :

I love JavaScript

Et transformez-le en quelque chose comme ceci :

2 l3v1 j0v0scr2pt

Suivez les étapes suivantes :

- Créez la chaîne spécifiée précédemment et convertissez-la en minuscules.
- Créez un tableau contenant les voyelles : a, e, i, o, u.
- Parcourez chaque lettre que vous avez dans le tableau et affichez la lettre actuelle dans la console afin que vous puissiez voir quelle lettre sera convertie.
- Dans la boucle, en utilisant replaceAll() mettez à jour chaque sous-chaîne de voyelle avec la valeur d'index de la lettre du tableau de voyelles.

- En utilisant replace()ne remplacera que la première occurrence ; si tu utilises replaceAll()cela mettra à jour tous les résultats correspondants.
- Une fois la boucle terminée, affichez le résultat de la nouvelle chaîne dans la console.


## Exercice pratique 8.7

Affichez la date avec le nom complet du mois dans la console. Lors de la conversion vers ou depuis des tableaux, n'oubliez pas qu'ils sont de base zéro :

- Configurez un objet date, qui peut être n’importe quelle date future ou passée. Enregistrez la date dans la console pour voir comment elle est généralement affichée en tant qu'objet de date.
- Créez un tableau avec tous les mois nommés de l’année. Conservez-les dans un ordre séquentiel afin qu'ils correspondent à la date et au mois de sortie.
- Obtenez le jour à partir de la valeur de l'objet date, en utilisant getDate().
- Obtenez l'année à partir de la valeur de l'objet date, en utilisant getFullYear().
- Obtenez le mois de la valeur de l'objet date, en utilisant getMonth().
- Configurez une variable pour contenir la date de l'objet date et affichez le mois en utilisant la valeur numérique comme index pour le nom du mois du tableau. Étant donné que les tableaux sont de base zéro et que le mois renvoie une valeur comprise entre 1 et 12, le résultat doit être soustrait de un.
- Affichez le résultat dans la console.

## Projet 1 - Brouilleur de mots

Créez une fonction qui renvoie la valeur d'un mot et brouille l'ordre des lettres avec Math.random():

- Créez une chaîne qui contiendra une valeur de mot de votre choix.
- Créez une fonction qui peut prendre en compte un paramètre de la valeur du mot chaîne.
- Tout comme un tableau, les chaînes ont également une longueur par défaut. Vous pouvez utiliser cette longueur pour définir la valeur maximale de la boucle. Vous devrez créer une variable distincte pour conserver cette valeur car la longueur de la chaîne diminuera à mesure que la boucle se poursuit.
- Créez une variable de chaîne temporaire vide que vous pouvez utiliser pour contenir la nouvelle valeur de mot brouillé.
- Créer une boucle for qui itérera le nombre de lettres dans le paramètre de chaîne en commençant à 0 et en itérant jusqu'à ce que la valeur de longueur d'origine de la chaîne soit atteinte.
- Créez une variable qui sélectionnera aléatoirement une lettre en utilisant sa valeur d'index, avec Math.floor()et Math.random() multiplié par la longueur actuelle de la chaîne.
- Ajoutez la nouvelle lettre à la nouvelle chaîne et supprimez-la de la chaîne d'origine.
- En utilisant console.log() afficher la chaîne nouvellement construite à partir des lettres aléatoires et afficher sur la console à la fois la chaîne d'origine et la nouvelle pendant que la boucle continue.
- Mettez à jour la chaîne d'origine en sélectionnant la sous-chaîne à partir de la valeur d'index et en l'ajoutant à la valeur de chaîne restante à partir de l'index plus un. Affichez la nouvelle valeur de chaîne d'origine avec les caractères supprimés.
- Au fur et à mesure que vous parcourez le contenu, vous verrez un compte à rebours des lettres restantes, la nouvelle version brouillée du mot au fur et à mesure de sa construction et les lettres décroissantes du mot original.
- Renvoyez le résultat final et invoquez la fonction avec le mot de chaîne d'origine comme argument.
- Sortez-le sur la console.
