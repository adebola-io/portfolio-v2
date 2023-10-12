# Server API

This file specifies all the schemas and API endpoints for the main Go server, in case you forget.

- [Server API](#server-api)
  - [Schemas](#schemas)
    - [Project](#project)
      - [Libraries](#libraries)
      - [Applications](#applications)
  - [Interfaces](#interfaces)
    - [Project View](#project-view)
    - [Project Info](#project-info)

## Schemas

### Project

A project is...well, a project. Projects are divided into four types:

-  Libraries
-  Applications
-  Plugins
-  Frameworks

All projects:

-  have a name and a unique identifier.
-  implement [`Project View`](#project-view) and [`Project Info`](#project-info).
-  have a list of tags pertaining to the project.

#### Libraries

A library should have:

-  A project type set to `lib`.
-  A libray link object, consisting of the github source code, the package and the documentation site.

```json
{
   "id": "ab5hhr589uve4",
   "name": "fractured",
   "type": "lib",
   "view": {
      "svg": "<svg>...</svg>",
      "banner": "http://image-link/image.png",
      "theme": []
   },
   "info": {
      "tagline": "Library for creating Grids and Masonries in Javascript.",
      "brief": "Fractured is a library for building and organizing pretty grids. It provides several interfaces allowing use with popular frameworks like React, Vue and Svelte.",
      "full": "..."
   },
   "links": {
      "github": "http://github.com/adebola-io/fractured",
      "package": "http://npmjs.com/fractured",
      "docs": "http://adebola-io.github.io/fractured/docs"
   },
   "tags": ["library", "react", "vue", "svelte", "ui", "javascript", "layout"]
}
```

#### Applications

An application should have:

-  a project type set to `app`.
-  An application link object, consisting of the github source code, the optional Figma design file and the live preview.

```json
{
   "id": "ab5hhr589uve4",
   "name": "caviar",
   "type": "app",
   "view": {
      "svg": "<svg>...</svg>",
      "banner": "http://image-link/image.png",
      "theme": []
   },
   "info": {
      "tagline": "An ecommerce app for food products.",
      "brief": "Caviar is an ecommerce app that allows users to browse and purchase a variety of food products, including fresh produce, meat, seafood, dairy, and processed foods. It features a variety of recipes and a community forum where users can share their own recipes and cooking experiences.",
      "full": "..."
   },
   "links": {
      "github": "http://github.com/adebola-io/fractured",
      "package": "http://npmjs.com/fractured",
      "docs": "http://adebola-io.github.io/fractured/docs"
   },
   "tags": ["library", "react", "vue", "svelte", "ui", "javascript", "layout"]
}
```

## Interfaces

### Project View

Indicates that a project has images and icons. Provides the functions:

-  `ProjectView.getIcon(): SVGString`
-  `ProjectView.getBanner(): ImageLinkString`
-  `ProjectView.getThemeColors(): Theme[]`

### Project Info

Indicates that a project has information about it. Provides the functions:

-  `ProjectInfo.getTagline(): string`
-  `ProjectInfo.getBrief(): string`
-  `ProjectInfo.getFullInfo(): string`
