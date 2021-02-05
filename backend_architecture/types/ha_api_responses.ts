// Réponses lors d'une requete sur le core (par ws seulement ?)
interface SuccessResult {
    id: number;
    type: "result";
    success: true;
    result: unknown;
}

interface ErrorResult {
    id: number;
    type: "result";
    success: false;
    error: {
        code: string;
        message: string;
    };
}