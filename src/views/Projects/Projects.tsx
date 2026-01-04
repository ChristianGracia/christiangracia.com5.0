import { type FC } from "react";
import { PageLayout } from "../../components";
import JobContainer from "../../components/JobContainer";

const Projects: FC = () => {
  return (
    <PageLayout>
      <div>Projects</div>
      <JobContainer />
    </PageLayout>
  );
};

export default Projects;
