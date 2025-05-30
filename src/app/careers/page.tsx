'use client';

import Link from 'next/link';
import { BriefcaseIcon } from 'lucide-react';

const jobs = [
  {
    title: 'German to English Linguist',
    slug: 'german-to-english-linguist',
    type: 'Contract (6Months, extendable)',
    location: 'Pune',
    company: 'Rian.io',
  },
  {
    title: 'Project Co-ordinator',
    slug: 'project-co-ordinator',
    type: 'Fulltime',
    location: 'Pune',
    company: 'Rian.io',
  },
];

export default function CareersPage() {
  return (
    <div className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12 justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-light text-white mb-10 mt-4 text-center">Open Positions</h1>
      <div className="flex flex-col gap-6 w-full ">
        {jobs.map(job => (
          <Link
            key={job.slug}
            href={`/careers/${job.slug}`}
            className="block rounded-2xl bg-[#232323] border border-[#333] px-6 py-6 md:py-8 shadow-md hover:shadow-lg transition-all duration-200 group relative"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-light text-white mb-2">{job.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-[#A1A1A1] text-sm md:text-base">
                  <span className="flex items-center gap-1"><BriefcaseIcon className="w-4 h-4" /> {job.company}</span>
                  <span className="flex items-center gap-1">{job.type}</span>
                  <span className="flex items-center gap-1">{job.location}</span>
                </div>
              </div>
              <button className="bg-white text-[#232323] rounded-md px-6 py-2 font-medium text-base shadow group-hover:scale-105 transition-transform">Apply Now</button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 