import alfajor_fernet from '../images/alfajor-fernet-nevado.jpg';
import alfajor_mani_marroc from '../images/alfajor-de-mani-marroc.jpg';
import lemon_pie from "../images/lemon-pie.jpg";
import masas_finas from "../images/masas-finas.jpg";
import postre_oreo from "../images/postre-oreo.jpg";
import postre_oreo_chico from "../images/postre-oreo-chico.jpg";
import cheescake from "../images/cheescake.jpg";
import postre_bon_o_bon from "../images/postre-bon-o-bon.jpg";
import postre_bon_o_bon_chico from "../images/postre-bon-o-bon-chico.jpg";
import masas_secas from "../images/masas-secas.jpg";

/**
 * Formato de json
 * name:
 * image:
 * price:
 * description:
 *
 * **/


const alfajores = [
    {
        'name': 'Alfajor de Fernet nevado',
        'image': alfajor_fernet,
        'price': 0,
        'description': 'Estos son alfajores hechos con fernet'
    },
    {
        'name': 'Alfajor de mani Marroc',
        'image': alfajor_mani_marroc,
        'price': 0,
        'description': 'ESto es un alfajor hecho con mani marroc'
    }
]


const tartas = [
    {
        'name': 'Lemon pie',
        'image': lemon_pie,
        'price': 0,
        'description': 'Lemon pie. Contiene crema de limon y merengue '
    }
]

const masas = [
    {
        'name': 'Masas finas',
        'image': masas_finas,
        'price': 0,
        'description': 'Masitas finas en caja'
    },
    {
        'name': 'Masas Secas',
        'image': masas_secas,
        'price': 0,
        'description': 'Masitas secas'
    }
]



const postres = [
    {
        'name': 'Postre oreo Grande',
        'image': postre_oreo,
        'price': 0,
        'description': 'Postre oreo en vaso grande. Contiene crema oreo, dulce de leche y pedazos de galletita oreo'
    },
    {
        'name': 'Postre oreo Chico',
        'image': postre_oreo_chico,
        'price': 0,
        'description': 'Postre oreo en vaso chico. Contiene crema oreo, dulce de leche y pedazos de galletita oreo'
    },
    {
        'name': 'Cheescake chico',
        'image': cheescake,
        'price': 0,
        'description': 'Postre cheescake en vaso chico. Contiene crema cheescake, masa de galletitas y mermelada de frutos rojos'
    },
    {
        'name': 'Postre bon o bon Grande',
        'image': postre_bon_o_bon,
        'price': 0,
        'description': 'Postre bon o bon en vaso grande. Contiene crema de dll y pedazos de bon o bon'
    },
    {
        'name': 'Postre bon o bon chico',
        'image': postre_bon_o_bon_chico,
        'price': 0,
        'description': 'Postre bon o bon en vaso grande. Contiene crema de dll y pedazos de bon o bon'
    },
]

const tortas = [
    {
        'name': 'Chocotorta',
        'image': postre_oreo,
        'price': 0,
        'description': 'Chocotorta de 24cm'
    }
]

export {alfajores, tartas, masas, postres, tortas};