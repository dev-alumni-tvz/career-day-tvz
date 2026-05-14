export type PartnerTier = 'platinum' | 'gold' | 'silver' | 'other' | 'strategic' | 'patron';

export type Partner = {
	name: string;
	logoFile: string;
	url: string;
	tier: PartnerTier;
	logoClass?: string;
};

export const partners: Partner[] = [
	// Platinum
	{ name: 'KONČAR', logoFile: 'koncar.svg', url: 'https://www.koncar.hr/en', tier: 'platinum' },
	{ name: 'JANAF', logoFile: 'Janaf.svg', url: 'https://janaf.hr/', tier: 'platinum', logoClass: 'janaf-logo' },

	// Gold
	{ name: 'PERI', logoFile: 'peri.svg', url: 'https://www.peri.com.hr/', tier: 'gold' },
	{ name: 'Strabag', logoFile: 'strabag.svg', url: 'https://www.strabag.hr/', tier: 'gold' },
	{ name: 'HOPS', logoFile: 'hops.svg', url: 'https://www.hops.hr/', tier: 'gold' },
	{ name: 'Zagrebačka banka', logoFile: 'zaba.svg', url: 'https://www.zaba.hr/home/en', tier: 'gold' },
	{ name: 'Raiffeisen', logoFile: 'Raiffeisen.svg', url: 'https://www.rba.hr/hr/gradani.html', tier: 'gold' },
	{ name: 'Kamgrad', logoFile: 'kamgrad.svg', url: 'https://www.kamgrad.hr/', tier: 'gold' },
	{ name: 'Tekton', logoFile: 'Tekton.svg', url: 'https://tekton-zg.hr/en/', tier: 'gold' },
	{ name: 'INA', logoFile: 'Ina.svg', url: 'https://www.ina.hr/', tier: 'gold' },
	{ name: 'ABA', logoFile: 'aba.svg', url: 'https://aba.gv.at/en/', tier: 'gold' },
	{ name: 'Montelektro', logoFile: 'montelektro.svg', url: 'https://www.montelektro.hr/', tier: 'gold' },
	{ name: 'HKZP', logoFile: 'hkzp.svg', url: 'https://www.crocontrol.hr/', tier: 'gold' },
	{ name: 'Amelicor', logoFile: 'amelicor.svg', url: 'https://amelicor.group/', tier: 'gold' },
	{ name: 'Knapp', logoFile: 'knapp.svg', url: 'https://www.knapp.com/', tier: 'gold' },
	{ name: 'Privredna banka', logoFile: 'prva-banka.svg', url: 'https://www.pbz.hr/en/gradjani', tier: 'gold' },
	{ name: 'Porsche Digital', logoFile: 'porsche.svg', url: 'https://www.porsche.digital/', tier: 'gold' },
	{ name: 'T-Mobile', logoFile: 'tmobile.svg', url: 'https://www.t-mobile.com/', tier: 'gold' },
	{ name: 'Telelink', logoFile: 'Telelink.svg', url: 'https://www.tbs.tech/', tier: 'gold' },
	{ name: 'Eccos', logoFile: 'eccos.svg', url: 'https://www.eccos.com.hr/', tier: 'gold' },
	{ name: 'HEP', logoFile: 'hep.svg', url: 'https://www.hep.hr/', tier: 'gold' },
	{ name: 'ABB', logoFile: 'abb.svg', url: 'https://global.abb/', tier: 'gold' },
	{ name: 'Vertiv', logoFile: 'vertiv.svg', url: 'https://www.vertiv.com/en-us/', tier: 'gold' },
	{ name: 'Tehmont', logoFile: 'Tehmont.svg', url: 'https://tehmont.eu/', tier: 'gold' },
	{ name: 'ENT', logoFile: 'ent.svg', url: 'https://ericssonnikolatesla.com/', tier: 'gold' },
	{ name: 'Pontis', logoFile: 'pontis.svg', url: 'https://pontistechnology.com/', tier: 'gold' },
	{ name: 'OIV', logoFile: 'oiv.svg', url: 'https://oiv.hr/', tier: 'gold' },
	{ name: 'Span', logoFile: 'Span.svg', url: 'https://www.span.eu/hr/', tier: 'gold' },
	{ name: 'Schneider Electric', logoFile: 'schneider.svg', url: 'https://www.se.com/hr/hr/', tier: 'gold' },
	{ name: 'SDMS', logoFile: 'sdms.svg', url: 'https://sdms.hr/', tier: 'gold' },
	{ name: 'Yazaki', logoFile: 'yazaki.svg', url: 'https://www.yazaki-europe.com/', tier: 'gold' },
	{ name: 'All Eyes On Screens', logoFile: 'all-eyes-on-screens.svg', url: 'https://alleyesonscreens.com/', tier: 'gold' },
	{ name: 'H&MV Engineering', logoFile: 'hmv.svg', url: 'https://www.hmvengineering.com/', tier: 'gold' },
	{ name: 'Intis', logoFile: 'intis.svg', url: 'https://www.intis.hr/', tier: 'gold' },
	{ name: 'Siemens', logoFile: 'siemens.svg', url: 'https://www.siemens.com/hr/hr.html', tier: 'gold' },
	{ name: 'Pedom Asfalti', logoFile: 'pedom.svg', url: 'https://pedom-asfalti.hr/', tier: 'gold' },
	{ name: 'Domusplus', logoFile: 'domusplus.svg', url: 'https://www.domusplus.hr/', tier: 'gold' },

	// Silver
	{ name: 'Reply Comsysto', logoFile: 'reply.svg', url: 'https://www.comsystoreply.de/en', tier: 'silver' },
	{ name: 'Apis IT', logoFile: 'apis.svg', url: 'https://www.apis-it.hr/', tier: 'silver' },
	{ name: 'FINA', logoFile: 'fina.svg', url: 'https://www.fina.hr/', tier: 'silver' },
	{ name: 'dSPACE', logoFile: 'dspace.svg', url: 'https://www.dspace.com/', tier: 'silver' },
	{ name: 'Point', logoFile: 'point.svg', url: 'https://www.point.hr/', tier: 'silver' },
	{ name: 'Infobip', logoFile: 'infobip.svg', url: 'https://www.infobip.com/', tier: 'silver' },
	{ name: 'Knez Ljubo', logoFile: 'KnezLjubo.svg', url: 'https://www.knezljubo.hr/', tier: 'silver' },
	{ name: 'LibusoftCicom', logoFile: 'libusoft.svg', url: 'https://www.libusoftcicom.hr/', tier: 'silver' },
	{ name: 'HPB', logoFile: 'hpb.svg', url: 'https://www.hpb.hr/', tier: 'silver' },
	{ name: 'Legrand', logoFile: 'legrand.svg', url: 'https://www.legrand.hr/', tier: 'silver' },
	{ name: 'Xylon', logoFile: 'xylon.svg', url: 'https://xylon-lab.com/', tier: 'silver' },
	{ name: 'LTH Castings', logoFile: 'lth-castings.svg', url: 'https://www.lthcastings.com/hr/domov', tier: 'silver' },
	{ name: 'SICK', logoFile: 'sick.svg', url: 'https://sickconnect.com/', tier: 'silver' },
	{ name: 'Pro Integris', logoFile: 'pro-integris.svg', url: 'https://www.prointegris.com/', tier: 'silver' },
	{ name: 'Colas', logoFile: 'colas.svg', url: 'https://www.colas.hr/', tier: 'silver' },
	{ name: 'HILTI', logoFile: 'HILTI.svg', url: 'https://www.hilti.hr/', tier: 'silver' },
	{ name: 'ING-GRAD', logoFile: 'ing-grad.svg', url: 'https://www.ing-grad.hr/hr/', tier: 'silver' },

	// Other
	{ name: 'Treblle', logoFile: 'treblle.svg', url: 'https://treblle.com/', tier: 'other' },
	{ name: 'Croteh', logoFile: 'croteh.svg', url: 'https://croteh.eu/en/', tier: 'other' },
	{ name: 'Saron Solutions', logoFile: 'saron.svg', url: 'https://saronsolutions.com/', tier: 'other' },

	// Strategic partner & patron
	/* 	{ name: 'HUP', logoFile: 'hup.svg', url: 'https://www.hup.hr/', tier: 'strategic' },
	{ name: 'HR Ministarstvo', logoFile: 'HRMinistrarstvo.svg', url: 'https://mzom.gov.hr/', tier: 'patron' }, */
];
