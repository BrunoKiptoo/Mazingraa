import React from 'react';

function ClimateJusticeComponent() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Become part of the solution</h2>
      <h3 className="text-lg font-medium mb-8">Support our fight for climate justice.</h3>
      <div className="relative rounded-lg overflow-hidden shadow-lg">
        <div className="aspect-w-16 aspect-h-9">
          <video 
            src="https://www.w3schools.com/html/mov_bbb.mp4" 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline 
            type="video/mp4"
          />
        </div>
      </div>
    </div>
  );
}

export default ClimateJusticeComponent;


// function VideoComponent() {
//     return (
//       <div className="p-6">
//         <h2 className="text-2xl font-bold mb-4">Check out this video!</h2>
//         <div className="aspect-w-16 aspect-h-9">
//           <video width="320" height="240" controls>
//             <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     );
//   }
  
//   export default VideoComponent;
  
  
