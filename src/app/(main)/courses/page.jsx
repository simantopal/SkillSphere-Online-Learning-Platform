"use client";
import { useState } from "react";
import courses from "@/lib/data";
import React from 'react';

const AllCoursePage = () => {
    const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {filtered.map((course) => (
          <div key={course.id} className="card bg-base-200 p-4">
            <h2>{course.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoursePage;