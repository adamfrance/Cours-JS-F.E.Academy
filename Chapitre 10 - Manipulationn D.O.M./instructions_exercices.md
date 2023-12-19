## Exercice pratique 10.1

Dans cet exercice, essayez de parcourir la hiérarchie DOM. Vous pouvez utiliser cet exemple de site Web HTML :

<!doctype html>
<html><head><title>Sample Webpage</title></head>
<body>
    <div class="main">
        <div>
            <ul >
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ul>
        </div>
        <div>blue</div>
        <div>green</div>
        <div>yellow</div>
        <div>Purple</div>
    </div>
</body>
</html>

Suivez les étapes suivantes :

    Créez et ouvrez l'exemple de page Web ci-dessus, ou visitez votre site Web préféré et ouvrez le corps du document dans la console avec console.dir(document).
    Dans la propriété body.children, sélectionnez certains des éléments enfants. Voyez comment ils correspondent au contenu de la page.
    Accédez aux nœuds ou éléments suivants et affichez-les dans la console.

## Exercice pratique 10.2

Essayez d'obtenir des éléments par leur identifiant :

    Créez un élément HTML et attribuez un ID dans l'attribut de l'élément.
    Sélectionnez l'élément de page à l'aide de son ID.
    Affichez l'élément de page sélectionné dans la console

## Exercice pratique 10.3

Utilisez JavaScript pour sélectionner les éléments de la page via leur nom de balise :

    Commencez par créer un simple fichier HTML.
    Créez trois éléments HTML en utilisant la même balise.
    Ajoutez du contenu dans chaque élément afin de pouvoir les distinguer
    Ajoutez un élément de script à votre fichier HTML et, à l'intérieur, sélectionnez les éléments de page par nom de balise et stockez-les dans une variable sous forme de tableau.
    À l'aide de la valeur d'index, sélectionnez l'élément du milieu et affichez-le dans la console.

## Exercice pratique 10.4

Sélectionnez tous les éléments de page correspondants en utilisant le nom de classe de l'élément.

    Créez un simple fichier HTML sur lequel travailler.
    Ajoutez trois éléments HTML en ajoutant la même classe à chacun. Vous pouvez utiliser différentes balises à condition que la même classe d'éléments soit incluse. Ajoutez du contenu dans chaque élément afin de pouvoir les distinguer.
    Ajoutez un élément de script à votre fichier et, dans celui-ci, sélectionnez les éléments de page par nom de classe. Attribuer le résultat HTMLCollectionvaleurs à une variable.
    Vous pouvez utiliser une valeur d'index pour sélectionner l'individu HTMLCollectionéléments, comme vous le feriez pour les éléments d’un tableau. En commençant par un index de 0, sélectionnez l'un des éléments de page avec le nom de classe et affichez l'élément dans la console.


## Exercice pratique 10.5

Utiliser querySelector() pour activer la sélection d'un seul élément :

    Créez un autre fichier HTML simple.
    Créez quatre éléments HTML en ajoutant la même classe à chacun. Il peut s'agir de noms de balises différents tant qu'ils ont la classe dans l'attribut de l'élément.
    Ajoutez du contenu dans chaque élément afin de pouvoir les distinguer.
    Dans un élément de script, utilisez querySelector() pour sélectionner la première occurrence des éléments avec cette classe et la stocker dans une variable. S'il y a plus d'un résultat correspondant dans querySelector(), il renverra le premier.
    Sortez l’élément dans la console.

## Exercice pratique 10.6

Utiliser querySelectorAll() pour sélectionner tous les éléments correspondants dans un fichier HTML :

    Créez un fichier HTML et ajoutez quatre éléments HTML, en ajoutant la même classe à chacun.
    Ajoutez du contenu dans chaque élément afin de pouvoir les distinguer.
    Dans un élément de script, utilisez QuerySelectorAll() pour sélectionner toutes les occurrences correspondantes des éléments de cette classe et les stocker dans une variable.
    Affichez tous les éléments dans la console, d'abord sous forme de tableau, puis parcourez-les en boucle pour les afficher un par un.


## Exercice pratique 10.7

Créez un bouton dans un document HTML de base et ajoutez l'attribut onclick. L'exemple montrera comment vous pouvez référencer des données d'objet avec this:

    Créez une fonction pour gérer un clic dans votre code JavaScript. Vous pouvez nommer la fonction message.
    Ajoutez ceci au paramètre onclick de fonction envoyant les données de l'objet d'élément actuel à l'aide this.
    Au sein du message, utilisation console.dir() pour afficher dans la console les données de l'objet élément qui ont été envoyées à la fonction en utilisant onclick et this.
    Ajoutez un deuxième bouton à la page invoquant également la même fonction au clic.

## Projet 1 - Composant accordéon pliable

Créez un composant accordéon réduit et développé qui ouvrira les éléments de la page, masquant et affichant le contenu lorsque vous cliquez sur l'onglet de titre. En utilisant le code HTML suivant comme modèle, ajoutez le fichier complété scriptélément et créez la fonctionnalité souhaitée avec JavaScript :

<!doctype html>
<html>
<head>
    <title>JS Tester</title>
    <style>
        .active {
            display: block !important;
        }
        .myText {
            display: none;
        }
        .title {
            font-size: 1.5em;
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="title">Title #1</div>
        <div class="myText">Just some text #1</div>
        <div class="title">Title #2</div>
        <div class="myText">Just some text #2</div>
        <div class="title">Title #3</div>
        <div class="myText">Just some text #3</div>
    </div>
    <script>
    </script>
</body>
</html>

Suivez les étapes suivantes :

- En utilisant querySelectorAll(), sélectionnez tous les éléments avec une classe de title.
- En utilisant querySelectorAll(), sélectionnez tous les éléments avec une classe myText. Cela devrait être le même nombre d'éléments que les éléments title .
- Parcourez tous les éléments title et ajoutez des écouteurs d'événements qui, une fois cliqués, sélectionneront les frères et sœurs d'éléments suivants.
- Sélectionnez l'élément sur le clickaction et changer la class list de l'élément en active. Cela permettra à l'utilisateur de cliquer sur l'élément et de masquer et afficher le contenu ci-dessous.
- Ajoutez une fonction qui sera invoquée à chaque clic sur les éléments et qui supprimera le classde active de tous les éléments. Cela masquera tous les éléments avec myText.
