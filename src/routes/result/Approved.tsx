const Approved = ({ max_amount }: { max_amount?: number }) => {
  return (
    <div>
      <h2>Approved</h2>
      <p>Max Amount: {max_amount !== undefined ? max_amount : "N/A"}</p>
    </div>
  );
};

export default Approved;
