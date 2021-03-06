import React from "react";

function RepoDetails({ details, loading, username }) {
  if (loading) {
    return <h1 className="loader">Loading...</h1>;
  } else {
    return (
      <div className="repo-details-container">
        <div className="details-row">
          <label className="label">Repository Name: </label>
          <span className="value">{details.name}</span>
        </div>
        <div className="details-row">
          <label className="label">Fork Count: </label>
          <span className="value">{details.forks_count}</span>
        </div>
        <div className="details-row">
          <label className="label">Language: </label>
          <span className="value">{details.language}</span>
        </div>
        <div className="details-row">
          <label className="label">Stars: </label>
          <span className="value">{details.stargazers_count}</span>
        </div>
      </div>
    );
  }
}

export default RepoDetails;
