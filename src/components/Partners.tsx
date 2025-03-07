import { motion } from 'framer-motion';

const partners = [
  { name: "Partner 1", logo: "https://firebasestorage.googleapis.com/v0/b/nourrico-10af1.appspot.com/o/stores%2Flogos%2F061a8b31-1ef9-417d-b9d2-307543247041-Image17.png?alt=media&token=9dd088c8-43cb-4707-bb74-5da1b42fc31f" },
  { name: "Partner 2", logo: "https://firebasestorage.googleapis.com/v0/b/nourrico-10af1.appspot.com/o/stores%2Flogos%2Fcb0165e6-e2a6-4a42-b36b-5abfd6f08e55-Image4.jpg?alt=media&token=8ec968e1-c024-4690-bfc7-18c1bae49b95" },
  { name: "Partner 3", logo: "https://firebasestorage.googleapis.com/v0/b/nourrico-10af1.appspot.com/o/stores%2Flogos%2Febdf128e-cce7-419d-a1c4-154907fc0aaf-Image13.jpg?alt=media&token=58fcb22e-93e9-4b1e-b7d3-8bbe170d07d2" },
  { name: "Partner 4", logo: "https://firebasestorage.googleapis.com/v0/b/nourrico-10af1.appspot.com/o/stores%2Flogos%2Fe4c54e8e-fcc9-4b90-9d91-7748dc46cb72-Image1.jpg?alt=media&token=870f4a39-4216-49d2-b27c-6f90f2dc0bd3" },
];

export default function Partners() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Our Partners
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-8 rounded-xl shadow-lg"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-full h-24 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}