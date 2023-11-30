package main

import (
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	http.HandleFunc("/", func(writer http.ResponseWriter, request *http.Request) {
		// Home page.
		if request.URL.Path == "/" {
			RenderPage("static/index.html", writer, request)
			return
		}
		absolutePath := "static" + request.URL.Path
		// Other HTML Templates.
		if strings.HasSuffix(absolutePath, ".html") {
			// Render if file exists.
			if _, err := os.Stat(absolutePath); !os.IsNotExist(err) {
				RenderPage(absolutePath, writer, request)
				return
			}
		}
		http.ServeFile(writer, request, "static"+request.URL.Path)
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Printf("Defaulting to port %s", port)
	}

	log.Printf("Listening on port %s", port)
	if err := http.ListenAndServe(":"+port, nil); err != nil {
		log.Fatal(err)
	}
}
