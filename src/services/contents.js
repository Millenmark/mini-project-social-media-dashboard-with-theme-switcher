import facebook from "../assets/icon-facebook.svg";
import instagram from "../assets/icon-instagram.svg";
import twitter from "../assets/icon-twitter.svg";
import youtube from "../assets/icon-youtube.svg";

export const socials = [
  {
    logo: facebook,
    username: "@makkudev",
    followers: 1987,
    colorScheme: "bg-facebook",
    subs: false,
    state: {
      status: "up",
      percent: 12,
    },
  },
  {
    logo: twitter,
    username: "@makkudev",
    followers: 1040,
    colorScheme: "bg-twitter",
    subs: false,
    state: {
      status: "up",
      percent: 99,
    },
  },
  {
    logo: instagram,
    username: "@makkudev",
    followers: 11234,
    colorScheme:
      "bg-gradient-to-r from-instagram-gradient-start to-instagram-gradient-end",
    subs: false,
    state: {
      status: "up",
      percent: 1099,
    },
  },
  {
    logo: youtube,
    username: "Makku Dev",
    followers: 8239,
    colorScheme: "bg-youtube",
    subs: true,
    state: {
      status: "down",
      percent: 144,
    },
  },
];

export const overviews = [
  {
    name: "facebook",
    title: "page views",
    number: 87,
    logo: facebook,
    status: {
      state: "up",
      percent: 3,
    },
  },
  {
    name: "facebook",
    title: "likes",
    number: 52,
    logo: facebook,
    status: {
      state: "down",
      percent: 2,
    },
  },
  {
    name: "instagram",
    title: "likes",
    number: 5462,
    logo: instagram,
    status: {
      state: "up",
      percent: 2257,
    },
  },
  {
    name: "instagram",
    title: "profile views",
    number: 54628,
    logo: instagram,
    status: {
      state: "up",
      percent: 1375,
    },
  },
  {
    name: "twitter",
    title: "retweets",
    number: 117,
    logo: twitter,
    status: {
      state: "up",
      percent: 303,
    },
  },
  {
    name: "twitter",
    title: "likes",
    number: 507,
    logo: twitter,
    status: {
      state: "up",
      percent: 553,
    },
  },
  {
    name: "youtube",
    title: "likes",
    number: 107,
    logo: youtube,
    status: {
      state: "down",
      percent: 19,
    },
  },
  {
    name: "youtube",
    title: "total views",
    number: 1407,
    logo: youtube,
    status: {
      state: "down",
      percent: 12,
    },
  },
];
