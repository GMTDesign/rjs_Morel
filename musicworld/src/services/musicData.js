const products = [
    {
      name: "Guitarra acústica",
      id: 1,
      category: "cuerda",
      description: "Instrumento de cuerda.",
      price: 25000,
      stock: 100,
      image: "guitarra_01.jpg"
    },
    {
      name: "Guitarra acústica",
      id: 2,
      category: "cuerda",
      description: "Instrumento de cuerda.",
      price: 20000,
      stock: 50,
      image: "guitarra_02.jpg"
    },
    {
      name: "Guitarra eléctrica",
      id: 3,
      category: "cuerda",
      description: "Instrumento de cuerda.",
      price: 50000,
      stock: 120,
      image: "guitarra_03.jpg"
    },
    {
      name: "Guitarra eléctrica",
      id: 4,
      category: "cuerda",
      description: "Instrumento de cuerda.",
      price: 55000,
      stock: 50,
      image: "guitarra_04.jpg"
    },
    {
      name: "Bajo eléctrico",
      id: 5,
      category: "cuerda",
      description: "Instrumento de cuerda.",
      price: 50000,
      stock: 50,
      image: "bajo_electrico.jpg"
    },

    {
      name: "Trompeta",
      id: 6,
      category: "viento",
      description: "Instrumento de viento.",
      price: 25000,
      stock: 150,
      image: "trompeta.jpg"
    },
    {
      name: "Acordeón",
      id: 7,
      category: "viento",
      description: "Instrumento de viento.",
      price: 30000,
      stock: 25,
      image: "acordeon.jpg"
    },
    {
      name: "Clarinete",
      id: 8,
      category: "viento",
      description: "Instrumento de viento.",
      price: 50000,
      stock: 55,
      image: "clarinete.jpg"
    },
    {
      name: "Flauta dulce",
      id: 9,
      category: "viento",
      description: "Instrumento de viento.",
      price: 30000,
      stock: 50,
      image: "flauta_dulce.jpg"
    },
    {
      name: "Trompa",
      id: 10,
      category: "viento",
      description: "Instrumento de viento.",
      price: 35000,
      stock: 45,
      image: "trompa.jpg"
    },
    {
      name: "Violín",
      id: 11,
      category: "viento",
      description: "Instrumento de viento.",
      price: 30000,
      stock: 50,
      image: "violin.jpg"
    },
    {
      name: "Violonchelo",
      id: 12,
      category: "viento",
      description: "Instrumento de viento.",
      price: 50000,
      stock: 30,
      image: "violonchelo.jpg"
    },
    {
      name: "Batería",
      id: 13,
      category: "percusion",
      description: "Instrumento de percusión.",
      price: 100000,
      stock: 60,
      image: "bateria.jpg"
    },
    {
      name: "Batería",
      id: 14,
      category: "percusion",
      description: "Instrumento de percusión.",
      price: 120000,
      stock: 30,
      image: "bateria_02.jpg"
    },
    {
      name: "Bongos",
      id: 15,
      category: "percusion",
      description: "Instrumento de percusión.",
      price: 30000,
      stock: 50,
      image: "bongos.jpg"
    },
    {
      name: "Djembé",
      id: 16,
      category: "percusion",
      description: "Instrumento de percusión.",
      price: 50000,
      stock: 35,
      image: "djembe.jpg"
    }
]

/*  const getProducts = (id) => {
    return new Promise ((resolve, reject) => {
      setTimeout ( () => {
        resolve(id ? products.find(prod => prod.id === Number(id)) : products)
      }, 3000)
    })
  }
  export default getProducts */