import Container from "./Container";
import SectionTitle from "./SectionTitle";

const Education = () => {
  return (
    <Container id="education" className="py-10 lg:py-24 flex flex-col gap-12">
      <SectionTitle titleNo="04" title="Education" />
      <div className="flex flex-col gap-6">
        {/* Bachelor's Degree */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Addis Ababa University</h3>
          <p className="text-base text-gray-500">
            Bachelor's Degree, Computer Science
          </p>
          <p className="text-sm text-gray-600">2020 - 2023</p>
        </div>

        {/* Master's Degree */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Addis Ababa University</h3>
          <p className="text-base text-gray-500">
            Master's Degree, Software Engineering
          </p>
          <p className="text-sm text-gray-600">2024 - 2026(on going)</p>
        </div>
      </div>
    </Container>
  );
};

export default Education;
