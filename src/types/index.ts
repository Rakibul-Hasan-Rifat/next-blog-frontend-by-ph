export type TPost = {
    id: number,
    title: string,
    content: string,
    thumbnail?: string,
    isFeatured: boolean,
    tags: string[],
    views: number,
    authorId: number,
    createdAt: string,
    updatedAt: string,
    user: {
        id: number,
        name: string,
        email: string,
        isVerified: boolean,
        phone: string,
        picture?: string,
        createdAt: string,
        updatedAt: string
    }
}