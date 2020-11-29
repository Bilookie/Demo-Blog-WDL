//FIRST FIX [id].js then fix songmodule.js

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function getStaticProps({ params }) {
  const song = await prisma.song.findOne({
    //Check the alternative of findOne
    include: { artist: true },
    where: {
      id: Number(params.id),
    },
  });
  return {
    props: song,
  };
}

export async function getStaticPaths() {
  const songs = await prisma.song.findMany();
  return {
    paths: songs.map((song) => ({
      params: {
        id: song.id.toString(),
      },
    })),
    fallback: false,
  };
}

export default ({ song }) => (
  <iframe
    width="100%"
    height="315"
    src={`https://www.youtube.com/embed/${song.youtubeId}`}
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);
