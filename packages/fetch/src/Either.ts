export type Left<L> = { readonly tag: 'Left'; readonly left: L };
export type Right<R> = { readonly tag: 'Right'; readonly right: R };
export type Either<L, R> = Left<L> | Right<R>;
export const left = <L>(input: L): Left<L> => ({tag: 'Left', left: input} as const);
export const right = <R>(input: R): Right<R> => ({tag: 'Right', right: input} as const);
export const isLeft = <L, R>(input: Either<L, R>): input is Left<L> => input.tag === 'Left';
export const isRight = <L, R>(input: Either<L, R>): input is Right<R> => input.tag === 'Right';
