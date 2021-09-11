import styles from "./About.module.css";

const About = ({ theme }) => {
  const theme_name = theme === "light" ? "about-light" : "about-dark";
  return (
    <>
      <div className={styles["about-container"]}>
        <img src="https://i.imgur.com/rYrrSjL.gif" alt="fire gif" />
        <div className={`${styles["about"]} ${styles[theme_name]}`}>
          <p>
            Ever wondered what it would be like if we were still stuck in the
            early 2000s? Well, wonder no more since we have fullfilled your
            wish. This generator allows you to enter the text, headings and
            images of your choice, and then renders a page created from them
            which looks as if it was taken straight out of the 2000s.
          </p>
          <p>
            Don't try to inhibit your nostalgia for a time which was clearly
            better. Sit back as we travel to the era you thought was forgotten.
            Its going to be a bumpy ride but we think you'd enjoy it
            nonetheless.
          </p>
        </div>
      </div>
      <a href="/" className={styles["back"]}>
        Click here to go back
      </a>
    </>
  );
};

export default About;
