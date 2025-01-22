class Tools {
    // Une méthode statique qui effectue une opération utile, par exemple,
    // le formatage d'une date au format "DD/MM/YYYY"
    static formatDate(date) {
        if (!(date instanceof Date)) {
            throw new Error("Le paramètre doit être une instance de Date");
        }

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    // Une autre méthode statique, par exemple, pour générer un ID unique
    static generateUniqueId(prefix = "id") {
        return `${prefix}-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    static helloWorld(){
        console.log('helloWorld');
    }
}

// Exportation de la classe pour qu'elle soit réutilisable
export default Tools;