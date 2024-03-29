import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const ProjectCard = ({ index, name, description, tags, image, source_code_link, source_live_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-[360px]"
      >
        <div className="relative w-full h-[230px]">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {source_live_link && <div
              onClick={() => window.open(source_live_link, "_blank")}
              className=" green-pink-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img 
                src={live}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>}
            

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className=" black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-1"
            >
              <img 
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Práce</p>
        <h2 className={styles.sectionHeadText}>Projekty</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          V této sekci si můžete prohlédnout moje projkety, které jsem za dobu, co se učím udělal. Každý projekt je popsán a má take odkaz na kód na githubu a některé dokonce odkaz na živé demo.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "work");