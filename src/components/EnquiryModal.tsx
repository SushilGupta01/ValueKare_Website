// import { X } from "lucide-react";
// import { Button } from "./ui/button";
// import { useState } from "react";

// interface EnquiryModalProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// export function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   if (!isOpen) return null;

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent.");
//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[999] animate-fadeIn">
//       <div className="
//           bg-white 
//           rounded-2xl 
//           shadow-xl 
//           w-full 
//           max-w-sm 
//           p-6 
//           relative 
//           animate-scaleIn 
//           border border-gray-200
//         "
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-3 right-3 text-gray-500 hover:text-black transition"
//           onClick={onClose}
//         >
//           <X size={20} />
//         </button>

//         {/* Header */}
//         <h2 className="text-2xl font-semibold mb-2 text-center">Enquire Now</h2>
//         <p className="text-sm text-gray-500 text-center mb-4">
//           Fill the details below and we’ll reach out to you.
//         </p>

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* Full Name */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your name"
//               className="
//                 w-full border p-2 rounded-md 
//                 focus:ring-2 focus:ring-primary/40 
//                 focus:border-primary transition
//               "
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               placeholder="your@email.com"
//               className="
//                 w-full border p-2 rounded-md 
//                 focus:ring-2 focus:ring-primary/40 
//                 focus:border-primary transition
//               "
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               placeholder="+91 XXXXXXXXXX"
//               className="
//                 w-full border p-2 rounded-md 
//                 focus:ring-2 focus:ring-primary/40 
//                 focus:border-primary transition
//               "
//               onChange={handleChange}
//               required
//             />
//           </div>

//           {/* Message */}
//           <div>
//             <label className="block mb-1 text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               name="message"
//               placeholder="Your message"
//               className="
//                 w-full border p-2 rounded-md 
//                 h-24 
//                 focus:ring-2 focus:ring-primary/40 
//                 focus:border-primary transition
//               "
//               onChange={handleChange}
//               required
//             ></textarea>
//           </div>

//           {/* Submit */}
//           <Button type="submit" className="w-full text-base py-3 rounded-lg">
//             Send Message
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }
