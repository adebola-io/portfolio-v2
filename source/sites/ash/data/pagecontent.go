package data

import (
	"ash/components"
	"ash/shared"
	"html/template"
)

var PageData = map[string]*shared.PageProps{
	"static/index.html": {
		Name:          "Home",
		Title:         "Akomolafe Sefunmi | Programmer",
		Description:   "Creative programmer and web developer living in Lagos, Nigeria. I have a passion for creating accessible, beautiful and all-round amazing software interfaces.",
		OgDescription: "Creative programmer and web developer living in Lagos, Nigeria.",
		Stylesheet:    "/styles/home.css",
		Url:           shared.BASE_URL,
	},
	"static/contact.html": {
		Name:          "Contact",
		Title:         "Akomolafe Sefunmi | Contact Me",
		Description:   "Creative programmer and web developer living in Lagos, Nigeria. I have a passion for creating accessible, beautiful and all-round amazing software interfaces.",
		OgDescription: "Ways in which you can contact me.",
		Stylesheet:    "/styles/contact.css",
		Url:           shared.BASE_URL + "/contact.html",
	},
	"static/library.html": {
		Name:          "Library",
		Title:         "Akomolafe Sefunmi | My Works",
		Description:   "Creative programmer and web developer living in Lagos, Nigeria. I have a passion for creating accessible, beautiful and all-round amazing software interfaces.",
		OgDescription: "A list of some of my works.",
		Stylesheet:    "/styles/library.css",
		Url:           shared.BASE_URL + "/library.html",
		Content: func() template.HTML {
			str := ""
			str += components.WorksList(GetWorks())
			return template.HTML(str)
		},
	},
}
