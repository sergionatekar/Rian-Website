'use client';

import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, MapPin } from 'lucide-react';

const jobs = [
  {
    title: 'German to English Linguist',
    slug: 'german-to-english-linguist',
    category: 'Translation & Localization',
    posted: 'Apr 2025',
    location: 'Pune',
    experience: '1-2 years',
    type: 'Contract (6 months, extendable)',
    skills: [
      'B2.2 Level and above or any other masters degree with language proficiency certification.',
      'Basic understanding of technical terminologies used in automotive industry.',
      'Basic formatting skills in MS Word and Excel.',
      'Minimum 1-2 years experience.',
    ],
    description: `We are seeking a skilled German to English Translator with at least one to two years of experience in the automotive industry to provide on-site translation services for a time span of 6 months. The ideal candidate will be responsible for accurately translating technical documents, reports while maintaining accuracy and context of terminologies used in automotive domain. The job will be on contract basis. 6 month contract will be offered which might be extendable based on client requirement.`,
    responsibilities: [
      'Translate technical documents from German to English.',
      'Ensure accuracy and consistency in translations, especially in technical terminology related to the automotive industry.',
      'Collaborate with engineers, project managers, and other stakeholders to ensure clear communication, if needed.',
      'Assist in reviewing and proofreading translated materials for quality assurance.',
      'Maintain confidentiality of sensitive company information.',
    ],
    additional: [
      { label: 'Designation', value: 'German to English Linguist' },
      { label: 'Positions', value: '3' },
      { label: 'Industry Type', value: 'Localization' },
      { label: 'Functional Area', value: 'Translation & Localization' },
      { label: 'Contact', value: 'careers@rian.io' },
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeLTQRVQzaXUcg9xyyTOHuM9c6kJyjovCtOOabvCuC4Dq2bnA/viewform',
  },
  {
    title: 'Project Coordinator',
    slug: 'project-co-ordinator',
    category: 'Project Management',
    posted: 'Feb 2025',
    location: 'Pune',
    experience: '0-1 years',
    type: 'Full Time',
    skills: [
      '0-1 years experience in project management',
      'Experience in Translation & Localization (advantage)',
      'Strong written and verbal communication skills',
      'Proven success working with all levels of management',
      'Strong presentation skills',
    ],
    description: `We\'re searching for a highly-skilled project manager to contribute to Rian\'s growth and help us maintain our position as an innovative company. As a Project Manager, you will be the driving force behind the success of every key project or program. You will align projects with business goals, construct detailed work plans, manage teams, achieve milestones, and communicate results across a stakeholder audience.`,
    responsibilities: [
      'Lead projects from requirements definition through deployment, including risk mitigation.',
      'Coordinate internal and external resources to ensure projects remain within scope, schedule, and budget.',
      'Analyze project progress and adapt scope, timelines, and costs as necessary.',
      'Establish and maintain relationships with client stakeholders for daily updates.',
      'Develop processes to manage project scope and maintain quality standards.',
      'Collaborate with third-party vendors and researchers.',
      'Monitor and assign resources to maximize efficiency and deliverables.',
      'Report project outcomes and risks to management channels, escalating issues as needed.',
    ],
    additional: [
      { label: 'Designation', value: 'Project Coordinator' },
      { label: 'Positions', value: '2' },
      { label: 'Industry Type', value: 'Language/Localization' },
      { label: 'Functional Area', value: 'Project Management' },
      { label: 'Contact', value: 'careers@rian.io' },
    ],
    applyUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeLTQRVQzaXUcg9xyyTOHuM9c6kJyjovCtOOabvCuC4Dq2bnA/viewform',
  },
];

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;
  const job = jobs.find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#191919] text-white">
        <p className="text-2xl mb-4">Job not found.</p>
        <Link href="/careers" className="text-[#67F5C8] underline">Back to Careers</Link>
      </div>
    );
  }

  return (
    <div className="w-full h-full max-w-[1720px] mx-auto px-4 py-4 lg:px-12 lg:py-12 flex flex-col items-center justify-center">
      <div className="w-full mb-8 flex items-center">
        <button
          onClick={() => router.push('/careers')}
          className="flex items-center gap-2 text-[#A1A1A1] hover:text-white transition text-base"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
      </div>
      <div className="w-full bg-[#232323] border border-[#333] rounded-3xl px-8 py-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.18)] backdrop-blur-md">
        <h1 className="text-2xl md:text-3xl font-light text-white mb-1 tracking-tight">{job.title}</h1>
        <div className="text-[#A1A1A1] text-base mb-2 font-light">{job.category}</div>
        <div className="flex flex-wrap items-center gap-4 text-[#A1A1A1] text-sm mb-8">
          <span>Posted on {job.posted}</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Experience Required</div>
            <div className="text-white text-lg font-light mb-6">{job.experience}</div>
            <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Job Type</div>
            <div className="text-white text-lg font-light">{job.type}</div>
          </div>
          <div>
            <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Required Skills</div>
            <ul className="list-disc list-inside text-white text-base font-light space-y-1">
              {job.skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </div>
        </div>
        <div className="mb-10 border-t border-[#333] pt-8">
          <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Job Description</div>
          <div className="text-[#D1D5DB] text-base font-light mb-6">{job.description}</div>
          <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Roles & Responsibilities</div>
          <ul className="list-disc list-inside text-white text-base font-light space-y-1 mb-4">
            {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
        <div className="mb-10 border-t border-[#333] pt-8">
          <div className="text-[#A1A1A1] text-xs mb-1 uppercase tracking-wide">Additional Details</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-white text-base font-light">
            {job.additional.map((item, i) => (
              <div key={i}><span className="text-[#A1A1A1] mr-2">{item.label}:</span>{item.value}</div>
            ))}
          </div>
        </div>
        <a
          href={job.applyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#232323] rounded-md px-8 py-3 font-medium text-lg shadow hover:scale-105 transition-transform"
        >
          Apply Now
        </a>
      </div>
    </div>
  );
} 