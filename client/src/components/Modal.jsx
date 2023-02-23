// import React, { useState } from "react";

// export default function Modal() {
//   // probably will need to pass in props (id of hovered icon), but idk yet.
//   // use State
//   const [isHovering, setisHovering] = useState(false);

//   // handle mouse enter
//   function handleMouseEnter(e) {
//     console.log(e.target);
//     setisHovering(true);
//   }

//   return (
//     <div
//       className={`bg-amber-300 justify-center mt-10 mx-60 rounded-md py-10 px-20 flex-col text-center gap-5 ${
//         isHovering ? "flex" : "hidden"
//       }`}
//     >
//       <h2 className="font-semibold text-2xl">An All Natural Solution</h2>
//       <p className="font-medium">
//         Mauris in sagittis metus. Sed sodales odio id sem sodales, sed bibendum
//         risus ultrices. Maecenas magna velit, imperdiet vel dui id, eleifend
//         fermentum odio. Integer at ultricies mi, nec eleifend dolor. Aliquam
//         fermentum nunc at libero tempus, sed maximus erat placerat. Praesent in
//         arcu vitae neque cursus pulvinar.Lorem ipsum dolor sit amet, consectetur
//         adipiscing elit. Vestibulum laoreet a nisl sit amet facilisis.
//         Vestibulum id tellus felis. Vestibulum efficitur dignissim pulvinar. Sed
//         vulputate posuere ultrices. Integer blandit dui ut laoreet bibendum.
//         Maecenas tristique, diam a mollis euismod, nunc erat ultricies orci, vel
//         auctor ex nulla in erat. Ut imperdiet, purus a porttitor dignissim, nisi
//         neque ultrices eros, a commodo lectus lectus egestas leo. Ut quis neque
//         elit.
//       </p>
//     </div>
//   );
// }
