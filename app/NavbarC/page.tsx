// "use client";

// import Link from 'next/link';
// import { useState, useEffect, useRef } from 'react';
// import { FaChevronDown } from 'react-icons/fa';

// const Navbar = () => {
//   const [dropdowns, setDropdowns] = useState({
//     services: false,
//     forex: false,
//     comex: false,
//     combo: false,
//     customerCare: false,
//     contactUs: false,
//   });

//   const servicesRef = useRef(null); 

//   // Function to toggle the dropdown visibility
//   const toggleDropdown = (name: string) => {
//     setDropdowns((prev:any) => {
//       if (name === 'services') {
//         // Toggle services dropdown when clicked
//         return {
//           ...prev,
//           services: !prev.services,
//           forex: false,
//           comex: false,
//           combo: false,
//         };
//       } else {
//         // Close all dropdowns except the clicked one
//         return {
//           services: prev.services,
//           forex: name === 'forex' ? !prev.forex : false,
//           comex: name === 'comex' ? !prev.comex : false,
//           combo: name === 'combo' ? !prev.combo : false,
//         };
//       }
//     });
//   };

//   const handleServicesHover = () => {
//     setDropdowns((prev) => ({
//       ...prev,
//       services: true,
//     }));
//   };

//   const handleServicesLeave = () => {
//     if (!dropdowns.forex && !dropdowns.comex && !dropdowns.combo) {
//       setDropdowns((prev) => ({
//         ...prev,
//         services: false,
//       }));
//     }
//   };

//   const handleDropdownLeave = (name: string) => {
//     setDropdowns((prev) => ({
//       ...prev,
//       [name]: false,
//     }));
//   };

//   // Detect clicks outside the services section
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
//         setDropdowns((prev) => ({
//           ...prev,
//           services: false,
//           forex: false,
//           comex: false,
//           combo: false,
//         }));
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <nav className="bg-green-700 shadow-md">
//       <div className="container mx-auto px-4 flex items-center justify-between py-3">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
//           <div>
//             <h1 className="text-xl font-bold text-blue-900">SIGNAL EXPERT GLOBAL</h1>
//             <p className="text-sm text-red-500">Passion for Excellence</p>
//           </div>
//         </div>

//         {/* Links */}
//         <div className="hidden lg:flex items-center space-x-6">
//           <Link href="/" className="text-white font-semibold hover:bg-green-500 hover:rounded-full hover:py-2 px-4 hover:transition-all duration-300">Home</Link>
//           <Link href="/About" className="text-white font-semibold hover:bg-green-500 hover:rounded-full hover:py-2 px-4 hover:transition-all duration-300">About Us</Link>

//           {/* Services Dropdown */}
//           <div
//             ref={servicesRef}
//             className="relative"
//             onMouseEnter={handleServicesHover}
//             onMouseMove={handleServicesHover}
//             // onMouseLeave={handleServicesLeave}
//           >
//             <button
//               onClick={() => toggleDropdown('services')}
//               className="text-white font-semibold hover:bg-green-500 hover:rounded-full hover:py-2 px-4 hover:transition-all duration-300 flex items-center space-x-1"
//             >
//               <span>Services</span> <FaChevronDown />
//             </button>
//             {(dropdowns.services || dropdowns.forex || dropdowns.comex || dropdowns.combo) && (
//               <div className="absolute bg-white shadow-md rounded-md mt-2 w-48">
//                 {/* Forex Plan */}
//                 <div
//                   className="relative"
//                 //   onMouseEnter={() => setDropdowns((prev) => ({ ...prev, forex: true }))}
//                 //   onMouseLeave={() => handleDropdownLeave('forex')}
//                 >
//                   <button
//                     onClick={() => toggleDropdown('forex')}
//                     className=" px-4 py-2 text-gray-600 hover:bg-blue-100 flex items-center justify-between w-full text-left"
//                   >
//                     Forex Plan <FaChevronDown />
//                   </button>
//                   {dropdowns.forex && (
//                     <div className="absolute left-full top-0 bg-white shadow-md rounded-md mt-0 ml-2 w-48">
//                       <Link href="/BasicForex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Basic Forex Plan</Link>
//                       <Link href="/PremiumForex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Premium Forex Plan</Link>
//                       <Link href="/EliteForex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Elite Forex Plan</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Comex Plan */}
//                 <div
//                   className="relative"
//                 //   onMouseEnter={() => setDropdowns((prev) => ({ ...prev, comex: true }))}
//                 //   onMouseLeave={() => handleDropdownLeave('comex')}
//                 >
//                   <button
//                     onClick={() => toggleDropdown('comex')}
//                     className=" px-4 py-2 text-gray-600 hover:bg-blue-100 flex items-center justify-between w-full text-left"
//                   >
//                     Comex Plan <FaChevronDown />
//                   </button>
//                   {dropdowns.comex && (
//                     <div className="absolute left-full top-0 bg-white shadow-md rounded-md mt-0 ml-2 w-48">
//                       <Link href="/BasicComex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Basic Comex Plan</Link>
//                       <Link href="/PremiumComex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Premium Comex Plan</Link>
//                       <Link href="/EliteComex" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Elite Comex Plan</Link>
//                     </div>
//                   )}
//                 </div>

//                 {/* Combo Plan */}
//                 <div
//                   className="relative"
//                 //   onMouseEnter={() => setDropdowns((prev) => ({ ...prev, combo: true }))}
//                 //   onMouseLeave={() => handleDropdownLeave('combo')}
//                 >
//                   <button
//                     onClick={() => toggleDropdown('combo')}
//                     className=" px-4 py-2 text-gray-600 hover:bg-blue-100 flex items-center justify-between w-full text-left"
//                   >
//                     Combo Plan <FaChevronDown />
//                   </button>
//                   {dropdowns.combo && (
//                     <div className="absolute left-full top-0 bg-white shadow-md rounded-md mt-0 ml-2 w-48">
//                       <Link href="/BasicCombo" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Basic Combo Plan</Link>
//                       <Link href="/PremiumCombo" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Premium Combo Plan</Link>
//                       <Link href="/EliteCombo" className="block px-4 py-2 text-gray-600 hover:bg-blue-100">Elite Combo Plan</Link>
//                     </div>
//                   )}
//                 </div>

//               </div>
//             )}
//           </div>

//           {/* Contact Us Dropdown */}
//           <Link href="/ContactUS" className="text-white font-semibold hover:bg-green-500 hover:rounded-full hover:py-2 px-4 hover:transition-all duration-300">Blogs</Link>

//           {/* Blogs */}
//           <Link href="/Blogs" className="text-white font-semibold hover:bg-green-500 hover:rounded-full hover:py-2 px-4 hover:transition-all duration-300">Blogs</Link>

//           {/* Payment Button */}
//           <button className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">Payment</button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
