export type Department = {
	name: string;
	desc: string | null;
	gradient: string;
};

export const departments: Department[] = [
	{ name: 'Elektrotehnika', desc: 'Električni sustavi, automatika i energetika.', gradient: 'linear-gradient(145deg, #f5c518, #e0a800)' },
	{ name: 'Računarstvo', desc: 'Programiranje, mreže i računalni sustavi.', gradient: 'linear-gradient(145deg, #8b5cf6, #6d28d9)' },
	{ name: 'Strojarstvo', desc: 'Mehanika, konstrukcija i industrijska postrojenja.', gradient: 'linear-gradient(145deg, #ef4444, #b91c1c)' },
	{ name: 'Mehatronika', desc: 'Spoj strojarstva, elektronike i računarstva.', gradient: 'linear-gradient(145deg, #f97316, #c2410c)' },
	{ name: 'Graditeljstvo', desc: 'Projektiranje, gradnja i infrastruktura.', gradient: 'linear-gradient(145deg, #22c55e, #15803d)' },
	{ name: 'Informatika', desc: 'Digitalni sustavi, baze podataka i IT rješenja.', gradient: 'linear-gradient(145deg, #3b82f6, #1d4ed8)' },
	{ name: '+ ostale industrije', desc: null, gradient: 'linear-gradient(145deg, #f9f9f9, #c7c7c7)' },
];
