type BodyInit2 = XMLHttpRequestBodyInit;
type BodyInit2Chromium = ReadableStream | XMLHttpRequestBodyInit;
interface RequestInitBase {
    cache?: RequestCache;
    credentials?: RequestCredentials;
    headers?: HeadersInit;
    integrity?: string;
    keepalive?: boolean;
    method?: string;
    mode?: RequestMode;
    redirect?: RequestRedirect;
    referrer?: string;
    referrerPolicy?: ReferrerPolicy;
    signal?: AbortSignal | null;
    window?: null;
}
interface RequestInit2 extends RequestInitBase {
    body?: BodyInit2 | null;
}
interface RequestInit2Chromium extends RequestInitBase {
    body?: BodyInit2Chromium | null;
}

type Left<L> = { readonly tag: 'Left'; readonly left: L };
type Right<R> = { readonly tag: 'Right'; readonly right: R };
type Either<L, R> = Left<L> | Right<R>;
const left = <L>(input: L): Left<L> => ({tag: 'Left', left: input} as const);
const right = <R>(input: R): Right<R> => ({tag: 'Right', right: input} as const);


export type Fetch2 = (input: RequestInfo | URL, init?: RequestInit2) => Promise<Either<unknown, Response>>;
export const fetch2: Fetch2 = (input, init?) =>
    fetch(input, init as RequestInit | undefined).then(result => right(result), error => left(error));
export type Fetch2Chromium = (input: RequestInfo | URL, init?: RequestInit2Chromium) => Promise<Either<unknown, Response>>;
export const fetch2Chromium = fetch2 as Fetch2Chromium;
