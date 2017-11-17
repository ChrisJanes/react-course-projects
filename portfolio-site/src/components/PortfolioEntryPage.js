import React from 'react';

const PortfolioEntryPage = (props) => {
  return (
    <div>
      You are viewing portfolio entry: {props.match.params.id}.
    </div>
  );
};

export default PortfolioEntryPage;
