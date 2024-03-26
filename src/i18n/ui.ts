import EnglishFlag from "../components/logos/EnglishFlag.astro";
import DominicanFlag from "../components/logos/DominicanFlag.astro";

export const languages: Record<string, { code: string; name: string; flag: typeof EnglishFlag }> = {
    en: {code: "en", name: "English", flag: EnglishFlag},
	es: {code: "es", name: "Español" , flag: DominicanFlag},
    
};

export const defaultLang = "en";
export const showDefaultLang = false;

export const ui = {
    en: {
        "nav.projects": "projects",
        "nav.studies": "studies",
        "nav.stack & softSkill": "Stack & Soft Skills",
        "nav.about Me": "About Me",
    },
    es: {
        "nav.projects": "proyectos",
        "nav.studies": "estudios",
        "nav.stack & softSkill": "Stack & Habilidades Blandas",
        "nav.about Me": "Acerca de Mí",
    },
} as const;

export const routes = {
	es: {
		proyetos: 'proyectos',
		estudios: 'Estudios',
		stack_y_soft_skills: 'stack & habilidades blandas',
		acerca_de_mi: 'acerca de mí'
	},
	en: {
		projetcs: 'porjects',
		studies: 'studies',
		stack: 'stack & soft skills',
		about: 'about me'
	
	},

};