import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";

const PAGE_SIZE = 10;

export default function ApiDataList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  useEffect(() => {
    setPage(1); // Reset to first page on search
  }, [search]);

  return (
    <div>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 items-center justify-between">
        <h2 className="text-2xl font-bold">API Data (Posts)</h2>
        <input
          className="px-3 py-2 rounded border border-gray-300 dark:bg-gray-900 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {loading && <div className="text-center text-gray-500">Loading...</div>}
      {error && <div className="text-center text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {paginated.length === 0 && (
              <div className="col-span-full text-center text-gray-400">No posts found.</div>
            )}
            {paginated.map((post) => (
              <Card key={post.id} className="h-full">
                <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{post.body}</p>
                <div className="text-xs text-gray-400">Post ID: {post.id}</div>
              </Card>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button variant="secondary" onClick={handlePrev} disabled={page === 1}>
              Prev
            </Button>
            <span className="text-gray-600 dark:text-gray-300">
              Page {page} of {totalPages}
            </span>
            <Button variant="secondary" onClick={handleNext} disabled={page === totalPages || totalPages === 0}>
              Next
            </Button>
          </div>
        </>
      )}
    </div>
  );
} 