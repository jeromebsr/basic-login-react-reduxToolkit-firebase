# Niveaux #
    # RANGs #

    -> Directeur - Admin
    -> Enseignant - Modérateur / Editeur
    -> Parent - Lecteur

    # Ecole #

    -> Ecole (News de l'école)
    -> Classe (News de la classe de l'enfant)

# Home #
    Les news de l'école 
        -> Posts du directeur (ALL)
    Les news de la classe (PARENTS CONERNES)
        -> Posts de l'enseignant 
    Les news des parents (ALL)
        -> Posts des parents

# Post #
    -> user
    -> message
    -> PJ (png, pdf, etc.)
    -> Editer / Supprimer

# User #
    -> email
    -> username
    -> password
    -> Photo de profil
    -> commentaires []
    -> enfants {
        nom,
        prenom,
        classe
    }

# Register #
    -> email
    -> username
    -> password
# Contact #
    Contacter :
        Parent : 
            -> Directeur
            -> Enseignant
        Directeur :
            -> Parent
        Enseignant : 
            -> Parent

# Informations à transmettre #
    -> Retards
    -> Absences
    -> Rendez-vous


# Menu #
    -> Mon école
    -> Ma classe
    -> Mes échanges (Messages, informations à transmettre)

            
"é#   b a s i c - l o g i n - r e a c t - r e d u x T o o l k i t - f i r e b a s e  
 #   b a s i c - l o g i n - r e a c t - r e d u x T o o l k i t - f i r e b a s e  
 