package main

import (
	"ash/components"
	"ash/data"
	"html/template"
	"net/http"
)

type PageRenderData struct {
	Overlay template.HTML
	NavBar  template.HTML
	Head    template.HTML
	Content template.HTML
}

func getPageRenderData(page *string) PageRenderData {
	pageDetail := data.PageData[*page]
	Content := template.HTML("")
	if pageDetail.Content != nil {
		Content = pageDetail.Content()
	}
	return PageRenderData{
		Overlay: template.HTML(components.Overlay()),
		NavBar:  template.HTML(components.NavBar(page)),
		Head:    template.HTML(components.Head(data.PageData[*page])),
		Content: Content,
	}
}

// Renders an HTML page template from the /static directory.
func RenderPage(pageName string, writer http.ResponseWriter, request *http.Request) {
	renderData := getPageRenderData(&pageName)
	tmpl, err := template.ParseFiles(pageName)
	if err != nil {
		panic(err)
	}
	err = tmpl.Execute(writer, renderData)
	if err != nil {
		panic(err)
	}
}
