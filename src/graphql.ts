

export
namespace GraphQL {
    export
    interface IPost {
        node: {
            frontmatter: {
                title: string;
            }
            fields: {
                slug: string;
                type: string;
                name: string;
            }
        };

    }
};