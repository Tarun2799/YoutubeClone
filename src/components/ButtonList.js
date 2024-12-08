
// import React, {useRef} from 'react';
// import Button from './Button';
// import "../index.css";

// const ButtonList = () => {

//   const list = [
//     "All",
//     "Trending",
//     "Music",
//     "Gaming", 
//     "News", 
//     "Sport",
//     "Learning",
//     "Lifestyle",
//     "Comedy",
//     "Entertainment",
//     "Live",
//     "Travel",  
//     "Movies",
//     "Gaming",
//     "standup-comedy",
//     "coding",
//     "cooking",
//     "programming",
//     "computer science"
//     ];

//     const boxRef = useRef(null);
//     const prev = ()=>{
//       const width = boxRef.current.clientWidth;
//       boxRef.current.scrollLeft -= width;
//     }

//     const next = ()=>{
//       const width = boxRef.current.clientWidth;
//       boxRef.current.scrollLeft += width;
//     }


//   return (
//     <div ref={boxRef  } className='relative flex w-full px-12 py-4 gap-3 whitespace-nowrap overflow-hidden btnList'>
//       <button className='absolute left-0  hover:bg-gray-200 px-3 py-1 rounded-full' onClick={prev}>{"<"}</button>
//       <button className='absolute right-0 hover:bg-gray-200 px-3 py-1 rounded-full bg-white' onClick={next}>{">"}</button>
//       {list.map((item,index) => <Button className="" name={item} key={index}/>)}
//     </div>
//   )
// }





// export default ButtonList


import React, { useRef, useState } from 'react';
import Button from './Button';
import "../index.css";
import { useDispatch } from 'react-redux';
import { setCategory } from '../utils/appSlice';




const ButtonList = () => {

  const [buttonActive, setButtonActive] = useState("All");
  const dispatch = useDispatch();

  const list = [
    "All", "Trending", "Music", "Gaming", "News", "Sport", "Learning",
    "Lifestyle", "Comedy", "Entertainment", "Live", "Travel", "Movies",
    "Standup-comedy", "Coding", "Cooking", "Programming", "Computer science","New to you"
  ];

  const boxRef = useRef(null);

  const videoByTagname = (tagname) => {
    if(buttonActive !== tagname){
      setButtonActive(tagname);
      dispatch(setCategory(tagname));
    }
    console.log(tagname);
  };

  // Scroll left function
  const scrollLeft = () => {
    if (boxRef.current) {
      boxRef.current.scrollBy({
        left: -200, // Adjust this number for desired scroll amount
        behavior: 'smooth'
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (boxRef.current) {
      boxRef.current.scrollBy({
        left: 200, // Adjust this number for desired scroll amount
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative flex items-center w-full px-5 py-5 gap-3">
      {/* Left Scroll Button */}
      <button
        className="hover:bg-gray-200 px-3 py-1 rounded-full font-semibold"
        onClick={scrollLeft}
      >
        {"<"}
      </button>

      {/* Scrollable Container */}
      <div
        ref={boxRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap w-full"
      >
        {list.map((item, index) => (
          // <Button className="bg-gray-300" name={item} key={index} onClick={() => videoByTagname(item)} />
          <div key={index}>
            <button className={`px-4 py-1 ${buttonActive === item ? "bg-black text-white" :  "bg-gray-200" } rounded-lg`} onClick={() => videoByTagname(item)} >{item}</button>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        className="hover:bg-gray-200 px-3 py-1 rounded-full font-semibold"
        onClick={scrollRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default ButtonList;
