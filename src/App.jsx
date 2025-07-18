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

  return (
    <div className="bg-white w-full">
      <div className="max-w-md mx-auto text-center">
        <Header name={eventData.name} />
        <PhotoGallery photo={eventData.photo} />
        <DdayCounter date={eventData.date} />
        <Comment name={eventData.name} />
        <BirthdayCalendar birthday={eventData.date} />
        <Location location={eventData.location} />
        <KakaoMap lat={37.4979} lng={127.0276} />
        <AccountInfo account={eventData.account} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
