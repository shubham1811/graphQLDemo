const data = {
  authors: [
    {
      id: 1,
      name: "Author 1",
      bookIds: [101, 102],
    },
    {
      id: 2,
      name: "Author 2",
      bookIds: [103],
    },
  ],
  books: [
    {
      id: 101,
      title: "Book1",
      publishedYear: 2020,
      authorId: 1,
    },
    {
      id: 102,
      title: "Book2",
      publishedYear: 2021,
      authorId: 1,
    },
    {
      id: 103,
      title: "Book3",
      publishedYear: 2023,
      authorId: 2,
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },

  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },

  Query: {
    authors: () => {
      return data.authors;
    },
    books: () => {
      return data.books;
    },
  },

  Mutation: {
    addBook: (parent, args, context, info) => {
      console.log(args);
      const newBook = { ...args, id: "104" };
      data.books.push(newBook);
      return newBook;
    },
  },
};
