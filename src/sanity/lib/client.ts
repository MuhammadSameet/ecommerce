import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skpwqEIIK2RRstr6arNtk5zAsbqj5ui0yhSSeCD2eTgUVSYemmsUihSbU6fBcxYbEpy4tA0yXp6gQ8ATEQ5SybxMjZi51fxxBitwVXenyWOcWKtwTD8m4rC1lDKectV4drYnxld3UQ3YtgcBj1wbjGVm2xIUde7MPIJkxazeU9I0R61brhhe"
})
