

export
namespace GraphQL {
    export
    interface IPost {
        node: {
            frontmatter: {
                title: string;
                priority: number;
            }
            fields: {
                slug: string;
                type: string;
                name: string;
            }
        };

    }
};