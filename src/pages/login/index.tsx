const Login = () => <div>login page</div>;

export default Login;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
