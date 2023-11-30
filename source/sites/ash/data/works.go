package data

import "ash/shared"

var PortfolioWorks = []shared.PortfolioWork{
	{
		Id:   "00001",
		Name: "fractured",
		Type: "lib",
		View: shared.PortfolioWorkView{
			Svg:    "",
			Banner: "http://image-link.png",
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
