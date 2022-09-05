export type PossibleClassName = string | number | undefined | null | boolean;

export const combineClassName = (...classNames: PossibleClassName[]) => {
    return classNames.filter(Boolean).join(" ")
}