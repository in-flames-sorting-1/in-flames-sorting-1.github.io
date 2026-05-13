const RAW_ALBUMS = [
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
      { title: "Clad In Shadows" },
    ]
  },
  {
    id: "subterranean",
    title: "Subterranean",
    year: 1995,
    cover: "img/album/Subterranean.jpg",
    isCover: false,
    isSingle: false,
    song: [
      { title: "Stand Ablaze" },
      { title: "Ever Dying" },
      { title: "Subterranean" },
      { title: "Timeless" },
      { title: "Biosphere" },
      { title: "Dead Eternity" },
      { title: "The Inborn Lifeless" },
      { title: "Eye Of The Beholder" },
      { title: "Murders In The Rue Morgue" },
    ]
  },
  {
    id: "the-jester-race",
    title: "The Jester Race",
    year: 1996,
    cover: "img/album/TheJesterRace.jpg",
    isCover: false,
    isSingle: false,
    songs: [
      { title: "Moonsheild" },
      { title: "The Jester's Dance" },
      { title: "Artifacts Of The Black Rain" }, 
      { title: "Graveland" },
      { title: "Lord Hypnos" }, 
      { title: "Dead Eternity" },
      { title: "The Jester Race" },
      { title: "December Flower" }, 
      { title: "Wayfaerer" },
      { title: "Dead God In Me" },
      { title: "Goliaths Disarm Their Davids" },
      { title: "Acoustic Medley" },
    ]
  },
  {
    id: "whoracle",
    title: "Whoracle",
    year: 1997,
    cover: "img/album/Whoracle.jpg",
    isCover: false,
    isSingle: false, 
    songs: [
      { title: "Jotun" },
      { title: "Food For The Gods" },
      { title: "Gyroscope" },
      { title: "Dialouge With The Stars" },
      { title: "The Hive" },
      { title: "Jester Script Transfigured" },
      { title: "Morphing Into Primal" },
      { title: "Worlds Withn The Margin" },
      { title: "Episode 666" }, 
      { title: "Everything Counts" },
      { title: "Whoracle" }, 
      { title: "Clay in Shadows 99" },
    ]
  },
  {
    id: "colony",
    title: "Colony",
    year: 1999,
    cover: "img/album/Colony.jpg",
    isCover: false,
    isSingle: false, 
    songs: [
      { title: "Embody The Invisible" },
      { title: "Ordinary Story" },
      { title: "Scorn" },
      { title: "Colony" },
      { title: "Zombie Inc." },
      { title: "Pallar Anders Visa" },
      { title: "Coecered Coexistence" },
      { title: "Resin" },
      { title: "Behind Space '99" }, 
      { title: "Inspid 2000" },
      { title: "The New Word" }, 
      { title: "Man Made God" },
    ]
  },
  {
    id: "clayman",
    title: "Clayman",
    year: 2000,
    cover: "img/album/Clayman",
    isCover: false,
    isSingle: false,
    songs: [
      { title: "Bullet Ride" },
      { title: "Pinball Map" },
      { title: "Only For The Weak" },
      { title: "...As The Future Repeats Today" },
      { title: "Square Nothing" },
      { title: "Clayman" },
      { title: "Satellites and Astronouts" },
      { title: "Brush The Dust Away" },
      { title: "Swim" },
      { title: "Suburban Me" },
      { title: "Another Day In Quicksand" },
      { title: "Strong And Smart" },
      { title: "World Of Promises" },
    ]
  },
  {
    id: "rereoute-to-remain",
    title: "Reroute To Remain",
    year: 2002,
    cover: "img/album/RerouteToRemain",
    isCover: false,
    isSingle: false,
    songs: [
      { title: "Reroute To Remain" },
      { title: "System" },
      { title: "Drifter" },
      { title: "Trigger" },
      { title: "Cloud Connected" },
      { title: "Transparent" },
      { title: "Dawn Of A New Day" },
      { title: "Egonomic" },
      { title: "Minus" },
      { title: "Dismiss The Cynics" },
      { title: "Free Fall" },
      { title: "Dark Signs" },
      { title: "Metaphor" },
      { title: "Black And White" },
      { title: "Watch Them Feed" },
      { title: "Land Of Confusion" },
    ]
  },
        


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
