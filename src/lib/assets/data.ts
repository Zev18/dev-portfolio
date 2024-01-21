import { Github, Twitter, Linkedin, type Icon } from 'lucide-svelte';
import type { ComponentType } from 'svelte';

import fontrando from '$lib/assets/images/projects/font-randomizer.webp';
import gptstatus from '$lib/assets/images/projects/GPTStatus.webp';
import artsite from '$lib/assets/images/projects/Zevsart.webp';
import shsh from '$lib/assets/images/projects/shalshelet-shivyoni.webp';

export type tech =
	| 'react'
	| 'ruby on rails'
	| 'go'
	| 'svelte'
	| 'nextjs'
	| 'javascript'
	| 'python'
	| 'typescript'
	| 'HTML/CSS'
	| 'docker'
	| 'gatsbyJS'
	| 'supabase'
	| 'firebase'
	| 'swiperJS'
	| 'postgresql'
	| 'node'
	| 'java';

type social = {
	name: string;
	link: string;
	icon: ComponentType<Icon>;
};

export type projectType =
	| 'frontend'
	| 'full-stack'
	| 'backend'
	| 'browser extension'
	| 'VScode extension';

export const socials: social[] = [
	{
		name: 'Github',
		link: 'https://github.com/Zev18',
		icon: Github
	},
	{
		name: 'Twitter',
		link: 'https://twitter.com/zev_ross',
		icon: Twitter
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/zev-ross-baab31209/',
		icon: Linkedin
	}
];

export type project = {
	name: string;
	type: projectType;
	description: string;
	githubLink?: string;
	liveLink?: string;
	stack: tech[];
	image: string;
};

export const projects: project[] = [
	{
		name: 'Art Website',
		type: 'frontend',
		description:
			'A website for showcasing my illustration hobby. Mobile-friendly with a beautiful, intuitive design and user interface.',
		githubLink: 'https://github.com/Zev18/art-site',
		liveLink: 'https://zevsart.com',
		stack: ['nextjs', 'javascript', 'swiperJS', 'HTML/CSS'],
		image: artsite
	},
	{
		name: 'GPTStatus',
		type: 'browser extension',
		description:
			"A browser extension that shows if ChatGPT is experienceing issues, and other status information using OpenAI's API.",
		githubLink: 'https://github.com/Zev18/gptstatus',
		liveLink: 'https://chromewebstore.google.com/detail/gptstatus/hchmelcdpkbbpjmibgolkegfpnamngog',
		stack: ['javascript', 'HTML/CSS'],
		image: gptstatus
	},
	{
		name: 'font randomizer',
		type: 'VScode extension',
		description:
			'A VScode extension that selects a random font from a list on startup, or at set intervals.',
		githubLink: 'https://github.com/Zev18/font-randomizer',
		liveLink: 'https://marketplace.visualstudio.com/items?itemName=zevross.font-randomizer',
		stack: ['typescript'],
		image: fontrando
	},
	// {
	// 	name: 'lightning',
	// 	type: 'VScode extension',
	// 	description:
	// 		'Not just a collection of themes, but a program that makes creating themes with variable colors easier.',
	// 	githubLink: 'https://github.com/Zev18/lightning',
	// 	liveLink: 'https://marketplace.visualstudio.com/items?itemName=zevross.lightning',
	// 	slug: 'lightning',
	// 	stack: ['typescript'],
	// 	image: lightning
	// },
	{
		name: 'shalshelet shivyoni',
		type: 'frontend',
		description:
			'A website created for an organization I volunteered at. Modeled after a GoDaddy template, this fully responsive site was coded from scratch in GatsbyJS.',
		liveLink: 'https://shalsheletshivyoni.org/',
		stack: ['gatsbyJS', 'javascript', 'HTML/CSS'],
		image: shsh
	}
];

export type work = {
	company: string;
	companyLink: string | null;
	location: string;
	role: string;
	year: string;
	stack?: tech[];
	summary: string;
};

export const work: work[] = [
	{
		company: 'PrescientAI',
		companyLink: 'https://prescient-ai.io',
		role: 'Full-Stack Intern',
		location: 'Miami, FL',
		year: '2023',
		stack: ['react', 'typescript', 'ruby on rails', 'postgresql'],
		summary:
			'Delivered production-level code for a professional SaaS product. Implemented new pages, page redesigns, API endpoints, background jobs, routes, database structures, and more.'
	},
	{
		company: 'Juni Learning',
		companyLink: 'https://junilearning.com/',
		role: 'Coding Instructor',
		location: 'San Francisco, CA',
		year: '2021-22',
		stack: ['java', 'python'],
		summary:
			'Taught Java and Python to middle-school and high-school students online, conveying complex programming concepts in an easy-to-understand manner, and providing students with assignments that brought out their potential while cementing core concepts.'
	}
];
