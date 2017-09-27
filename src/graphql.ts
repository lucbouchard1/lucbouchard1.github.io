

export
namespace GraphQL {
    export
    interface Post {
        node: {
            frontmatter: {
                title: string;
            }
            fields: {
                slug: string;
                type: string;
                name: string;
            }
        }

    }
}