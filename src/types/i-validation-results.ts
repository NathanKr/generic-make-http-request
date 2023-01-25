export type AjvError = any; // todo nath , can it get better

// -- not part of IQuizFromServer so no need for validation annotation
export default interface IValidationResult{
    valid : boolean;
    ajvErrors? : AjvError;  
}