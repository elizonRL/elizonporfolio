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
        "nav.projects": "Projects",
        "nav.studies": "Studies",
        "nav.stack & softSkill": "Stack & Soft Skills",
        "nav.about Me": "About Me",
    },
    es: {
        "nav.projects": "Proyectos",
        "nav.studies": "Estudios",
        "nav.stack & softSkill": "Stack & Habilidades Blandas",
        "nav.about Me": "Acerca de Mí",
    },
} as const;

export const routes = {
	es: {
		vota: 'vota',
		info: 'info',
		archivo: 'archivo',
		'aviso-legal': 'aviso-legal',
		privacidad: 'privacidad',
		cookies: 'cookies',
	},
	en: {
		vota: 'vote',
		info: 'information',
		archivo: 'archive',
		'aviso-legal': 'legal-notice',
		privacidad: 'privacy',
		cookies: 'cookies',
	},
	ca: {
		vota: 'vota',
		info: 'informacio',
		archivo: 'arxiu',
		'aviso-legal': 'avis-legal',
		privacidad: 'privacitat',
		cookies: 'cookies',
	},
};