import { en_US as localeData } from './strings'

const sidebar_common = {
	text: localeData.other,
	items: [
		{ text: localeData.pages["donations"], link: `/donations` }
		//{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
	]
}

const themeConfig = {
	langMenuLabel: localeData.langMenuLabel,
	darkModeSwitchLabel: localeData.darkModeSwitchLabel,
	darkModeSwitchTitle: localeData.darkModeSwitchTitle,
	lightModeSwitchTitle: localeData.lightModeSwitchTitle,
	sidebarMenuLabel: localeData.sidebarMenuLabel,
	returnToTopLabel: localeData.returnToTopLabel,
// TODO: Remove missing pages
	nav: [
		{ text: localeData.pages["site-navigation"], link: `/site-navigation` },
		{ text: localeData.pages["pick-a-pimp"], link:`/pick-a-pimp` },
		{ text: localeData.pages["faq"], link: `/faq` },
		//TODO: add extras if any
		//{
		//	text: localeData.extras,
		//	items: [
		//		{ text: localeData.pages["priiloader-usage"], link: `/priiloader-usage` },
		//		{ text: localeData.pages["dump-games"], link: `/dump-games` },
		//		{ text: localeData.pages["wiiconnect24"], link: `/wiiconnect24` },
		//		{ text: localeData.pages["nintendowfc"], link: `/nintendowfc` },
		//	]
		//}
	],
	sidebar: {
		[`/yawmme`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["key-information"], link:`/key-information` },
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["yawmme"], link: `/yawmme` },
				]
			},
			sidebar_common
		],
		/*
		 	The `/` path needs to be at the bottom as a catch all! If it is placed anywhere above,
			it will select the first matching one and not parse the rest!
		*/
		[`/`]: [
			{
				text: localeData.guide,
				items: [
					{ text: localeData.pages["get-started"], link: `/get-started` },
					{ text: localeData.pages["pick-a-pimp"], link:`/pick-a-pimp` },
				]
			},
			sidebar_common
		]
	},
	footer: {
		copyright: 'Copyright © 2025 Nintendo Homebrew',
		items: [
			{ text: localeData.pages["donations"], link: `/donations` },
			//{ text: localeData.pages["privacy-policy"], link: `/privacy-policy` },
			{ text: localeData.pages["site-navigation"], link: `/site-navigation` }
		]
	}
};

export default {
	lang: "en",
	label: "English",
    title: localeData.title,
    description: localeData.description,
    themeConfig: themeConfig
}
