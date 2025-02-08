"use client";

import Image from "next/image";
import Exercise from "@/public/images/nutrition-blogs/r-bicycle.png";

const DietPlanCard = () => {
  const nutritionData = [
    { label: "Calories", value: 100, color: "text-green-500" },
    { label: "Carbs", value: 60, color: "text-blue-500" },
    { label: "Proteins", value: 55, color: "text-red-500" },
    { label: "Fats", value: 35, color: "text-orange-500" },
  ];

  return (
    <div className="bg-[#142129] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center lg:items-start overflow-hidden relative -z-50">
      {/* Left Section */}
      <div className="flex flex-col w-full gap-6 lg:gap-8 lg:w-auto">
        {/* Heading */}
        <div className="text-center lg:text-left">
          <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
            Hello Kim,
          </h2>
          <p className="text-sm font-normal text-white lg:text-base">
            Your diet plan for Today
          </p>
        </div>

        {/* Progress Rings */}
        <div className="flex flex-wrap justify-center gap-6 lg:justify-start lg:gap-8">
          {nutritionData.map(({ label, value, color }, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24">
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <circle
                    className="text-gray-700"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                  <circle
                    className={color}
                    strokeWidth="3"
                    strokeDasharray={`${value}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="16"
                    cx="18"
                    cy="18"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <span className="text-sm font-bold">{value}%</span>
                  <span className="text-xs">{label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <div className="relative flex-1 mt-6 lg:mt-0">
        <Image
          className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain -top-10 lg:-top-14 absolute right-0"
          src={Exercise}
          // src="/assets/images/nutrition-blogs/rb_52431.png"
          alt="Background Illustration"
          width={600}
          height={400}
        />
      </div>
    </div>
  );
};

export default DietPlanCard;
