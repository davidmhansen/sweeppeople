import styles from "./Project.module.scss";

export default function Project({ project, index, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      key={index}
      className={styles.project}
      id={`p` + (index + 1)}
    >
      <div>
        <p>{project.project.toUpperCase()}</p>
      </div>
      <div>
        {project.services.map((service, index) => (
          <p key={index}>{service.toUpperCase()}</p>
        ))}
      </div>
      <div>
        <p>{project.client.toUpperCase()}</p>
      </div>
      <div>
        <p>{project.year.toString().toUpperCase()}</p>
      </div>
    </div>
  );
}
