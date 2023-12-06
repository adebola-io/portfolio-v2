package data

import "ash/shared"

var PortfolioWorks = []shared.PortfolioWork{
	{
		Id:        "00001",
		Name:      "Whirlwind",
		Type:      "other",
		IsOngoing: true,
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/whirlwind.svg",
			SvgWidth: "40%",
			Banner:   "",
			Theme:    [3]int{51, 51, 51},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A simple programming language for complex software.",
			Brief:   "Whirlwind is a statically typed, interpreted programming language for diverse applications.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://github.com/adebola-io/whirlwind",
			Github: "https://github.com/adebola-io/whirlwind",
			Docs:   "https://whirlwind-lang.vercel.app",
			Live:   "https://whirlwind-lang.vercel.app",
		},
		Tags: []string{"Rust", "Tokio", "Compilers", "Language Servers", "Static Analysis"},
	},
	{
		Id:   "00002",
		Name: "Spry",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/spry.svg",
			SvgWidth: "50%",
			// Banner: shared.BASE_URL_DEV + "/images/spry.png",
			Banner: "",
			Theme:  [3]int{97, 0, 94},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "An ecommerce application built with Nuxt.",
			Brief:   "Spry is an ecommerce web app store for fashion items and accessories.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://spry-store.vercel.app",
			Github: "https://github.com/adebola-io/spry",
			Live:   "https://spry-store.vercel.app",
		},
		Tags: []string{"Nuxt", "Vue", "Typescript", "Ecommerce", "Tailwind", "Figma"},
	},
	{
		Id:   "00003",
		Name: "Quizwiz",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/quizwiz.svg",
			SvgWidth: "91%",
			// Banner: shared.BASE_URL_DEV + "/images/quizwiz.png",
			Banner: "",
			Theme:  [3]int{89, 151, 148},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A simple, interactive trivia quiz game built in React.",
			Brief:   "Quizwiz is a simple, interactive, web-based trivia game. It is complete with authentication, categorized quizzes and a leaderboard.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "http://quizwiz-game.vercel.app",
			Github: "https://github.com/adebola-io/quizwiz",
			Live:   "http://quizwiz-game.vercel.app",
		},
		Tags: []string{"React", "Figma", "Node", "Typescript", "Tailwind"},
	},
	{
		Id:   "00009",
		Name: "Ash",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/sefunmi-ash-background-logo.png",
			SvgWidth: "51%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{117, 117, 117},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A simple, bare minimum portfolio.",
			Brief:   "The site you're on right now. A monochrome, low-risk portfolio rendered using HTML, CSS and Go templates.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://adebola-io-ash.ur.w.appspot.com",
			Github: "https://github.com/adebola-io/portfolio-v2",
			Live:   "https://adebola-io-ash.ur.w.appspot.com",
		},
		Tags: []string{"Go", "Bun", "Figma", "HTML", "CSS"},
	},
	{
		Id:   "00004",
		Name: "Siphon",
		Type: "other",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/siphon.png",
			SvgWidth: "86%",
			// Banner: shared.BASE_URL_DEV + "/images/quizwiz.png",
			Banner: "",
			Theme:  [3]int{143, 114, 102},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A bundler for web applications.",
			Brief:   "Siphon is a parser and bundler for HTML, CSS, JS and JSX applications.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://www.npmjs.com/package/siphon-cli",
			Github: "https://github.com/adebola-io/siphon",
			Live:   "https://www.npmjs.com/package/siphon-cli",
		},
		Tags: []string{"Typescript", "Node", "NPM", "HTML", "CSS", "Compilers", "Static Analysis"},
	},
	{
		Id:   "00005",
		Name: "Cadence",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/cadence.svg",
			SvgWidth: "41%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{210, 255, 181},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A landing page for a logistics company.",
			Brief:   "Cadence is a single page app with multiple routes for a conceptual logistics handling company.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://cadence-logistics.vercel.app",
			Github: "https://github.com/adebola-io/spry",
			Live:   "https://cadence-logistics.vercel.app",
		},
		Tags: []string{"Vue", "Typescript", "GSAP", "CSS", "Figma"},
	},
	{
		Id:   "00006",
		Name: "Portfolio-V1",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/p1.png",
			SvgWidth: "80%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{2, 2, 2},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "The oldest version of my web development portfolio.",
			Brief:   "This is the oldest version of my portfolio, created a Long Time Ago™. It showcases some of the projects that I have worked on.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://adebola-xyz.netlify.app/",
			Github: "https://github.com/adebola-io/portfolio",
			Live:   "https://adebola-xyz.netlify.app/",
		},
		Tags: []string{"React", "SCSS", "Javascript"},
	},
	{
		Id:   "00007",
		Name: "Sojourner",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/sojourner-icon.png",
			SvgWidth: "72%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{0, 14, 53},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A concept landing page for a space agency.",
			Brief:   "Sojourner is a website consept for a company specializing in space tourism and interstellar travel.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://sojourner.netlify.app/",
			Github: "https://github.com/adebola-io/sojourner",
			Live:   "https://sojourner.netlify.app/",
		},
		Tags: []string{"Vue", "Javascript", "CSS"},
	},
	{
		Id:   "00008",
		Name: "Studybud",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/studybud.svg",
			SvgWidth: "80%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{7, 0, 69},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "An AI study tool",
			Brief:   "Studybud is a web-based tool for generating summaries and quizzes using artificial intelligence.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://studybud-co.vercel.app/",
			Github: "https://github.com/adebola-io/studybud",
			Live:   "https://studybud-co.vercel.app/",
		},
		Tags: []string{"Svelte", "SCSS", "Javascript", "Figma"},
	},
}

// Returns the works in the portfolio.
func GetWorks() *[]shared.PortfolioWork {
	return &PortfolioWorks
}

type Error struct {
	Message string
}

// Returns the work with a given id.
func GetWorkById(id string) (shared.PortfolioWork, Error) {
	panic("")
}
