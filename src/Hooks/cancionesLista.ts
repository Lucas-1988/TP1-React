type Cancion = {
  Orden: string;
  titulo: string;
  arte: string;
  año: string;
  audioUrl: string;
  Album: string;
  Duracion: string;
};

export function cancionesLista(): Cancion[] {
  return [
   {
      Orden: "1",
      titulo: "The Incident - Porcupine Tree",
      audioUrl: "/Musica/porcupine_tree__the_incident.mp3",
      arte: "https://m.media-amazon.com/images/I/41kBPpqJbiL._SX300_SY300_QL70_FMwebp_.jpg",
      año: "2009",
      Album: 'The Incident',
      Duracion: '5:19',
    },
    {
      Orden: "2",
      titulo: "Sex Tape - Deftones",
      audioUrl: "/Musica/Sextape.mp3",
      arte: "https://images.squarespace-cdn.com/content/v1/5147d98fe4b0e61bb0ab60ec/1363845787383-JGAGB2GKWBGOEL08VMHZ/Deftones+DE+Cover+300+rgb.jpg?format=1500w",
      año: "2000",
      Album: 'Diamond Eyes',
      Duracion: '4:01',
    },
    {
      Orden: "3",
      titulo: "Parabola - Tool",
      audioUrl: "/Musica/Parabola.mp3",
      arte: "https://lastfm.freetls.fastly.net/i/u/770x0/ec676167abeb99f85d6fee875d55251e.jpg",
      año: "2001",
      Album: 'Lateralus',
      Duracion: '6:03',
    },
    {
      Orden: "4",
      titulo: "Birds of feather - Billie Eilish",
      audioUrl: "0/Musica/BIRDS OF A FEATHER.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/5d284b31cb9ddeb1a0c79aede5a94e1c/500x500-000000-80-0-0.jpg",
      año: "2024",
      Album: 'Hit Me Hard and Soft',
      Duracion: '3:30',
    },
    {
      Orden: "5",
      titulo: "Digital Bath - Deftones",
      audioUrl: "/Musica/DigitalBath.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/c2942294fe29f749ca9ed2d1b25bb247/500x500-000000-80-0-0.jpg",
      año: "2000",
      Album: 'White Pony',
      Duracion: '4:15',
    },
    {
      Orden: "6",
      titulo: "El último de todos - Anomia",
      audioUrl: "/Musica/el_ultimo_de_todos.mp3",
      arte: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnEpwOoCFlWPXaGrK3rScKMyLeVezt0HEVdUJ1NPZyfPsfkaJU1O6hfD3DgDpfilDqmPc&usqp=CAU",
      año: "2022",
      Album: 'Anomia EP',
      Duracion: '6:32',
    }, 
    {
      Orden: "7",
      titulo: "Parte de mi - El Zar, No te va Gustar",
      audioUrl: "/Musica/Parte de Mi.mp3",
      arte: "https://www.cmtv.com.ar/tapas-cd/0999491001741389163.webp",
      año: "2025",
      Album: 'PARADISO',
      Duracion: '3:45',
    },
    {
      Orden: "8",
      titulo: "Mystical Magical - Benson Boone",
      audioUrl: "/Musica/Mystical Magical.mp3",
      arte: "https://cvr.mp3caprice.com/covers/albums/385/822/230.jpg",
      año: "2025",
      Album: 'Mystical Magical',
      Duracion: '2:46',
    },
        {
      Orden: "9",
      titulo: "Vulnerable - Gauchito Club",
      audioUrl: "/Musica/Vulnerable.mp3",
      arte: "https://i0.wp.com/talcomosoy.com.ar/wp-content/uploads/2024/06/unnamed-1.png?w=898&ssl=1",
      año: "2024",
      Album: 'Vulnerable',
      Duracion: '3:59',
    },
    {
      Orden: "10",
      titulo: "Losing My Religion - R.E.M.",
      audioUrl: "/Musica/Losing My Religion.mp3",
      arte: "https://quesuenelabocina.com/wp-content/uploads/rem-losing-my-religion-1024x1024.jpeg",
      año: "1991",
      Album: 'Out Of Time',
      Duracion: '4:28',
    },
    {
      Orden: "11",
      titulo: "Amazonia - Gojira",
      audioUrl: "/Musica/Amazonia.mp3",
      arte: "https://cdn-images.dzcdn.net/images/cover/58c0fc2ba2dc8f529a9907be600c2944/500x500-000000-80-0-0.jpg",
      año: "2021",
      Album: 'Fortitude',
      Duracion: '5:01',
    },
    {
      Orden: "12",
      titulo: "Right Now - Korn",
      audioUrl: "/Musica/Right Now.mp3",
      arte: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYvE2QubOUC1KgRD-a52OjcO28LJ2C_cMIQQ&s",
      año: "2024",
      Album: 'Take A Look In The Mirror',
      Duracion: '3:09',
    },   
];
}