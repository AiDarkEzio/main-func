export declare function WikiPedia({ query }: {
    query: string;
}): Promise<{
    wiki: string;
    thumb: string;
    title: string;
}>;
export declare function WikiMedia({ title }: {
    title: string;
}): Promise<{
    title: string | undefined;
    source: string | undefined;
    image: string | undefined;
}[]>;
//# sourceMappingURL=wiki_SC.d.ts.map