# Description des besoins pour l'architecture du backend ESIDOM

_Note : Les noms sont temporaires._

## Fonctionnement général

A la réception d'une requête du front, les possibilités de traitement sont les suivantes :

- On doit effectuer un traitement spécifique non implémenté par HA-Core.
- On doit effectuer une requête HTTP vers HA-Core, et renvoyer la réponse HTTP reçue au front.
- On doit effectuer une requête WebSocket vers HA-Core, et renvoyer la réponse au front sur un flux Socket.io.

Dans les deux derniers cas, il y a deux possibilités pour la réponse reçue de HA-Core :
- soit elle est adaptée et on la renvoie au front tel quel.
- soit elle est incomplète, et un traitement spécifique doit être effectué avant retransmission.

D'autre part, des évènements peuvent être émis par Ha-Core et envoyés sous forme de WebSockets. Esiback sera chargé de retransmettre ces évènements au front par un flux Socket.io.

Il est également envisageable qu'Esiback génère ses propre évènements et les transmette au front par le même flux Socket.io.

## Global_Manager

Classe s'occupant de :
- dispatcher les requêtes du front vers le Manager spécifique adapté (WebSocket_Manager ou Http_Manager ou Native_Manager).
- récupérer les réponses venant de chacun des Managers, et les retransmettre au front.


A la création, on doit initialiser :
- la WebSocket vers le core de HA
    - inclut : authentification + subscribe aux events pertinents
- la Socket.io pour le front
- l'API Rest HTTP

L'architecture choisie devrait permettre de garder en mémoire l'état global de HA, et le mettre à jour en fonction des websockets reçues de HA-Core.
En fonctionnant ainsi, lorsque le front effectuera une requête, on peut éviter d'avoir à payer le prix d'une requête vers HA-Core, et simplement renvoyer les données (gardées en cache) correspondante. Cela fonctionne uniquement avec les données pour lesquelles HA-Core nous notifiera les changements.

## WebSocket_Manager

Classe s'occupant de la gestion des websockets entre HA-Core et le Global_Manager.

Rôle général : 
- Recevoir du Global_Manager des requêtes au format JSON (1 requête = 1 objet JS).
- Garder en mémoire les (ids de) requêtes en cours (ie : en attente de réponse).
- Envoyer les requêtes à HA-Core sous forme de websocket.
- A la réception d'une websocket de HA-Core : 
    - [traitement optionel].
    - [suppression de la requête du cache si l'id correspond à une requête en cours].
    - Transmission de la réponse de la websocket au Global_Manager.

## Http_Manager

Classe s'occupant de la gestion des requêtes Http vers HA_Core.  

Rôle général :
- Recevoir du Global_Manager des requêtes au format HTTP.
- Transmettre la requête HTTP à HA-Core.
- Attendre la réponse.
- [traitement optionnel].
- Transmettre la réponse HTTP au Global_Manager.

## Native_Manager

Classe s'occupant de la gestion des fonctionnalités non présentes dans HA-Core.

Rôle général : 
- Recevoir du Global_Manager des requêtes.
- Effectuer le traitement spécifique correspondant à la requête.
- Transmettre la réponse au format HTTP au Global_Manager.

