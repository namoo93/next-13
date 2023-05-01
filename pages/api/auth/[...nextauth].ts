import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '029e478f9cd512988eb8',
      clientSecret: 'cda47b1b0fa22d8f809315c237f4ef8438df6b81',
    }),
  ],
  secret: 'dkaghdlqslek10004',
};
export default NextAuth(authOptions);
