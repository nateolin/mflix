import { ObjectId } from 'mongodb'
import clientPromise from '../../../lib/mongodb'

export default async (req, res) => {
  const { id } = req.query
//   res.end(`id: ${id}`)

  const client = await clientPromise

  const database = client.db('sample_mflix')

  const movies = await database
    .collection("movies")
    .find({ "_id": ObjectId(`${id}`)})
    .toArray();
    
  res.json(movies);
}