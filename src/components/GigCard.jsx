import React from "react";

const GigCard = ({ gig, saveGig }) => {
  return (
    <div className="card">
      <h3>{gig.title}</h3>
      <p><strong>Company:</strong> {gig.company}</p>
      <p><strong>Location:</strong> {gig.location}</p>
      <p><strong>Payment:</strong> {gig.payment}</p>
      <div>
        <button className="btn btn-primary">View Details</button>
        <button className="btn" onClick={() => saveGig(gig)}>Save</button>
      </div>
    </div>
  );
};

export default GigCard;
