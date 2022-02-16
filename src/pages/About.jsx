const About = () => {
  return (
    <div className="about">
      <p>
        About this site
        <br />
        This is a simple Hacker News clone, built with SvelteKit, an application
        framework for Svelte.
        <br />
        <br />
        Svelte is a new kind of framework, one that compiles your component
        templates into fast, compact JavaScript — either client-side or
        server-side. You can read more about the design and philosophy in the
        introductory blog post.
        <br />
        <br />
        We're using hnpwa-api as a backend. The app is hosted on Vercel.
      </p>
    </div>
  );
};

export default About;
