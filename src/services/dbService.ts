import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://kovendhan2535:<db_password>@cluster0.tbgew.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

export class DbService {
  private static instance: DbService;
  private client: MongoClient;

  private constructor() {
    this.client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
  }

  static getInstance() {
    if (!DbService.instance) {
      DbService.instance = new DbService();
    }
    return DbService.instance;
  }

  async connect() {
    try {
      await this.client.connect();
      console.log("Connected to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
    }
  }

  async saveUser(userData: any) {
    try {
      const database = this.client.db("epic_wallpaper");
      const users = database.collection("users");
      return await users.insertOne(userData);
    } catch (error) {
      console.error("Error saving user:", error);
      throw error;
    }
  }

  async close() {
    await this.client.close();
  }
}