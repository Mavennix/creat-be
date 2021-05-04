const bcrypt = require("bcryptjs");

const resolvers = {
  Query: {
    async user(root:any, { id }:any, { models }:any) {
      return models.User.findById(id);
    },
    async allNotes(root:any, args:any, { models }:any) {
      return models.Note.findAll();
    },
    async note(root:any, { id }:any, { models }:any) {
      return models.Note.findById(id);
    },
  },

  Mutation: {
    async createUser(root:any, { name, email, password }:any, { models }:any) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
    },
    async createNote(root:any, { userId, title, content }:any, { models }:any) {
      return models.Note.create({ userId, title, content });
    },
  },

  User: {
    async notes(user:any) {
      return user.getNotes();
    },
  },
  Note: {
    async user(note:any) {
      return note.getUser();
    },
  },
};

export default resolvers;
