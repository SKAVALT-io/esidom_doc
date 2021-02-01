# HA Automation .yml

Une "automation" écrite en .yml chez HA possède les clefs suivantes : 

- alias : nom de la routine

- description : description de la routine

- trigger : https://www.home-assistant.io/docs/automation/trigger/

- condition : https://www.home-assistant.io/docs/scripts/conditions/

- action : on peut appeler un service ou une scène, la liste des services peut se trouver dans HA -> Outil de développement -> Services. [doc ici](https://www.home-assistant.io/docs/automation/action/).

Exemple : 

- On bascule la lampe zipato à 14h00 (pas de condition ici).
```yml
automation test: 
  alias: "test 1"
  description: "test description"
  trigger: 
    platform: time
    at: "14:00:00"
  action:
    service: light.toggle
    entity_id: light.zipato_bulb_2_level
```