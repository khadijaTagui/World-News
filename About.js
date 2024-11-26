import React from 'react';
import styled from 'styled-components';

// Importation du CSS pour styliser les composants (s'il est utilisé)

// Définition d'un conteneur principal stylisé
const MainContainer = styled.main`
  margin: 5rem; /* Marge de 5rem autour du contenu */
`;

// Définition d'un conteneur pour le corps de la page stylisé
const BodyContainer = styled.div`
  height: 100vh; /* Hauteur égale à la taille de la fenêtre */
  width: 100%; /* Largeur à 100% */
  display: grid; /* Utilisation d'une grille pour la mise en page */
  padding: 34px; /* Espacement intérieur */
  text-align: center; /* Alignement du texte au centre */
  font-family: 'Gotham Rounded Book'; /* Police de caractères */
  font-size: 22px; /* Taille de police */
  display: flex; /* Utilisation de flexbox pour le centrage vertical */
  justify-content: center; /* Centrage horizontal */
  align-items: center; /* Centrage vertical */
`;

// Définition d'un conteneur flottant stylisé
const FloatContainer = styled.div`
  float: left; /* Flottant à gauche */
  margin-left: 20px; /* Marge à gauche */
  margin-top: 80px; /* Marge en haut */
  text-align: left; /* Alignement du texte à gauche */
  max-inline-size: 620px; /* Taille maximale du conteneur */
`;

// Définition d'un texte stylisé avec une police de caractères différente et en italique
const FancyText = styled.span`
  font-family: "Melodrama", serif; /* Police de caractères différente */
  font-style: italic; /* Texte en italique */
  padding: 0px 5px; /* Espacement autour du texte */
  line-height: 70%; /* Hauteur de ligne */
  color: #3e7cd9; /* Couleur du texte */
`;

// Définition d'un titre stylisé
const Title = styled.div`
  font-family: 'Gotham Rounded'; /* Police de caractères */
  font-size: 41px; /* Taille de police */
  color: #3e7cd9; /* Couleur du texte */
`;

// Définition d'un texte avec une opacité réduite
const OpacityText = styled.div`
  filter: opacity(63%); /* Opacité de 63% */
  font-family: 'Gotham Rounded'; /* Police de caractères */
  font-weight: 300; /* Poids de police */
  font-size: 14px; /* Taille de police */
`;

// Composant fonctionnel About
function About() {
  return (
    <MainContainer>
      <div>
        <BodyContainer>
          {/* Balise img pour afficher une image */}
          <img src="https://i.pinimg.com/564x/e0/2d/c5/e02dc5bf6d73ab84ecb7f497526045e8.jpg" width="480" alt="News" />
          {/* Conteneur flottant */}
          <FloatContainer>
            {/* Titre */}
            <Title>World News</Title>
            <div>
              {/* Paragraphe */}
              <p>
                Welcome to <FancyText> World News</FancyText>, your go-to source for timely and trustworthy news. At <FancyText> World News</FancyText>, we are dedicated to delivering the latest updates, breaking stories, and in-depth analysis across various categories, ensuring you stay informed on the issues that matter most.

                Founded with a commitment to journalistic integrity and accuracy, our team of experienced reporters and editors work tirelessly to bring you news that is fair, unbiased, and relevant. Whether it's politics, technology, lifestyle, or global affairs, we strive to provide comprehensive coverage that empowers you to make informed decisions in an ever-evolving world.
                
                What sets <FancyText>  World News</FancyText> apart is our unwavering dedication to delivering news without sensationalism. We believe in the power of information to inspire positive change and foster a well-informed society. Our mission is to be your trusted companion in navigating the complexities of the modern world.
                
                Explore our website to discover a rich tapestry of news articles, features, and opinion pieces. Engage with us on social media and join the conversation as we seek to foster a community of critical thinkers and informed citizens.
                
                Thank you for choosing <FancyText> World News</FancyText> as your news destination. We look forward to being your reliable source for news that matters.
                
                
              </p>
            </div>
          </FloatContainer>
        </BodyContainer>
      </div>
    </MainContainer>
  );
}

export default About;











