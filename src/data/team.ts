export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  initials: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "tm1",
    name: "John Crocker",
    title: "Founder & Owner",
    initials: "JC",
    bio:
      "John brings 20 years of combined experience in the military, loss prevention, and private security. That background shapes everything about how Placer Protection Group operates — from the standards we hold our officers to, to the accountability and discipline we bring to every client relationship.",
  },
];
