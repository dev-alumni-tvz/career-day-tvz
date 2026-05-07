export type PartnerTier = 'platinum' | 'grid' | 'strategic' | 'patron';

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
	// Grid
	{ name: 'Strabag', logoFile: 'strabag.svg', url: 'https://www.strabag.hr/', tier: 'grid' },
	{ name: 'HOPS', logoFile: 'hops.svg', url: 'https://www.hops.hr/', tier: 'grid' },
	{ name: 'Zagrebačka banka', logoFile: 'zaba.svg', url: 'https://www.zaba.hr/home/en', tier: 'grid' },
	{ name: 'Raiffeisen', logoFile: 'Raiffeisen.svg', url: 'https://www.rba.hr/hr/gradani.html', tier: 'grid' },
	{ name: 'Kamgrad', logoFile: 'kamgrad.svg', url: 'https://www.kamgrad.hr/', tier: 'grid' },
	{ name: 'Tekton', logoFile: 'Tekton.svg', url: 'https://tekton-zg.hr/en/', tier: 'grid' },
	{ name: 'INA', logoFile: 'Ina.svg', url: 'https://www.ina.hr/', tier: 'grid' },
	{ name: 'ABA', logoFile: 'aba.svg', url: 'https://aba.gv.at/en/', tier: 'grid' },
	{ name: 'Montelektro', logoFile: 'montelektro.svg', url: 'https://www.montelektro.hr/', tier: 'grid' },
	{ name: 'HKZP', logoFile: 'hkzp.svg', url: 'https://www.crocontrol.hr/', tier: 'grid' },
	{ name: 'Amelicor', logoFile: 'amelicor.svg', url: 'https://amelicor.group/', tier: 'grid' },
	{ name: 'Knapp', logoFile: 'knapp.svg', url: 'https://www.knapp.com/', tier: 'grid' },
	{ name: 'Privredna banka', logoFile: 'prva-banka.svg', url: 'https://www.pbz.hr/en/gradjani', tier: 'grid' },
	{ name: 'Porsche Digital', logoFile: 'porsche.svg', url: 'https://www.porsche.digital/', tier: 'grid' },
	{ name: 'T-Mobile', logoFile: 'tmobile.svg', url: 'https://www.t-mobile.com/', tier: 'grid' },
	{ name: 'Telelink', logoFile: 'Telelink.svg', url: 'https://www.tbs.tech/', tier: 'grid' },
	{ name: 'Eccos', logoFile: 'eccos.svg', url: 'https://www.eccos.com.hr/', tier: 'grid' },
	{ name: 'HEP', logoFile: 'hep.svg', url: 'https://www.hep.hr/', tier: 'grid' },
	{ name: 'ABB', logoFile: 'abb.svg', url: 'https://global.abb/', tier: 'grid' },
	{ name: 'Vertiv', logoFile: 'vertiv.svg', url: 'https://www.vertiv.com/en-us/', tier: 'grid' },
	{ name: 'Tehmont', logoFile: 'Tehmont.svg', url: 'https://tehmont.eu/', tier: 'grid' },
	{ name: 'ENT', logoFile: 'ent.svg', url: 'https://ericssonnikolatesla.com/', tier: 'grid' },
	{ name: 'Reply Comsysto', logoFile: 'reply.svg', url: 'https://www.comsystoreply.de/en', tier: 'grid' },
	{ name: 'Apis IT', logoFile: 'apis.svg', url: 'https://www.apis-it.hr/', tier: 'grid' },
	{ name: 'FINA', logoFile: 'fina.svg', url: 'https://www.fina.hr/', tier: 'grid' },
	{ name: 'dSPACE', logoFile: 'dspace.svg', url: 'https://www.dspace.com/', tier: 'grid' },
	{ name: 'Point', logoFile: 'point.svg', url: 'https://www.point.hr/', tier: 'grid' },
	{ name: 'Infobip', logoFile: 'infobip.svg', url: 'https://www.infobip.com/', tier: 'grid' },
	{ name: 'Pontis', logoFile: 'pontis.svg', url: 'https://pontistechnology.com/', tier: 'grid' },
	{ name: 'OIV', logoFile: 'oiv.svg', url: 'https://oiv.hr/', tier: 'grid' },
	{ name: 'Span', logoFile: 'Span.svg', url: 'https://www.span.eu/hr/', tier: 'grid' },
	{ name: 'Knez Ljubo', logoFile: 'KnezLjubo.svg', url: 'https://www.knezljubo.hr/', tier: 'grid' },
	{ name: 'LibusoftCicom', logoFile: 'libusoft.svg', url: 'https://www.libusoftcicom.hr/', tier: 'grid' },
	{ name: 'Schneider Electric', logoFile: 'schneider.svg', url: 'https://www.se.com/hr/hr/', tier: 'grid' },
	{ name: 'SDMS', logoFile: 'sdms.svg', url: 'https://sdms.hr/', tier: 'grid' },
	{ name: 'Yazaki', logoFile: 'yazaki.svg', url: 'https://www.yazaki-europe.com/', tier: 'grid' },
	{ name: 'All Eyes On Screens', logoFile: 'all-eyes-on-screens.svg', url: 'https://alleyesonscreens.com/', tier: 'grid' },
	{ name: 'H&MV Engineering', logoFile: 'hmv.svg', url: 'https://www.hmvengineering.com/', tier: 'grid' },
	{ name: 'Intis', logoFile: 'intis.svg', url: 'https://www.intis.hr/', tier: 'grid' },
	{ name: 'Siemens', logoFile: 'siemens.svg', url: 'https://www.siemens.com/hr/hr.html', tier: 'grid' },
	{ name: 'Pedom Asfalti', logoFile: 'pedom.svg', url: 'https://pedom-asfalti.hr/', tier: 'grid' },
	{ name: 'Domusplus', logoFile: 'domusplus.svg', url: 'https://www.domusplus.hr/', tier: 'grid' },
	{ name: 'HPB', logoFile: 'hpb.svg', url: 'https://www.hpb.hr/', tier: 'grid' },
	{ name: 'Legrand', logoFile: 'legrand.svg', url: 'https://www.legrand.hr/', tier: 'grid' },
	{ name: 'Xylon', logoFile: 'xylon.svg', url: 'https://xylon-lab.com/', tier: 'grid' },
	{ name: 'LTH Castings', logoFile: 'lth-castings.svg', url: 'https://www.lthcastings.com/hr/domov', tier: 'grid' },
	{ name: 'SICK', logoFile: 'sick.svg', url: 'https://sickconnect.com/', tier: 'grid' },
	{ name: 'Pro Integris', logoFile: 'pro-integris.svg', url: 'https://www.prointegris.com/', tier: 'grid' },
	{ name: 'Colas', logoFile: 'colas.svg', url: 'https://www.colas.hr/', tier: 'grid' },

	// Strategic partner & patron
/* 	{ name: 'HUP', logoFile: 'hup.svg', url: 'https://www.hup.hr/', tier: 'strategic' },
	{ name: 'HR Ministarstvo', logoFile: 'HRMinistrarstvo.svg', url: 'https://mzom.gov.hr/', tier: 'patron' }, */
];
