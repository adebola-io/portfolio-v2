package components

import "ash/shared"

// The Head component.
// Returns a html <head> string built from the props.
func Head(props *shared.PageProps) string {
	blueprint := `
	 <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
         name="description"
         content="{{.Description}}"
      />
      <meta name="theme-color" content="#c0c0c0" />
      <link rel="icon" href="./favicon.ico" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
         href="https://fonts.googleapis.com/css2?family=Sometype+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
         rel="stylesheet"
      />
      <link rel="stylesheet" href="./styles/shared.css" />
      <link rel="stylesheet" href="./styles/animations.css" />
      <link rel="stylesheet" href="{{.Stylesheet}}" />
      <title>{{.Title}}</title>
      <meta property="og:url" content="{{.Url}}" />
      <meta property="og:title" content="{{.Title}}" />
      <meta
         property="og:description"
         content="{{.OgDescription}}"
      />
      <meta
         property="og:image"
         content="` + shared.BASE_URL + `/images/ash-thumbnail.jpg"
      />
      <meta
         property="twitter:image"
         content="` + shared.BASE_URL + `/images/ash-thumbnail.jpg"
      />
      <meta property="og:type" content="website" />
   </head>
	`
	str, err := shared.RenderStringWithData(blueprint, props)
	if err != nil {
		panic(err)
	}
	return *str
}
