// import React, { Component } from "react";
// import ProjectDetailsModal from "./ProjectDetailsModal";

// class Projects extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       deps: {},
//       detailsModalShow: false,
//     };
//   }
  
//   render() {
//    let detailsModalShow = (data) => {
//       this.setState({ detailsModalShow: true, deps: data });
//     };
  
//     let detailsModalClose = () => this.setState({ detailsModalShow: false });

//     if (this.props.resumeProjects && this.props.resumeBasicInfo) {
//       var sectionName = this.props.resumeBasicInfo.section_name.projects;
//       var projects = this.props.resumeProjects.map(function (project) {
//         return (
//           <div
//             className="col-sm-12 col-md-6 col-lg-4"
//             key={project.title}
//             style={{ cursor: "pointer" }}
//           >
//             <span className="portfolio-item d-block">
//               <div className="foto" onClick={() => detailsModalShow(project)}>
//                 <div>
//                   <img
//                     src={project.images[0]}
//                     alt="projectImages"
//                     height="230"
//                     style={{marginBottom: 0, paddingBottom: 0, position: 'relative'}}
//                   />
//                   <span className="project-date">{project.startDate}</span>
//                   <br />
//                   <p className="project-title-settings mt-3">
//                     {project.title}
//                   </p>
//                 </div>
//               </div>
//             </span>
//           </div>
//         );
//       });
//     }

//     return (
//       <section id="portfolio">
//         <div className="col-md-12">
//           <h1 className="section-title" style={{ color: "black" }}>
//             <span>{sectionName}</span>
//           </h1>
//           <div className="col-md-12 mx-auto">
//             <div className="row mx-auto">{projects}</div>
//           </div>
//           {/* <ProjectDetailsModal
//             show={this.state.detailsModalShow}
//             onHide={detailsModalClose}
//             data={this.state.deps}
//           /> */}
//         </div>
//       </section>
//     );
//   }
// }

// export default Projects;


import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Projects = ({ resumeProjects, resumeBasicInfo }) => {
  const [modalData, setModalData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const handleDetailsShow = (data) => {
    setModalData(data);
    setShowModal(true);
  };

  const handleDetailsClose = () => setShowModal(false);

  if (!resumeProjects || !resumeBasicInfo) {
    return null;
  }

  const sectionName = resumeBasicInfo.section_name.projects;
  const projects = resumeProjects.map((project) => (
    <div
      className="col-sm-12 col-md-6 col-lg-4"
      key={project.title}
      style={{ cursor: "pointer" }}
    >
      <span className="portfolio-item d-block">
        <div
          className="foto"
          onClick={() => handleDetailsShow(project)}
        >
          <div>
            <img
              src={project.images[0]}
              alt="projectImages"
              height="230"
              style={{
                marginBottom: 0,
                paddingBottom: 0,
                position: "relative",
              }}
            />
            <span className="project-date">{project.startDate}</span>
            <br />
            <p className="project-title-settings mt-3">
              {project.title}
            </p>
          </div>
        </div>
      </span>
    </div>
  ));

  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1 className="section-title" style={{ color: "black" }}>
          <span>{sectionName}</span>
        </h1>
        <div className="col-md-12 mx-auto">
          <div className="row mx-auto">{projects}</div>
        </div>
        <ProjectDetailsModal
          show={showModal}
          onHide={handleDetailsClose}
          data={modalData}
        />
      </div>
    </section>
  );
};

export default Projects;
