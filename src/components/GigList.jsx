import React, { useState } from "react";
import GigCard from "./GigCard";
import gigsData from "../data";
import ReactPaginate from "react-paginate";
// import "./GigList.css";

const GigList = ({ saveGig }) => {
  const [gigs, setGigs] = useState(gigsData);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(0);
  const gigsPerPage = 6;

  // ✅ Filter Gigs by Search Term
  const filteredGigs = gigs.filter((gig) =>
    gig.title.toLowerCase().includes(search.toLowerCase()) ||
    gig.company.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Sort Gigs by Payment
  const sortedGigs = [...filteredGigs].sort((a, b) => {
    const paymentA = parseInt(a.payment.replace(/[^0-9]/g, ""));
    const paymentB = parseInt(b.payment.replace(/[^0-9]/g, ""));
    return sortOrder === "asc" ? paymentA - paymentB : paymentB - paymentA;
  });

  // ✅ Pagination Logic
  const offset = currentPage * gigsPerPage;
  const currentGigs = sortedGigs.slice(offset, offset + gigsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="gig-container">
      <div className="filter-container">
        {/* 🎯 Search Bar */}
        <input
          type="text"
          placeholder="Search gigs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />

        {/* 🔽 Sorting Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="sort-dropdown"
        >
          <option value="asc">Sort by Payment (Low to High)</option>
          <option value="desc">Sort by Payment (High to Low)</option>
        </select>
      </div>

      <div className="container">
        {currentGigs.map((gig) => (
          <GigCard key={gig.id} gig={gig} saveGig={saveGig} />
        ))}
      </div>

      {/* 📄 Pagination */}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        breakLabel={"..."}
        pageCount={Math.ceil(sortedGigs.length / gigsPerPage)}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default GigList;
