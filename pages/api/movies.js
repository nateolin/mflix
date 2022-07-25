import clientPromise from '../../lib/mongodb'

export default async (req, res) => {
  const client = await clientPromise

  const database = client.db('sample_mflix')

  const movies = await database
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
};