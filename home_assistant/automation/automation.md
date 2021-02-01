# HA Automation .yml

Une "automation" écrite en .yml chez HA possède les clefs suivantes : 

- alias : nom de la routine

- description : description de la routine

- trigger : https://www.home-assistant.io/docs/automation/trigger/

- condition : https://www.home-assistant.io/docs/scripts/conditions/

- action : condition, délai, appareil, déclencher l'évènement, activer la scène, appeler un service, attendre, attendre le déclencheur, répéter, choisir ... (ça reste pas super bien documenté : https://www.home-assistant.io/docs/automation/action/)

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
    type: toggle
    device_id: 7eff4354848387b1af05b2d481217d6c
    entity_id: light.zipato_bulb_2_level
    domain: light
```