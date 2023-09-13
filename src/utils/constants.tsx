/* eslint-disable react-refresh/only-export-components */
export const POKEMON_PER_LOAD = 20;

export const REGIONS: string[] = [
  "all",
  "kanto",
  "johto",
  "hoenn",
  "sinnoh",
  "unova",
  "kalos",
  "alola",
  "galar",
];
interface RegionInfo {
  [key: string]: {
    start: number;
    limit: number;
  };
}

export const REGION_INFO: RegionInfo = {
  all: {
    start: 0,
    limit: 898,
  },
  kanto: {
    start: 0,
    limit: 151,
  },
  johto: {
    start: 151,
    limit: 100,
  },
  hoenn: {
    start: 251,
    limit: 135,
  },
  sinnoh: {
    start: 386,
    limit: 108,
  },
  unova: {
    start: 494,
    limit: 155,
  },
  kalos: {
    start: 649,
    limit: 72,
  },
  alola: {
    start: 721,
    limit: 88,
  },
  galar: {
    start: 809,
    limit: 89,
  },
};

export const TYPES:string[] = [
  "all",
  "normal",
  "fire",
  "water",
  "electric",
  "grass",
  "ice",
  "fighting",
  "poison",
  "ground",
  "flying",
  "psychic",
  "bug",
  "rock",
  "ghost",
  "dragon",
  "dark",
  "steel",
  "fairy",
];

export const TYPE_COLORS: Record<string, string> = {
  normal: "#a8a77a",
  fire: "#ee8130",
  water: "#6390f0",
  electric: "#f7d02c",
  grass: "#7ac74c",
  ice: "#96d9d6",
  fighting: "#c22e28",
  poison: "#a33ea1",
  ground: "#e2bf65",
  flying: "#a98ff3",
  psychic: "#f95587",
  bug: "#a6b91a",
  rock: "#b6a136",
  ghost: "#735797",
  dragon: "#6f35fC",
  dark: "#705746",
  steel: "#b7b7ce",
  fairy: "#d685ad",
};

// Secondary colors for Pokemon with one type, to make the gradient more appealing
export const TYPE_SECONDARY_COLORS: Record<string, string> = {
  normal: "#d7d6ab",
  fire: "#d12929",
  water: "#185ceb",
  electric: "#f3a800",
  grass: "#b0e50e",
  ice: "#5dfbe5",
  fighting: "#d11313",
  poison: "#6a3469",
  ground: "#c3a200",
  flying: "#b8a7e9",
  psychic: "#ff004e",
  bug: "#7a8b01",
  rock: "#856f00",
  ghost: "#6204db",
  dragon: "#362f46",
  dark: "#221a14",
  steel: "#ebebed",
  fairy: "#f1a2c9",
};

export const SORT_BY: string[] = ["id", "name", "high to low"];

export const STAT_COLORS: Record<string, string> = {
  hp: "#ff0100",
  attack: "#f08030",
  defense: "#f9d02f",
  "special-attack": "#6790f0",
  "special-defense": "#78c84f",
  speed: "#f95887",
};

