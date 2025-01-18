import Container from "./Container";
import SectionTitle from "./SectionTitle";
import {
  reactImg,
  nextImg,
  tailwindImg,
  djangoImg,
  flutterImg,
  firebaseImg,
  postgresqlImg,
  mysqlImg,
  mongodbImg,
  prismaImg,
  gitImg,
  githubImg,
  notionImg,
  googlemeetImg,
  flaskImg,
  awsImg,
  vercelImg,
  renderImg,
  dockerImg,
  socketImg,
  stripeImg,
  reduxImg,
} from "../assets";

const Stack = () => {
  return (
    <Container id="stack" className="py-10 lg:py-24 flex flex-col gap-12">
      <SectionTitle titleNo="02" title="Tech stack" />

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Frontend</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={reactImg} alt="React" />
            <span className="text-xs mt-2">React</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={nextImg} alt="Next.js" />
            <span className="text-xs mt-2">Next.js</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={tailwindImg} alt="Tailwind" />
            <span className="text-xs mt-2">Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={reduxImg} alt="Redux" />
            <span className="text-xs mt-2">Redux</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Mobile</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={flutterImg} alt="Flutter" />
            <span className="text-xs mt-2">Flutter</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={firebaseImg} alt="Firebase" />
            <span className="text-xs mt-2">Firebase</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Backend</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={djangoImg} alt="Django" />
            <span className="text-xs mt-2">Django</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={flaskImg} alt="Flask" />
            <span className="text-xs mt-2">Flask</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={socketImg} alt="Socket.IO" />
            <span className="text-xs mt-2">Socket.IO</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={stripeImg} alt="Stripe" />
            <span className="text-xs mt-2">Stripe</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Database</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img
              height="50px"
              width="50px"
              src={postgresqlImg}
              alt="PostgreSQL"
            />
            <span className="text-xs mt-2">PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={mysqlImg} alt="MySQL" />
            <span className="text-xs mt-2">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={mongodbImg} alt="MongoDB" />
            <span className="text-xs mt-2">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={prismaImg} alt="Prisma" />
            <span className="text-xs mt-2">Prisma</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Deployment</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={dockerImg} alt="Docker" />
            <span className="text-xs mt-2">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={vercelImg} alt="Vercel" />
            <span className="text-xs mt-2">Vercel</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={awsImg} alt="AWS" />
            <span className="text-xs mt-2">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={renderImg} alt="Render" />
            <span className="text-xs mt-2">Render</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="text-base font-bold">Collaboration Tools</h3>
        <div className="flex gap-6 items-center">
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={gitImg} alt="Git" />
            <span className="text-xs mt-2">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={githubImg} alt="GitHub" />
            <span className="text-xs mt-2">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <img height="50px" width="50px" src={notionImg} alt="Notion" />
            <span className="text-xs mt-2">Notion</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              height="50px"
              width="50px"
              src={googlemeetImg}
              alt="Google Meet"
            />
            <span className="text-xs mt-2">Google Meet</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Stack;
