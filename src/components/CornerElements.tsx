const CornerElements = () => {
    return (
      <>
        <div className="absolute top-[-4] left-[-4] w-6 h-6 border-l-2 border-t-2 border-primary "></div>
        <div className="absolute top-[-4] right-[-4] w-6 h-6 border-r-2 border-t-2 border-primary"></div>
        <div className="absolute bottom-[-4] left-[-4] w-6 h-6 border-l-2 border-b-2 border-primary"></div>
        <div className="absolute bottom-[-4] right-[-4] w-6 h-6 border-r-2 border-b-2 border-primary"></div>
      </>
    );
  };
  export default CornerElements;