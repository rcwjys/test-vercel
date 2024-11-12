// // pages/index.tsx
import { Fragment, useEffect, useState } from "react";

type Career = {
  id_posting: string;
  name: string;
  namaDepartement: string;
  position: string;
  requirement: string;
};

// export default function Home() {
//   const [careers, setCareers] = useState<Career[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const res = await fetch(
//           "https://amdgmmp.mmproperty.com/api/career.php?lang=id"
//         );

//         const data = await res.json();

//         setCareers(data.career);
//       } catch (err) {
//         setError("failed to fetch");
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h1>Career Listings ({careers.length})</h1>
//       {error && <p>{error}</p>}
//       {careers.length > 0 ? (
//         careers.map((career, index) => (
//           <ul key={index} style={{ marginTop: "25px" }}>
//             <li>{career.id_posting}</li>
//             <li>{career.name}</li>
//             <li>{career.namaDepartement}</li>
//             <li>{career.position}</li>
//             <li dangerouslySetInnerHTML={{ __html: career.requirement }} />
//             <p>==============================</p>
//           </ul>
//         ))
//       ) : (
//         <p>No careers available</p>
//       )}
//     </div>
//   );
// }

export default function Career() {
  const [careers, setCareers] = useState<Career[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://amdgmmp.mmproperty.com/api/career.php?lang=id"
        );

        const data = await res.json();

        setCareers(data.career);
      } catch (err) {
        setError("No job postings available at the moment.");
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* <P className="mt-10">{t("Company.career.description")}</P>   */}
      <div className="m-0 flex list-none flex-wrap justify-between p-0 font-sans">
        <ol className="flex flex-wrap p-0">
          {careers.length > 0 ? (
            careers.map((job: Career, index: number) => (
              <Fragment key={index}>
                <li
                  key={job.id_posting}
                  className="box-border flex flex-1 basis-1/3 p-4"
                >
                  <div className="border-gray-400 flex w-full flex-col overflow-hidden rounded-sm border bg-white p-2 shadow-lg">
                    <div className="flex flex-1 flex-col p-2">
                      <div className="mb-2">
                        <div className="text-blue-800 mb-2 text-lg font-bold uppercase">
                          {job.name}
                        </div>
                        <p className="mb-2 text-base">
                          {job.namaDepartement}
                          <br />
                          {job.position}
                        </p>
                      </div>
                      <p className="mb-1 text-sm">
                        <b>Persyaratan:</b>
                      </p>
                      <div
                        className="line-clamp-4 text-sm leading-6"
                        dangerouslySetInnerHTML={{ __html: job.requirement }}
                      ></div>
                      <a
                        href={`https://hr.mmproperty.com/${job.id_posting}`}
                        target="_blank"
                        className="border-indigo-900 hover:bg-indigo-600 hover:text-gray-200 mt-4 block w-full rounded border bg-blue py-2 text-center text-sm text-white shadow-md"
                      >
                        <b>See More</b>
                      </a>
                    </div>
                  </div>
                </li>
              </Fragment>
            ))
          ) : (
            <div className="py-6 text-center">
              <p className="text-gray-500 text-lg">{error}</p>
            </div>
          )}
        </ol>
      </div>
    </>
  );
}
