module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337), // Render asignará este puerto dinámicamente
  app: {
    keys: env.array('APP_KEYS', ['pIN9mdL7y7eYxHZgWF/KN0RTIGTrE39UR3FeFL2gRyc', 'HTUhrTeIq9+VR8wGh0UM9Lq+hvttSxqeBms0KEGSgFA']),
  },
});
