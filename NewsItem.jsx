// Import de l'image télécharger.jpg depuis le dossier assets
import image from '../assets/télécharger.jpg';

// Définition du composant NewsItem
const NewsItem = ({ title, description, src, url }) => {
    return (
        // Conteneur de la carte avec des styles 
        <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
            {/* Image de l'article : Utilise src s'il est défini, sinon utilise l'image par défaut télécharger.jpg */}
            <img src={src ? src : image} style={{ height: "270px", width: "330px" }} className="card-img-top" alt="..." />

            {/* Corps de la carte contenant le titre, la description, et le bouton "Read More" */}
            <div className="card-body">
                {/* Titre limité à 50 caractères */}
                <h5 className="card-title">{title.slice(0, 50)} </h5>
                {/* Description limitée à 99 caractères (si elle est définie) */}
                <p className="card-text"> {description ? description.slice(0, 99) : ""} </p>
                {/* Bouton qui redirige vers l'URL complète de l'article */}
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

// Export du composant NewsItem
export default NewsItem;