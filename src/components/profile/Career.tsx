const Career: React.FC<{ education: any; experience: any; skills: any }> = ({
  education,
  experience,
  skills,
}) => {
  return (
    <>
      <div className="experience">
        {experience.map((job: any, index: number) => {
          return (
            <div className="job" key={index}>
              <p className="job-title">{job.jobName}</p>
              <p className="job-firm">{job.firm}</p>
              <p className="job-description">{job.description}</p>
              <div className="date">
                <p>{job.startDate} - </p>
                <p> {job.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="experience">
        {education.map((job: any, index: number) => {
          return (
            <div className="job" key={index}>
              <p className="job-title">{job.schoolName}</p>
              <p className="job-firm">{job.major}</p>
              <div className="date">
                <p>{job.startDate} - </p>
                <p> {job.endDate}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="skills">
        <div className="skill-list">
          {skills.job.map((skill: string, index: number) => (
            <p key={index}>-{skill}</p>
          ))}
        </div>
        <div className="skill-list">
          {skills.personal.map((skill: string, index: number) => (
            <p key={index}>-{skill}</p>
          ))}
        </div>
        <div className="skill-list">
          {skills.language.map((skill: string, index: number) => (
            <p key={index}>-{skill}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Career;
