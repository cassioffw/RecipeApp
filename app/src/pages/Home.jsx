import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import { motion } from "framer-motion";

import React from "react";

const Home = () => {
	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{duration:1}}
			>
				<Veggie />
				<Popular />
			</motion.div>
		</div>
	);
};

export default Home;
