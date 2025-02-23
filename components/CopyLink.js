// import React, { useState } from "react";
// import { MdContentCopy } from "react-icons/md"; // Import the copy icon from react-icons
// import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"; 

// const CopyLink = () => {
//   const [copied, setCopied] = useState(false); 

//   const handleCopy = (link) => {
//     navigator.clipboard.writeText(link).then(() => {
//       setCopied(true); 
//       setTimeout(() => {
//         setCopied(false); 
//       }, 3000);
//     }).catch((err) => {
//       console.error("Failed to copy link: ", err); 
//     });
//   };

//   const link = "https://maps.app.goo.gl/bstZUd7zzep7jLF17"; 

//   return (
//     <div>
//       <a
//         href="#"
//         onClick={(e) => {
//           e.preventDefault(); 
//           handleCopy(link);  
//         }}
//         style={{ cursor: "pointer", display: "inline-flex", alignItems: "center" }}
//       >
//         <MdContentCopy style={{ marginRight: "8px" }} /> Copy Map Link
//       </a>

//       {copied && (
//         <div className="p-3 flex items-center gap-3 bg-[#edf7ed] rounded mt-3">
//           <IoCheckmarkDoneCircleOutline className="text-[#418944] text-[1.5rem]" />
//           <p className="text-[#418944] text-[1rem]">This is a success map. Link copied!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CopyLink;



import React, { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const CopyLink = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (link) => {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy link: ", err);
      });
  };

  const link = "https://maps.app.goo.gl/bstZUd7zzep7jLF17";

  return (
    <div className="relative">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleCopy(link);
        }}
        className="inline-flex items-center cursor-pointer text-blue-600 hover:text-blue-800"
      >
        <MdContentCopy className="mr-2" /> Copy Map Link
      </a>

      <AnimatePresence >
        {copied && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-5 right-5 p-4 mt-16 bg-green-100 text-green-700 rounded shadow-md flex items-center gap-2"
          >
            <IoCheckmarkDoneCircleOutline className="text-2xl" />
            <p>Link copied successfully!</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CopyLink;

