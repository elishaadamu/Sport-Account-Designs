import { DietPlanCard, Nutrition }from '@/src/components';
import React from 'react'


export default function Home() {
  return (
    <main className="flex flex-col w-full gap-10 px-6 py-10 max-w-7xl">
      <DietPlanCard />
      <Nutrition />
    </main>
  );
}
