import { useState, useEffect } from "react";
import BtnContainer from "./Components/BtnContainer";
import JobInfo from "./JobInfo";
import Loading from "./Components/Loading";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0)
  const handleClick = (idex) =>{
    setCurrentItem(idex)
  }
  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setLoading(false);
      setJobs(newJobs);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  if (loading) {
    return <Loading />;
  }

  return (
    <section className="jobs-center">
      <BtnContainer jobs={jobs}  currentItem={currentItem} handleClick={handleClick}></BtnContainer>
      <JobInfo jobs={jobs} currentItem={currentItem}></JobInfo>
    </section>
  );
};
export default App;
