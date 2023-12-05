package shared

import (
	"html/template"
	"strings"
)

var BASE_URL = "https://adebola-io-ash.uw.r.appspot.com"
var BASE_URL_DEV = "http://localhost:8080"

type PortfolioWorkView struct {
	Svg      string
	SvgWidth string
	Banner   string
	Theme    [3]int
}

type PortfolioWorkInfo struct {
	Tagline string
	Brief   string
	Full    string
}

type PortfolioLinks struct {
	Base   string
	Github string
	Docs   string
	Live   string
}

type PortfolioWork struct {
	Id        string
	Name      string
	Type      string
	IsOngoing bool
	Links     PortfolioLinks
	View      PortfolioWorkView
	Info      PortfolioWorkInfo
}

// Details for the <head> tag for each page.
type PageProps struct {
	Name          string
	Title         string
	Description   string
	OgDescription string
	Stylesheet    string
	Url           string
	Content       func() template.HTML
}

// Builds a template from a string and immediately executes it
// into another string using the given data.
func RenderStringWithData(str string, data any) (*string, error) {
	builder := &strings.Builder{}
	tmpl := template.New("rendered")
	tmpl, err := tmpl.Parse(str)
	if err != nil {
		return nil, err
	}
	err = tmpl.Execute(builder, data)
	if err != nil {
		return nil, err
	}
	final := builder.String()
	return &final, nil
}
