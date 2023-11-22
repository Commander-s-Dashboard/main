import React from 'react'

export const CG1_Closed_Jobs = () => {

  let now = new Date();
  console.log(now);

  const closedJobsArr = [
    {
      title: "Army Reserve Administrator",
      id: "ara",
      openedDate: "11/09/23",
      closedDate: "11/21/23",
      completeInterviews: "N",
    },
  ]

  return (
    <div className="container h-screen">
      <div className="text-2xl text-center">Closed Announcements</div>
      <div className='container'>
        <div className="row">
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                {closedJobsArr[0].title}
              </h2>
              <div className="card-actions justify-start">
                Open on: {closedJobsArr[0].openedDate} {" "}
                Closed on: {closedJobsArr[0].closedDate} {" "}
                Interviews completed: {closedJobsArr[0].completeInterviews}
              </div>
            </div>
          </div>
          <div className="card card-side bg-base-100 shadow-xl h-1/2 m-2">
            <div className="card-body">
              <h2 className="card-title">
                Job 2
              </h2>
              Open on 10/2/23
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}