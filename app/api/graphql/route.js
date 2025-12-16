import { createYoga, createSchema } from "graphql-yoga";

const produtos = [
    {
        id: 1,
        title: "Cereal",
        body: `Este é Cereal Mati®: energia e crocância para suas manhas.
        Feito de milho e grãos integrais, é fonte de fibras e energia, ele ajuda a manter a saciedade e o equilíbrio que o seu corpo precisa ao longo do dia.
        Ótima combinação com leite, iogurte Mati® ou frutas, o cereal Mati® transforma o café da manhã em um momento prático, saudável e delicioso.`
    },
    {
        id: 2,
        title: "Granola",
        body: `Feita com grãos nobres, castanhas variadas e frutas desidratadas, nossa granola combina crocância e leveza em cada colherada. Produzida com ingredientes 100% naturais, é fonte de fibras, proteínas e energia.
        Experimente com iogurtes, frutas ou pura. A granola Mati® transforma o café da manhã em um momento de prazer e bem-estar.`
    },
    {
        id: 3,
        title: "Iogurte",
        body: `Produzido com leite fresco, nosso iogurte é fonte de cálcio, proteínas e probióticos que cuidam do seu corpo e regulam a flora intestinal. Não utilizamos conservantes nem adição de açúcares, é a escolha ideal para quem busca sabor autêntico e alimentação saudável.
        Perfeita combinação para nossa Granola Mati®!`
    },
];

const yoga = createYoga({
    schema: createSchema({
        typeDefs: /* GraphQL */`
        type Produto {
            id: ID!
            title: String!
            body: String!
        }

        type Query {
            produtos: [Produto]!
            produto(id: ID!): Produto
        }

        input CreateProdutoInput {
            title: String!
            body: String!
        }
        
        type Mutation {
            createProduto(input: CreateProdutoInput!): Produto!
        }
        `,

        resolvers: {
            Query: {
                produtos: () => produtos,
                produto: (_, { id }) => produtos.find(p => p.id == id),
            },
            Mutation: {
                createProduto: (_, { input }) => {
                    const newProduto = {
                        id: Date.now().toString(),
                        ...input
                    };
                    produtos.push(newProduto);
                    return newProduto;
                },
            },
        },
    }),
    graphqlEndpoint: "/api/graphql",
});

export { yoga as GET, yoga as POST };