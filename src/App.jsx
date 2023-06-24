import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import RootLayout from "./layout/RootLayout";
import PageNotFound from "./pages/PageNotFound";
import PostDetailsPage from "./pages/PostDetailsPage";

function App() {
  return (
    <div className="max-h-screen">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/posts/:id" element={<PostDetailsPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
