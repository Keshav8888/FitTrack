import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="fw-bold">404</h1>
      <p className="text-muted">Page not found.</p>
      <Link className="btn btn-dark" to="/">
        Go Home
      </Link>
    </div>
  );
}
