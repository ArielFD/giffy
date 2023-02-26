import React, { useEffect, useState, useRef, Suspense } from "react";

const TrendingSearches = React.lazy(() => import("./TrendingSearches"));

// export default function LazyTrending() {
//   const [show, setShow] = useState(false);
//   const elementRef = useRef();

//   useEffect(function () {
//     let observer;

//     const onchange = (entries, observer) => {
//       const el = entries[0];
//       if (el.isIntersecting) {
//         setShow(true);
//         observer.disconnect();
//       }
//     };

//     Promise.resolve(
//       typeof IntersectionObserver !== "undefined"
//         ? IntersectionObserver
//         : import("intersection-observer")
//     ).then(() => {
//       observer = new IntersectionObserver(onchange, {
//         rootMargin: "100px",
//       });
//       observer.observe(elementRef.current);
//     });

    

//     return () => observer.disconnect;
//   });

//   return (
//     <div ref={elementRef}>
//       <Suspense fallback={"Estoy cargando..."}>
//         {show ? <TrendingSearches /> : null}
//       </Suspense>
//     </div>
//   );
// }

export default function LazyTrending() {

  return (
    <div >
      <Suspense fallback={"Estoy cargando..."}>
         <TrendingSearches /> 
      </Suspense>
    </div>
  );
}
