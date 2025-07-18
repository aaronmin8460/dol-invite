import { motion } from "framer-motion";
import Header from "./components/Header";
import DdayCounter from "./components/DdayCounter";
import Comment from "./components/Commnet";
import PhotoGallery from "./components/PhotoGallery";
import AccountInfo from "./components/AccountInfo";
import Footer from "./components/Footer";
import KakaoMap from "./components/KakaoMap";
import BirthdayCalendar from "./components/BirthdayCalendar";
import Location from "./components/Location";

function App() {
  const eventData = {
    name: "하준",
    date: "2025-08-10",
    photo: "/baby.png",
    account: {
      bank: "신한",
      number: "110497044856",
      holder: "민병일",
    },
    location: "부산 동구 조방로 14 3층 (현 뷔페디)",
  };

  const fadeInSlideUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4, duration: 0.8 },
    }),
  };

  return (
    <div className="bg-white w-full">
      <div className="max-w-md mx-auto text-center">
        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={0}>
          <PhotoGallery photo={eventData.photo} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={1}>
          <Header name={eventData.name} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={2}>
          <DdayCounter date={eventData.date} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={3}>
          <Comment name={eventData.name} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={4}>
          <BirthdayCalendar birthday={eventData.date} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={5}>
          <Location location={eventData.location} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={6}>
          <KakaoMap lat={35.1387281351032} lng={129.06345343296} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={7}>
          <AccountInfo account={eventData.account} />
        </motion.div>

        <motion.div
          variants={fadeInSlideUp}
          initial="hidden"
          animate="visible"
          custom={8}>
          <Footer />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
