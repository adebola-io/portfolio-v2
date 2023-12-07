package components

import (
	"ash/shared"
	"strconv"
)

// Html Component to encapsulate the list of components.
func WorksList(list *[]shared.PortfolioWork) string {
	str := ""
	for _, work := range *list {
		str += WorkCard(&work)
	}
	return `<ul class="works-list">` + str + `</ul>`
}

// Html Component for a singular portfolio work.
func WorkCard(work *shared.PortfolioWork) string {
	ongoingBadge := ""
	if work.IsOngoing {
		ongoingBadge = `<div class="ongoing-badge">Ongoing</div>`
	}
	svg := ""
	if work.View.Banner == "" {
		svg += `<img class="work-svg-icon" loading="lazy" style="height: {{.View.SvgWidth}}" src="{{.View.Svg}}" alt="Svg icon"/>`
	}
	themeColor := "rgb("
	for i, colorComponent := range work.View.Theme {
		themeColor += strconv.Itoa(colorComponent)
		if i < 2 {
			themeColor += ","
		}
	}
	themeColor += ")"
	tags := ""
	for _, tag := range work.Tags {
		tags += Tag(tag)
	}
	base := `
	<li class="card">
		<a href="{{.Links.Base}}" target="_blank" rel="noopener noreferrer">
			<div class="card-banner" style="
				background-image: url({{.View.Banner}});
				background-color: ` + themeColor + `
			">
				` + svg + ongoingBadge + `
			</div>
			<h2 class="big-text work-name">{{.Name}}</h2>
			<p class="work-brief">{{.Info.Brief}}</p>
			<div class="tag-list">
				` + tags + `
			</div>
		</a>
	</li>
	`
	str, err := shared.RenderStringWithData(base, work)
	if err != nil {
		panic(err)
	}
	return *str
}

// Tag of a tool used to build the project.
func Tag(tagName string) string {
	return `<div class="work-tag">` + tagName + `</div>`
}
