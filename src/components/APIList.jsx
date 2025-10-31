import React from "react";
import Button from "./Button";
import { useState, useEffect, useRef } from "react";

const PAGE_SIZE = 10;

const APIList = () => {
    const [item, setItem] = useState([]);
    const [displayed, setDisplayed] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const totalref = useRef(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const res = await fetch("https://api.publicapis.org/entries");
                if (!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                totalref.current = data.entries.length;
                setItem(data.entries);
                setDisplayed(data.entries.slice(0, PAGE_SIZE));
                setPage(1);
            } catch (err) {
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filtered = item.filter((it) =>
            it.API?.toLowerCase().includes(query.toLowerCase()) ||
            it.Description?.toLowerCase().includes(query.toLowerCase())
        );
        const start = (page - 1) * PAGE_SIZE;
        const next = filtered.slice(start, start + PAGE_SIZE);
        setDisplayed(next);
    }, [item, page, query]);

    const totalPages = Math.ceil(
        item.filter((it) =>
            it.API?.toLowerCase().includes(query.toLowerCase()) ||
            it.Description?.toLowerCase().includes(query.toLowerCase())
        ).length / PAGE_SIZE
    );

    if (loading) {
        return <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">Loading...</div>;
    }

    if (error) {
        return <div className="p-6 bg-red-100 text-red-700 rounded">{error}</div>;
    }

    return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">Public APIs Explorer</h2>

      <div className="mb-4 flex gap-2">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search APIs..."
          className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
        />
        <Button variant="secondary" onClick={() => { setQuery(''); setPage(1); }}>
          Clear
        </Button>
      </div>

      <ul className="space-y-3">
        {displayed.map((api, index) => (
          <li key={index} className="p-3 border rounded hover:bg-gray-50 dark:hover:bg-gray-700">
            <h3 className="font-semibold">{api.API}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{api.Description}</p>
            <div className="flex gap-2 mt-2 text-xs">
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded">{api.Category}</span>
              {api.Auth && <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900 rounded">Auth: {api.Auth}</span>}
              {api.HTTPS && <span className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded">HTTPS</span>}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Page {page} of {totalPages || 1}
        </p>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page <= 1}>
            Prev
          </Button>
          <Button variant="primary" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page >= totalPages}>
            Next
          </Button>
        </div>
      </div>
    </div>
    );
};

export default APIList;