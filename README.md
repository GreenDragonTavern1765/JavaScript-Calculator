# Calculator-JavaScript

I am learning JavaScript, and I am attempting to create a calculator. This readme will serve as a description of what I am creating, why I am creating
it, as well as any notes regarding functions I write, or elements I use along the way. The original code came from another, I am recreating it and tweaking
it as I see fit, this is merely a learning exercise.

In the header...
    <meta/> used to set the metadata of the html file, always will be inside of the <head></head> tag.
        - Set the charset to "UTF-8" which is the character encoding of the file itself
        - HTTP-Equiv provides an HTTP header for the html document
        - Name attribute specifies the name for the metadata
            - Description: A description of the page
            - Viewport: user's visible area of the webpage
   <link/> defines the relationship between the current page and an external source
        - Href: specifies the location of the linked document
        
In the body...
    <div></div> defines a division or a section of an HTML file, divides a section that can be styled by CSS files
            - Class attribute is used to show which row is being created, that will house the various buttons of the calculator
            - Header <h1> is the calculator header
            - First row class
                    - The first input attribute is a text box, that will place the results of the calculations
                    - There is also a box that will hold 'C' and will clear the results to allow for a new calculation
