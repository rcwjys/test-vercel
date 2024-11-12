type Career = {
  id_posting: string;
  name: string;
  namaDepartement: string;
  position: string;
  requirement: string;
};

type CareerResponse = {
  career: Career[];
};

const getJobs = async (url: string) => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data.career as CareerResponse;
  } catch (error) {
    if (error) {
      return "No job postings available at the moment";
    }
  }
};

export default getJobs;
