const { PUBLIC_URL } = process.env;
const courses = [
  {
    title: 'AWS Certified Developer Assoicate',
    link: `${PUBLIC_URL}/certifications/aws.pdf`,
    university: 'AWS',
  },
  {
    title: 'Java/J2EE Certified Developer',
    link: `${PUBLIC_URL}/certifications/java.pdf`,
    university: 'Oracle',
  },
];

export default courses;
