// task_1/dashboard/src/utils.js

// Fonction pour obtenir l'année en cours
export function getFullYear() {
  return new Date().getFullYear();
}

// Fonction pour obtenir le texte du footer
export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}
