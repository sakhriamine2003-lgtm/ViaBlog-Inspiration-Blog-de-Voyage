const prompt = require("prompt-sync")();

// A. Trouver le taxi le plus proche et disponible ;

let taxis = [
  { id: 1, position: 2, available: true, timeRemaining: 0, totalRides: 0 },
  { id: 2, position: 4, available: false, timeRemaining: 0, totalRides: 0 },
  { id: 3, position: 6, available: true, timeRemaining: 0, totalRides: 0 },
];

let requests = [
  { reqId: 1, position: 6, duration: 3, time: 0 },
  { reqId: 2, position: 4, duration: 4, time: 2 },
  { reqId: 3, position: 7, duration: 2, time: 4 },
  { reqId: 4, position: 3, duration: 5, time: 1 },
];

// ====== A. Trouver le taxi le plus proche ======

function proximite(request) {
  let distance;
  let taxi_le_plus_proche = null;
  let distance_minimale = Infinity;

  for (let i = 0; i < taxis.length; i++) {
    let taxi = taxis[i];

    if (taxi.available === true) {
      distance = Math.abs(taxi.position - request.position);

      if (distance < distance_minimale) {
        distance_minimale = distance;
        taxi_le_plus_proche = taxi;
      }
    }
  }

  if (!taxi_le_plus_proche) {
    console.log(
      `Minute ${request.time}: Tous les taxis sont occupés → requête ${request.reqId} en attente.`
    );
    return null;
  } else {
    taxi_le_plus_proche.available = false;
    taxi_le_plus_proche.timeRemaining = request.duration;
    taxi_le_plus_proche.totalRides += 1;

    console.log(
      `Minute ${request.time}: Requête ${request.reqId} → Taxi ${taxi_le_plus_proche.id} assigné (distance: ${distance_minimale})`
    );

    return taxi_le_plus_proche;
  }
}

// ====== B. Gérer la durée du trajet ======

function updateTaxis() {
  for (const taxi of taxis) {
    if (!taxi.available) {
      taxi.timeRemaining -= 1;
      if (taxi.timeRemaining <= 0) {
        taxi.available = true;
        taxi.timeRemaining = 0;
        console.log(`Taxi ${taxi.id} afini son trajet et peut prendre un nouveau client`);
        
      }
    }
  }
}

// Simulation minute par minute

function simulation() {
  const totalTime = 10;
  for (let minute = 0; minute <= totalTime; minute++) {s
    console.log(`\n--- Minute ${minute} ---`);
    // Vérifie les requêtes arrivant à cette minute
    requests.forEach((req) => {
      if (req.time === minute) {
        proximite(req);
      }
    });

    updateTaxis();
  }

  console.log("\n--- Rapport final ---");
  taxis.forEach((t) => {
    console.log(
      `Taxi ${t.id}: ${t.totalRides} trajets, position ${t.position}, disponible: ${t.available}`
    );
  });
}

simulation();
