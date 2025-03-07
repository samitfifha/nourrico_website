import { motion } from 'framer-motion';
import youssef from './../assets/images/team/youssef.jpg';
import sami from './../assets/images/team/sami.jpeg';
import bechir from './../assets/images/team/bichou.jpeg';

const team = [
  {
    name: "Med Youssef Essghaier",
    role: "CEO",
    image: youssef
  },
  {
    name: "Sami Tfifha",
    role: "CTO",
    image: sami
  },
  {
    name: "Med Bechir BenAbdelghaffar",
    role: "Lead Designer",
    image: bechir
  },
];

export default function Team() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Meet Our Team</h2>
          <p className="text-lg text-gray-300">The brilliant minds behind our success</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative mb-6 mx-auto w-48 h-48 rounded-full overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}