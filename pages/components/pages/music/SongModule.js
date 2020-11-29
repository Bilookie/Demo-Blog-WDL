// export function SongList(){
// return (
//     <>
//     <h1>Dance</h1>
//     </>
// )
// }
// export default SongList
import { PrismaClient } from "@prisma/client";

import Link from "next/link";
// import SongPage from "../songs/Song";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const songs = await prisma.song.findMany({
    include: { artist: true },
  });
  return {
    props: songs,
  };
}
export default //not importing songs ??HERE-IS-THE-ERROR
// return {
//   props: {
//     songs,
//   },
// };
// const prisma = new PrismaClient();
// const songs = await prisma.song.findMany({
// include: { artist:true }
// }); // prisma in model  to findMany
//   return {
//     props: {
//       songs,
//     },
//   };
// }

export default ({ songs }) => (
  <ul>
    {songs.map((song) => {
      <li key={song.id}>
        <Link href="./songs/[id]" as={`./songs/${song.id}`}>
          {song.name}
        </Link>
      </li>;
    })}
  </ul>
);
