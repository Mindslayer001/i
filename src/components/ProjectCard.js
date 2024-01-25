import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl}) => {
  return (
    <Col size={12} sm={12} md={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <a href={projectUrl} className="proj-imgbx" style={{ color: 'white', justifyContent: 'center', alignContent: 'center' }}>
    <div className="proj-imgbx">
      <img src={imgUrl} alt="title" />
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  </a>
</Col>

  )
}
