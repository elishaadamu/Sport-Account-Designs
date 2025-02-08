'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const Nutrition = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
            label: 'Nutrition Trends',
            data: [2500, 2000, 1500, 1000, 500, 0],
            borderColor: 'rgb(75, 192, 192)',
          }],
        },
      });
    }
  }, []);

  return (
    <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
      {/* Chart Section */}
      <div className="p-6 bg-white text-black rounded-lg shadow">
        {/* <h3 className="mb-4 text-xl font-medium">Nutrition Trends</h3> */}
        <canvas ref={chartRef} className="w-full h-72"></canvas>
      </div>

      {/* Calendar Section */}
      <div className="p-5 px-6 bg-white shadow-sm rounded-xl border1 dark:bg-dark2">
        <div className="md:divide-x md:divide-gray-200">
          <div>
            <div className="flex items-center">
              <h2 className="flex-auto text-sm font-semibold text-gray-900">January 2022</h2>
              <button className="-my-1.5 p-1.5 text-gray-400 hover:text-gray-500">
                <HiChevronLeft className="w-5 h-5" />
              </button>
              <button className="-my-1.5 -mr-1.5 ml-2 p-1.5 text-gray-400 hover:text-gray-500">
                <HiChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-gray-500">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={index}>{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 mt-2 text-sm">
              {[...Array(31)].map((_, i) => (
                <div key={i} className="py-2 border-t border-gray-200">
                  <button className="flex items-center justify-center w-8 h-8 mx-auto text-gray-900 rounded-full hover:bg-gray-200">
                    <time dateTime={`2022-01-${i + 1}`}>{i + 1}</time>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
