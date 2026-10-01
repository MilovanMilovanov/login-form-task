import { useNavigate } from "react-router-dom";
import { LoginForm } from "../components";
import { useState } from "react";

export default function HomePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginSuccess = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://swapi.py4e.com/api/people");

      if (!response.ok) {
        throw new Error("Възникна грешка при зареждане на данните");
      }

      const data = await response.json();

      const fetchedData = data.results;

      navigate("/table", {
        state: { apiData: fetchedData },
      });
    } catch (error) {
      console.error("Error..:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      {isLoading ? (
        <div>Loading Star Wars data...</div>
      ) : (
        <LoginForm action={handleLoginSuccess} />
      )}
    </main>
  );
}
