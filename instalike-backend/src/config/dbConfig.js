import { MongoClient } from "mongodb";

export default async function conectarAoBanco(stringDeConexao) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(stringDeConexao);
    console.log('Conectando ao cluster do Banco de Dados...');
    await mongoClient.connect();
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    return mongoClient;    
  } catch (error) {
    console.error('Falha na conexão com o Banco de Dados!', error);
    process.exit();
  }
}