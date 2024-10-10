import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0}}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Work & volunteer Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex-wrap lg:justify-center">
                        <motion.div
                             whileInView={{ opacity: 1, y: 0}}
                             initial={{ opacity: 0, y: -100 }}
                             transition={{ duration: 1 }}
                             className="w-full lg:w-1/4"
                        >
                        </motion.div>
                    </div>
                    )
                 )}
            </div>
        </div>
    )
}

export default Experience;