package components

import "strings"

// Navigation bar link component.
func NavBarLink(linkname string, isSelected bool) string {
	selected := ""
	if isSelected {
		selected = "selected"
	}
	lowerCaseName := strings.ToLower(linkname)
	link := "./" + lowerCaseName + ".html"
	if lowerCaseName == "home" {
		link = "./index.html"
	}
	if isSelected {
		link = "#"
	}
	return `
	<a href="` + link + `" class="navbar-link ` + selected + `" id="` + lowerCaseName + `-link">
		<img
			src="./svg/` + lowerCaseName + `.svg"
			class="navbar-icon-image"
			alt="` + linkname + ` Icon"
		/>
		<div class="navbar-link-text">` + linkname + `</div>
	</a>
	`
}

// The navigation bar/header component.
func NavBar(currentPage *string) string {
	return `
		<nav class="navigation-bar">
         <menu class="navbar-menu">` +
		NavBarLink("Home", *currentPage == "static/index.html") +
		NavBarLink("Contact", *currentPage == "static/contact.html") +
		NavBarLink("Library", *currentPage == "static/library.html") +
		`</menu>
      </nav>
		`
}
