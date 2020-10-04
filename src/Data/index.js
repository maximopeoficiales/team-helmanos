import { writable } from "svelte/store";
/* estos datos luego vendran de un api */

let datos = [
  {
    id: 1,
    name: "Maximo Junior Apaza Chirhuana",
    shortname: "Maximo Apaza",
    url: "imgs/maximo.jpg",
    career: "Programador Web",
    birth: 2001,
    description:
      "Ser autodidacta y responsable es mi mejor cualidad. Investigar y aprender cada día es mi pasión.",
    biografy:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus dolore nesciunt, eaque maxime odit natus praesentium? Voluptatum, accusantium quia dicta rem eum aliquid laborum dolores quos placeat dolor deserunt.",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "Linkedin",
        link: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/",
      },
    ],
  },
  {
    id: 2,
    name: "Marcos Antonio Alanya Pacheco",
    shortname: "Marcos Alanya",
    url: "imgs/marcos.jpg",
    career: "Contador",
    birth: 2001,
    description:
      "Ser autodidacta y responsable es mi mejor cualidad. Investigar y aprender cada día es mi pasión.",
    biografy:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus dolore nesciunt, eaque maxime odit natus praesentium? Voluptatum, accusantium quia dicta rem eum aliquid laborum dolores quos placeat dolor deserunt.",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "Linkedin",
        link: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/",
      },
    ],
  },
  {
    id: 3,
    name: "Angel Monje Samame",
    shortname: "Angel Monje",
    url: "imgs/angel.jpg",
    career: "Comunicador",
    birth: 2000,
    description:
      "Ser autodidacta y responsable es mi mejor cualidad. Investigar y aprender cada día es mi pasión.",
    biografy:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus dolore nesciunt, eaque maxime odit natus praesentium? Voluptatum, accusantium quia dicta rem eum aliquid laborum dolores quos placeat dolor deserunt.",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "Linkedin",
        link: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/",
      },
    ],
  },
  {
    id: 4,
    name: "Sandro Guevara Segovia",
    shortname: "Sandro Guevara",
    url: "imgs/sandro.jpg",
    career: "Ingeniera Ambiental",
    birth: 2000,
    description:
      "Ser autodidacta y responsable es mi mejor cualidad. Investigar y aprender cada día es mi pasión.",
    biografy:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus dolore nesciunt, eaque maxime odit natus praesentium? Voluptatum, accusantium quia dicta rem eum aliquid laborum dolores quos placeat dolor deserunt.",
    socials: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/",
      },
      {
        name: "Linkedin",
        link: "https://www.facebook.com/",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/",
      },
    ],
  },
];
export const data = writable(datos);
