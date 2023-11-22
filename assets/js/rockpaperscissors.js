const weapons = [
  {
    name: "rock",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>rock</title><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" style="" transform="translate(0,0)"><path d="M291.28 113.14c-21.105-.197-46.504 4.78-76.186 15.538l-61.31 97.62a9 9 0 0 1-7.57 4.214l-105.65.613.278 118.38 94.486.743a9 9 0 0 1 8.53 6.354c7.957 25.855 26.634 40.548 49.097 49.65 18.63 7.55 39.57 10.712 57.074 11.95-.924-9.667-.874-20.846 1.69-31.51 1.845-7.666 5.07-15.214 10.843-21.23 4.665-4.864 11.064-8.425 18.566-9.9-2.417-8.75-1.9-17.564.358-25.414 3.358-11.673 9.468-22.114 14.11-31.853a9 9 0 0 1 .002-.025c.904-8.89.39-20.137 2.015-30.924.813-5.394 2.175-10.806 5.143-15.803 1.907-3.21 4.615-6.177 7.955-8.473l-11.76-29.533c-7.754 29.296-23.77 49.333-40.265 62.213-11.166 8.717-22.448 14.333-31.495 17.992-9.046 3.66-16.89 5.758-17.437 5.955l-6.104-16.933c3.808-1.373 8.865-2.503 16.79-5.71 7.927-3.205 17.69-8.092 27.167-15.49 18.955-14.8 37.084-39.063 38.16-83.08a9 9 0 0 1 17.36-3.11l26.15 65.67c13.382 6.284 22.786 6.51 31.265 3.968 7.728-2.317 15.188-7.56 23.012-13.512-3.2-26.703-10.97-53.765-21.06-81.12-12.893-20.23-30.257-31.92-54.5-35.87-5.236-.853-10.81-1.314-16.718-1.37zm128.425 34.286l-37.166 5.428c8.478 24.046 15.285 48.305 18.58 72.832 25.347 4.217 36.318-.862 54.722-5.698 5.58-20.544 7.754-38.29 3.863-49.715-2.1-6.165-5.503-10.796-11.75-14.734-6.097-3.844-15.258-6.83-28.25-8.114zm33.604 91.8c-15.195 4.203-30.293 8.315-55.456 4.157-9.19 7.16-19.212 14.996-32.14 18.87-12.515 3.753-27.416 3.04-44.187-4.792-1.482.74-2.348 1.687-3.293 3.276-1.194 2.01-2.206 5.216-2.82 9.29-.93 6.17-1.052 14.123-1.467 22.267 42.27 11.538 84.406 18.628 126.424 19.78 10.864-8.28 18.62-17.718 21.59-28.792 3.073-11.467 1.617-25.51-8.65-44.055zm-143.34 70.797c-4.47 9.197-9.032 17.62-11.183 25.1-2.734 9.505-2.687 16.425 5.14 25.7 30.633 19.38 65.708 25.593 102.438 30.464 12.98-8.606 24.286-17.244 29.422-26.133 5.3-9.17 6.31-18.654-3.71-35.334-40.81-1.786-81.518-8.768-122.106-19.797zm-19.943 62.38a9 9 0 0 1-2.386.44c-5.964.33-9.28 2.154-12.087 5.08-2.806 2.924-4.992 7.41-6.332 12.98-2.308 9.597-1.81 21.784-.493 31.19 29.334 14.184 59.095 25.29 93.064 26.41 19.342-4.057 26.193-10.234 30.187-17.71 3.1-5.802 4.263-13.514 5.814-22.45-35.73-4.915-72.027-11.895-104.85-33.11a9 9 0 0 1-1.852-1.592c-.364-.41-.716-.823-1.06-1.238z" fill="#fff" fill-opacity="1"/></g></svg>',
    winsAgainst: "scissors",
    losesAgainst: "paper",
  },
  {
    name: "paper",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>paper</title><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" style="" transform="translate(0,0)"><path d="M281.293 94.283a9 9 0 0 1-.23.203c-.027.023-.048.046-.073.07.113-.103.143-.126.303-.273zm.754.62c-.922-.026-1.59.26-1.79.333-18.276 16.014-26.02 33.42-43.35 51.993-17.25 18.485-43.688 36.204-96.677 51.225l-31.087 42.13a9 9 0 0 1-7.163 3.657l-50.75.45-14.69-8.344-2.622 119.744 14.603-8.426h57.28a9 9 0 0 1 6.934 3.264c13.526 16.35 20.025 32.04 37.946 39.838l200.556 61.878c12.478-.538 22.443-2.015 28.625-5.568 5.266-3.025 8.892-7.468 10.952-16.584-5.457-2.305-23.53-9.945-47.185-19.853-13.495-5.652-27.03-11.294-37.236-15.494-5.103-2.1-9.382-3.842-12.37-5.027-1.492-.593-2.672-1.05-3.397-1.317-.208-.077-.253-.09-.367-.13-.157.023-.3.105-1.897-.677-.994-.486-4.692-10.586-4.692-10.588 0 0 5.642-6.027 6.47-6.234 2.54-.635 2.98-.25 3.483-.18.2.028.253.05.388.074.13.016.294.036.637.073.89.095 2.327.236 4.183.41 3.713.345 9.13.827 15.67 1.397 13.082 1.14 30.68 2.633 48.37 4.112 17.69 1.477 35.475 2.942 48.945 4.03 6.734.544 12.392.992 16.406 1.3 2.006.155 3.606.275 4.702.352.445.03.74.05 1 .065 7.954-.59 12.096-2.93 14.38-5.373 2.315-2.48 3.274-5.563 3.075-9.477-.392-7.7-6.855-16.7-13.162-18.697l-125.047-16.39a9 9 0 0 1 .357-17.886s34.4-3.114 69.246-6.35c17.425-1.62 34.963-3.27 48.35-4.575 6.695-.654 12.355-1.22 16.42-1.652 2.03-.215 3.67-.397 4.798-.533.516-.062 1.142-.195 1.516-.27 10.906-3.095 16.196-7.17 18.164-10.054 2.01-2.944 1.993-5.088.517-8.644-2.946-7.1-15.285-15.783-23.27-16.322l-140.36-3.662a9 9 0 0 1-1.555-17.817s30.514-6.195 61.904-12.542c15.695-3.174 31.608-6.386 44.04-8.88 12.434-2.496 20.85-4.184 23.35-4.617 9.49-1.643 13.86-5.275 16.143-9.164 2.282-3.888 2.655-8.88.996-14.175-2.902-9.267-11.46-17.814-23.172-18.067-1.672-.036-3.41.098-5.204.422a9 9 0 0 1-.19.03l-148.954 23.665c-7.51 10.38-14.5 15.897-23.953 22.977-2.022 57.078-12.448 85.543-27.33 100.578-15.283 15.436-34.4 14.424-40.335 15.908l-4.368-17.46c12.134-3.035 21.968-1.066 31.91-11.11 9.943-10.044 20.786-34.636 22.338-92.803a9 9 0 0 1 3.606-6.965c12.425-9.295 17.212-12.277 25.073-23.886l35.527-78.43c-1.064-7.994-5.013-11.687-9.64-13.893-2.5-1.192-5.197-1.74-7.043-1.79z" fill="#fff" fill-opacity="1"/></g></svg>',
    winsAgainst: "rock",
    losesAgainst: "scissors",
  },
  {
    name: "scissors",
    svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>scissors</title><path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"/><g class="" style="" transform="translate(0,0)"><path d="M204.902 160.246c-5.972.13-11.88 1.138-17.752 2.832-27.015 7.795-53.963 32.7-75.966 60.47a9 9 0 0 1-6.8 3.407l-69.253 1.97-.253-8.943-.018.002-.85 114.86 74.412.095a9 9 0 0 1 8.97 8.402c-.075-1.108 1.74 3.838 6.174 8.623 4.435 4.785 10.74 10.224 17.266 14.94 5.005 3.62 10.184 6.83 14.64 9.115.036-1.62.186-3.224.434-4.776 1.223-7.632 4.523-15.054 8.897-21.765 4.373-6.713 9.798-12.694 16.252-16.837 4.025-2.585 8.888-4.538 13.933-4.756 7.334-15.483 18.572-34.855 42.817-41.547 1.444-.4 2.48-.502 3.33-.48.848.02 1.51.166 2.203.265.41.06.805.144 1.205.22-12.94-12.258-21.842-26.238-28.496-40.837-13.878 27.166-40.78 43.774-63.05 55.62l-8.45-15.894c27.485-14.618 56.812-33.796 61.986-68.01a9 9 0 0 1 17.488-1.337c7.503 24.018 17.674 45.35 38.63 62.396 8.675 4.772 23.866 1.712 29.88-15.262-6.092-22.897-9.235-39.687-19.975-61.64-24.177-30.83-46.322-41.594-67.653-41.134zm223.19 19.807c-4.44.05-9.442.51-14.994 1.5L294.773 206.97c5.792 14.422 8.966 27.285 12.49 41.184 6.443-1.353 28.548-5.998 54.508-11.513 15.013-3.19 30.158-6.427 41.8-8.958 5.82-1.266 10.77-2.355 14.364-3.168 1.796-.407 3.258-.746 4.287-.994.765-.185 1.58-.44 1.548-.416 12.818-4.623 21.502-10.793 26.402-16.57 4.948-5.83 5.98-10.82 5.242-14.368-.738-3.548-3.162-6.923-9.892-9.523-4.2-1.623-10.03-2.674-17.428-2.59zm-117.8 86.967c-5.612 18.07-19.827 28.805-34.5 30.886 2.103.942 4.218 1.908 6.32 2.895 8.66 4.067 17.03 8.38 23.474 12.36 1.583.978 3.04 1.92 4.393 2.877 47.003 6.104 102.48 8.05 137.41 5.172 7.462-.616 11.91-3.012 14.387-5.564 2.477-2.55 3.398-5.367 3.05-8.94-.693-7.148-8.034-17.736-26.063-22.567-19.776-5.3-49.118-9.882-75.577-12.93-21.77-2.506-42-3.942-52.894-4.19zm-68.81 37.082c-15.446 4.734-22.93 16.487-29.154 29.4l57.852 29.73c2.502 1.082 4 .894 6.99-.753 3.02-1.666 6.802-5.25 10.228-9.757 5.547-7.297 9.667-16.036 12.07-21.897-1.042-.763-1.74-1.362-3.34-2.35-5.423-3.35-13.42-7.51-21.667-11.382-8.246-3.873-16.812-7.504-23.49-9.983-3.34-1.238-6.233-2.19-8.185-2.715-.634-.17-.927-.217-1.303-.293zm-45.564 41.722c-.318-.025-.7-.002-1.168.102-.95.21-2.23.748-3.97 1.865-3.48 2.234-7.666 6.558-10.897 11.517-3.232 4.958-5.53 10.575-6.203 14.785-.675 4.21.093 6.007.888 6.77.166.158 4.185 2.892 9.323 5.35 5.138 2.456 11.7 5.17 18.594 7.65 13.19 4.752 28 8.44 35.434 8.833 10.002-2.946 14.492-6.77 16.865-10.988 1.98-3.522 2.727-8.188 2.492-13.984l-60.584-31.71c-.202-.09-.454-.163-.772-.19z" fill="#fff" fill-opacity="1"/></g></svg>',
    winsAgainst: "paper",
    losesAgainst: "rock",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const isOpen = JSON.parse(sessionStorage.getItem("isOpen") ?? false);
  const identity = JSON.parse(sessionStorage.getItem("identity"));
  const main = document.querySelector("main");

  if (!identity) {
    main.innerHTML = "Please login to view the Rock Paper Scissors game";
    return;
  }
  if (!isOpen) {
    main.innerHTML =
      "The casino is closed on the weekends, please come back on Monday";
    return;
  } else {
    const gameArea = document.createElement("div");
    gameArea.className = "gameArea";
    gameArea.innerHTML = `
      <div class="selectionArea">
        <div class="selection">
          <div class="name">${identity.username}</div>
          <div class="selectedWeapon" id="playerWeapon">
            ${placeholder("?")}
          </div>
        </div>
        <div class="vs">vs</div>
        <div class="selection">
          <div class="name">computer</div>
          <div class="selectedWeapon" id="computerWeapon">
            ${placeholder("?")}
          </div>
        </div>
      </div>
      <div class="weaponsContainer">
        <div class="weapons" id="weapons"></div>
      </div>
    `;
    main.appendChild(gameArea);

    const weaponsArea = document.getElementById("weapons");
    weapons.forEach((weapon) => {
      const weaponElement = document.createElement("div");
      weaponElement.className = "weapon";
      weaponElement.innerHTML = `
        <div class="weaponName">${weapon.name}</div>
        <div class="weaponSvg">${weapon.svg}</div>
      `;
      weaponElement.dataset.weapon = weapon.name;
      weaponsArea.appendChild(weaponElement);
      weaponElement.addEventListener("click", playerWeaponSelectionEvent);
    });
  }
});

const placeholder = (text) => {
  return `<div class="placeholder">${text}</div>`;
};

const playerWeaponSelectionEvent = (event) => {
  // since the event has to be removed later the weapon is retrieved from the dataset instead of passing a parameter
  const weapon = getWeaponByName(event.currentTarget.dataset.weapon);
  const playerWeapon = document.getElementById("playerWeapon");
  playerWeapon.innerHTML = weapon.svg;
  playerWeapon.dataset.weapon = weapon.name;
  const weaponsArea = document.getElementById("weapons");

  // removes the eventlistener on all weapons
  for (let i = 0; i < weaponsArea.children.length; i++) {
    weaponsArea.children[i].classList.add("disabled");
    weaponsArea.children[i].removeEventListener(
      "click",
      playerWeaponSelectionEvent
    );
  }

  if (document.getElementById("result")) {
    document.getElementById("result").remove();
  }

  computerWeaponSelection();
};

const computerWeaponSelection = () => {
  // selects a random weapon from the weapons array
  // could be improved by introducing weighted probabilities depending on the last games result and implementing the "winning" strategy
  // https://arstechnica.com/science/2014/05/win-at-rock-paper-scissors-by-knowing-thy-opponent/
  const weapon = weapons[Math.floor(Math.random() * weapons.length)];
  const computerWeapon = document.getElementById("computerWeapon");
  let countdown = 3;
  computerWeapon.innerHTML = placeholder(countdown);
  const interval = setInterval(() => {
    countdown--;
    computerWeapon.innerHTML = placeholder(countdown);
    if (countdown <= 0) {
      clearInterval(interval);
      computerWeapon.innerHTML = weapon.svg;
      computerWeapon.dataset.weapon = weapon.name;
      checkWinner();
    }
  }, 1000);
};

const checkWinner = () => {
  const result = document.createElement("div");
  const gameArea = document.querySelector(".gameArea");
  result.className = "result";
  result.id = "result";
  gameArea.appendChild(result);

  const playerWeapon = getWeaponByName(
    document.getElementById("playerWeapon").dataset.weapon
  );
  const computerWeapon =
    document.getElementById("computerWeapon").dataset.weapon;
  if (playerWeapon.winsAgainst === computerWeapon) {
    result.innerHTML = "You win!";
  } else if (playerWeapon.losesAgainst === computerWeapon) {
    result.innerHTML = "Computer wins!";
  } else {
    result.innerHTML = "It's a draw!";
  }

  // resets ability to select weapon
  const weaponsArea = document.getElementById("weapons");
  for (let i = 0; i < weaponsArea.children.length; i++) {
    weaponsArea.children[i].classList.remove("disabled");
    weaponsArea.children[i].addEventListener(
      "click",
      playerWeaponSelectionEvent
    );
  }
};

const getWeaponByName = (weaponName) => {
  return weapons.find((weapon) => weapon.name === weaponName);
};
