// import React from 'react'


const Card = ({ children, bg = 'bg-gray-200' }) => {
    return (
        <div className={`flex flex-col items-start gap-2 ${bg} rounded-md p-4 shadow-lg`}>
          { children}
    </div>
  );
}

export default Card