## Exercice pratique 5.1

Dans cet exercice, nous allons créer un jeu de devinettes qui prend en compte les entrées et les réponses de l'utilisateur en fonction de la précision de sa supposition.

- Créez une variable à utiliser comme valeur maximale pour le jeu de devinettes.
- Générez un nombre aléatoire pour la solution en utilisant Math.random() et Math.floor(). Vous devrez également ajouter 1 pour que la valeur soit renvoyée sous la forme 1-[quelle que soit la valeur maximale définie]. Vous pouvez enregistrer cette valeur sur la console pour le développement pour voir la valeur lorsque vous créez le jeu, puis lorsque le jeu est terminé, vous pouvez commenter cette sortie de la console.
- Créez une variable qui sera utilisée pour savoir si la réponse est correcte ou non et définissez-la sur une valeur booléenne par défaut de false. Nous pouvons le mettre à jour pour qu'il soit true si l'utilisateur devine qu'il s'agit d'une correspondance.
- Utiliser un while pour parcourir une invite qui demande à l'utilisateur de saisir un nombre entre 1 et 5 et convertir la réponse en nombre afin de correspondre au type de données du nombre aléatoire.
- À l'intérieur du while, vérifiez à l’aide d’une condition pour voir si la valeur de l’invite est égale au numéro de solution. 
- Appliquez une logique telle que si le numéro est correct, vous définissez le statut sur true et sortez de la boucle. 
- Fournissez au joueur des informations indiquant si la supposition était élevée ou faible, et lancez une autre invite jusqu'à ce que l'utilisateur devine correctement. 
- De cette façon, nous utilisons la boucle pour continuer à demander jusqu'à ce que la solution soit correcte, et à ce stade, nous pouvons arrêter l'itération du bloc de code.

## Exercice pratique 5.2

Dans cet exercice, nous allons créer un compteur de base qui augmentera une variable dynamique d'une valeur de pas cohérente, jusqu'à une limite supérieure.

- Mettre le compteur de départ à 0
- Créez une variable, step, pour augmenter votre compteur de
- Ajouter un do while, imprimant le compteur sur la console et l'incrémentant du stepmontant de chaque boucle
- Continuez à boucler jusqu'à ce que le compteur soit égal à 100 ou supérieur à 100

## Exercice pratique 5.3

Dans cet exercice, nous utiliserons une boucle for pour créer un tableau contenant des objets. En commençant par la création d'un tableau vide, le bloc de code dans la boucle créera un objet qui sera inséré dans le tableau.

- Configurez un tableau vierge, myWork.
- Utilisant une boucle for, créez une liste de 10 objets, dont chacun est une leçon numérotée (par exemple Leçon 1, Leçon 2, Leçon 3….) avec une alternance true/ false pour tous les autres éléments afin d'indiquer si la classe aura lieu cette année. Par exemple:

    name: 'Lesson 1', status: true

- Vous pouvez spécifier le statut en utilisant un opérateur ternaire qui vérifie si le modulo de la valeur de leçon donnée est égal à zéro et en définissant une valeur booléenne pour alterner les valeurs à chaque itération.
- Créez une leçon à l'aide d'une variable objet temporaire, contenant le nom ( leçon avec la valeur numérique) et le statut prédéfini (que nous avons configuré à l'étape précédente).
Poussez les objets dans le tableau myWork.
- Affichez le tableau dans la console.

## Projet : 
Table de multiplication mathématique

Dans ce projet, vous allez créer une table de multiplication mathématique à l'aide de boucles. Vous pouvez le faire en utilisant votre propre créativité ou en suivant certaines des étapes suggérées suivantes :

    Configurez un tableau vide pour contenir la table de multiplication finale.
    Définir une variable value  pour spécifier le nombre de valeurs que vous souhaitez multiplier entre elles et afficher les résultats.
    Créer une boucle for extérieure pour parcourir chaque ligne et un tableau temp pour stocker les valeurs de ligne. Chaque ligne sera un tableau de cellules qui seront imbriquées dans le tableau final.
    Ajouter une  boucle for intérieure  pour les valeurs de colonne, qui poussera les valeurs de ligne et de colonne multipliées vers le temptableau.
    Ajoutez les données de ligne temporaires contenant les solutions calculées au tableau principal de la table finale. Le résultat final ajoutera une ligne de valeurs pour les calculs.



