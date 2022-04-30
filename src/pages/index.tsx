import Prose from 'components/Prose';
import type {NextPage} from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Prose>
        <h1>Harry's Template Website</h1>
        <p>
          This is a template website combining the web technologies I've
          personally found to be the best for rapid development.
        </p>
        <p>The technologies used are as follows:</p>
        <ul>
          <li>
            <a href="https://www.typescriptlang.org/">Typescript</a>, which has
            probably made the biggest productivity difference so far.
          </li>
          <li>
            <a href="https://nextjs.org/">Next.js,</a> which handles routing,
            code splitting, and provides a better code structure{' '}
          </li>
          <li>
            <a href="https://github.com/google/gts">gts</a> - Which is googles
            opinionated style guide for typescript projects
          </li>
          <li>
            <a href="https://tailwindcss.com/">Tailwindcss</a> for a lightweight
            and flexible styling library.
          </li>
        </ul>

        <p>
          If a cloud backend is necessary, I've come to prefer GCP, using
          firebase wherever possible.
        </p>
        <p>
          This stack makes it very easy with next.js to make a static export
          that can then be hosted in a cloud provider bucket. If instead you
          need a live server, I tend to make a docker container for it to live
          in and put it on cloud run or an equivalent service.
        </p>
      </Prose>
    </div>
  );
};

export default Home;
