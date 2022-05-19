import Login from "../../pages/login/index.jsx";


export default function StaticContentHolder({ children }) {
    return (
      <main>
        {localStorage.getItem("token") === null ? (
          <Login />
        ) : (
          <>{children}</>
        )}

      </main>
    );
  }