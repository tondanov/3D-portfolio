import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden xl:justify-center ">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex[0.75] bg-black-100 p-8 rounded-2xl min-w-[520px]"
      >
        <p className={styles.sectionSubText}>Kontaktuj mě</p>
        <h3 className={styles.sectionHeadText}>Kontakt.</h3>
        
        <div className="flex justify-center">
          <a 
          href="mailto:toneknovotny@gmail.com"
          className=" violet-gradient p-4 rounded-2xl shadow-md w-fit"
          target="_blank"
          >
            E-mail
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")