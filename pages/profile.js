import auth0 from '../utils/auth0';

export default function Profile({ user }) {
  return (
    <>
      <h1>Welcome, {user.name}</h1>

      <p>
        <a href="/api/auth/logout">Logout</a>
      </p>
    </>
  );
}

export async function getServerSideProps({ req }) {
  const session = await auth0.getSession(req);

  return { props: { user: session.user } };
}
