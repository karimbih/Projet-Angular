Rapport de résolution des problèmes rencontrés
Problème 1 : Mauvais comportement de navigation
Contexte Les liens du menu forçaient un rechargement complet de la page, ce qui n’est pas adapté dans une SPA Angular.
Solution apportée J’ai remplacé les balises href par la directive Angular routerLink dans app.component.html pour assurer une navigation fluide :
•
href="/" est devenu [routerLink]="/"
•
href="/books" est devenu [routerLink]="/books"
Notions Angular Utilisation de routerLink pour activer le routing Angular sans rechargement.
Problème 2 : Format incorrect du titre
Contexte Le titre affichait des underscores et des majuscules mal placées.
Solution apportée Création d’un pipe personnalisé (CapitalizePipe) pour formater les titres :
•
Remplacement de _ par des espaces
•
Mise en majuscule de la première lettre
Notions Angular
•
Création d’un pipe avec @Pipe
•
Implémentation de PipeTransform
•
Utilisation de la méthode transform()
Problème 3 : Structure HTML partielle
Même traitement que le problème 1 (routerLink pour structurer la page via les routes).
Problème 4 : Composants non visibles
Contexte Les composants ne s’affichaient pas malgré le routing défini.
Solution apportée
•
Ajout de CommonModule
•
Vérification de RouterOutlet dans les composants standalone
Notions Angular
•
Importance du module CommonModule
•
Bon usage de router-outlet
Problème 5 : Détail d’un livre inaccessible
Contexte Aucune route ne permettait d’afficher un livre individuellement.
Solution apportée Ajout de la route dynamique /books/:id dans app.routes.ts pointant vers BookDetailComponent.
Notions Angular
•
Paramètre dynamique dans l’URL
•
Récupération avec ActivatedRoute
Problème 6-7 : Formulaire incomplet
Contexte Des champs étaient manquants pour ajouter un livre.
Solution apportée Ajout de tous les champs nécessaires dans un FormGroup via FormBuilder dans AddBookComponent.
Notions Angular
•
Utilisation des formulaires réactifs
•
Ajout de Validators.required
Problème 8 : Bouton de retour inopérant
Contexte Le bouton ramenait toujours à la liste au lieu de revenir à la page précédente.
Solution apportée Utilisation de Location.back() dans la méthode goBack() de BookDetailComponent.
Problème 9 : Erreur d’accès à une propriété d’un objet non initialisé
Contexte Le template tentait d'accéder à book.title alors que book n'était pas encore chargé.
Solution apportée Ajout d’un *ngIf="book" autour de l’élément concerné.
Problème 10 : Highlight non fonctionnel
Contexte Le titre du livre ne changeait pas de style même s’il était favori.
Solution apportée Création d’une directive appHighlight avec un @Input() pour conditionner l’application du style.
Problème 11 : Vérification des boutons
Tous les boutons (ajout, retour) étaient fonctionnels et bien configurés.
Problème 12 : Données mal référencées
Contexte Le composant affichait une propriété data inexistante alors que c’était books qui était rempli.
Solution apportée
•
Suppression de data
•
Correction du template pour utiliser books
Problème 13 : Description trop longue
Solution apportée Création d’un pipe truncate pour couper les descriptions trop longues à 100 caractères.
Problème 14 à 19 : Feedback utilisateur
Contexte Pas de retour visuel après des actions (ajout favori, suppression, etc.).
Solution apportée Ajout de messages via alert() après chaque action critique (succès ou échec).
Problème 20 : Texte en majuscules
Solution apportée Utilisation du pipe uppercase directement dans le template Angular.
Bonus - Problèmes 22 et 23 : Modularité du header/footer
Solution apportée Création de deux nouveaux composants HeaderComponent et FooterComponent via la CLI Angular pour améliorer la structure.
Problème 24 : Directive à améliorer
Contexte Le texte était juste en gras, pas très visible.
Solution apportée Amélioration de la directive appHighlight pour changer aussi d’autres styles (ex : couleur).
