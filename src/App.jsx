import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";
import { invitations } from "./data";
import InvitationPage from "./components/InvitationPage";

function InvitationWrapper() {
  const { id } = useParams();
  const data = invitations[id];

  if (!data)
    return <p className="text-center mt-20">초대장을 찾을 수 없습니다.</p>;

  return <InvitationPage data={data} />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<InvitationWrapper />} />
        <Route
          path="/"
          element={<p className="text-center mt-20">초대장 메인 페이지</p>}
        />
      </Routes>
    </Router>
  );
}

export default App;
