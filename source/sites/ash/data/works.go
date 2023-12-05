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
	},
	{
		Id:   "00002",
		Name: "Spry",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/spry.svg",
			SvgWidth: "55%",
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
			Brief:   "Quizwiz is a web-based trivia game.",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "http://quizwiz-game.vercel.app",
			Github: "https://github.com/adebola-io/quizwiz",
			Live:   "http://quizwiz-game.vercel.app",
		},
	},
	{
		Id:   "00004",
		Name: "Siphon",
		Type: "other",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/siphon.png",
			SvgWidth: "91%",
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
			Base:   "https://spry-store.vercel.app",
			Github: "https://github.com/adebola-io/spry",
			Live:   "https://spry-store.vercel.app",
		},
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
			Brief:   "Sojourner",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://sojourner.netlify.app/",
			Github: "https://github.com/adebola-io/sojourner",
			Live:   "https://sojourner.netlify.app/",
		},
	},
	{
		Id:   "00008",
		Name: "Studybud",
		Type: "app",
		View: shared.PortfolioWorkView{
			Svg:      shared.BASE_URL_DEV + "/images/studybud.png",
			SvgWidth: "80%",
			// Banner: shared.BASE_URL_DEV + "/images/cadence.png",
			Banner: "",
			Theme:  [3]int{2, 2, 2},
		},
		Info: shared.PortfolioWorkInfo{
			Tagline: "A concept landing page for a space agency.",
			Brief:   "Sojourner",
			Full:    "",
		},
		Links: shared.PortfolioLinks{
			Base:   "https://studybud-co.vercel.app/",
			Github: "https://github.com/adebola-io/studybud",
			Live:   "https://studybud-co.vercel.app/",
		},
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
