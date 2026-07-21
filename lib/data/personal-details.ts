export const PERSONAL_DETAILS = {
  fullName: "Lionel Messi",
  firstName: "Lionel",
  lastName: "Messi",
  nickname: "Messi",
  post: "Full Stack Developer",
  headings: ["I'm Lionel Messi"],
  postDescription:
    "I am a passionate software engineer. I have nearly Two decades of experience in the industry. I build scalable web applications and solve complex problems with clean, efficient code.",
  email: "leo_messi@gmail.com",
  phone: "+880 176942069420",
  location: "Dhaka, Bangladesh (Open to world-wide)",
  image: "/images/messi.png",
  socialUsernames: {
    linkedIn: "leo_messi8222",
    github: "ofaruk8222",
    x: "OFaruk1565",
  },
} as const;

export const SOCIAL_LINKS = {
  github: `https://github.com/${PERSONAL_DETAILS.socialUsernames.github}`,
  linkedIn: `https://linkedin.com/in/${PERSONAL_DETAILS.socialUsernames.linkedIn}`,
  x: `https://x.com/${PERSONAL_DETAILS.socialUsernames.x}`,
} as const;
