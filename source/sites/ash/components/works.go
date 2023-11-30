package components

import "ash/shared"

// Html Component to encapsulate the list of components.
func WorksList(list *[]shared.PortfolioWork) string {
	str := ""
	for _, work := range *list {
		str += WorkCard(&work)
	}
	return str
}

// Html Component for a singular portfolio work.
func WorkCard(work *shared.PortfolioWork) string {
	str := `
	`
	return str
}
