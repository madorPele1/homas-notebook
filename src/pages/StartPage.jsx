import { useNavigate } from "react-router-dom";

function StartPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Start Page</h1>
      <button onClick={() => navigate("/intro")}>לחצו לכניסה</button>
    </div>
  );
}
export default StartPage;
