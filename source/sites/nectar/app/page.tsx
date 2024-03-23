import { HomeHero } from '@/components/HomeHero';
import { HomeIntroduction } from '@/components/HomeIntroduction';
import { HomeWhatIveDone } from '@/components/HomeWhatIveDone';
import { HomeWhatIKnow } from '@/components/Home_WhatIKnow';

export default function Home() {
  return (
    <main className="relative w-[100vw] flex flex-col justify-center items-center">
      <HomeHero />
      <HomeIntroduction />
      <HomeWhatIKnow />
      <HomeWhatIveDone />
    </main>
  );
}
