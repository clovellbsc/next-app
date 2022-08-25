const Flights = () => {
  return (
    <div>
      <div>
        <p>outbound</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "75%",
          }}
        >
          <div>date</div>
          <div>time</div>
          <div>flight number</div>
          <div>destination</div>
          <div>departure location</div>
        </div>
      </div>
    </div>
  );
};

export default Flights;
