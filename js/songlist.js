const RAW_ALBUMS = [15]
  // TODO: replace this placeholder with the real In Flames catalog. As as many as you need to complete the catalog.
  {
    id: "lunar-strain",
    title: "Lunar Strain",
    year: 1994,
    cover: "img/album/LunarStrain.jpg",
    isCover: false,
    isSingle: false,
    songs: [
      { title: "Behind Space" },
      { title: "Starforsaken" },
      { title: "Dreamscape" }, 
      { title: "Everlost Pt. 1" },
      { title: "Everlost Pt. 2" }, 
      { title: "Hårgalåten" },
      { title: "In Flames" }, 
      { title: "Upon An Oaken Throne" },
      { title: "Clad In Shadows", }
    ],
  },
];


// NO WORK IS NECESSARY BELOW THIS LINE

// Array.sort is stable, so albums sharing a year preserve their RAW_ALBUMS order.
export const ALBUMS = [...RAW_ALBUMS].sort((a, b) => a.year - b.year);

// Flatten the selected albums' tracklists into a deduped, sort-ready song list.
// Dedup key is `title` lowercased and trimmed; the first occurrence (by album year
// ascending — see ALBUMS export) wins. Each entry carries a back-reference to its
// source album so the UI can render album titles / cover art alongside the song.
export function buildSongList(selectedAlbumIds) {
  const songs = [];
  const seen = new Set();
  for (const album of ALBUMS) {
    if (!selectedAlbumIds.has(album.id)) continue;
    for (const song of album.songs) {
      const key = song.title.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      songs.push({ title: song.title, translation: song.translation, album });
    }
  }
  return songs;
}
