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
            - Header is the calculator header
            - First row class
                    - The first input attribute is a text box, that will place the results of the calculations
                    - There is also a box that will hold 'C' and will clear the results to allow for a new calculation
            - Second row class
                    - 4 input buttons, values are 1, 2, 3, and +
                    - Each one will also call the liveScreen() function when clicked on
                    - liveScreen() function is found in script at bottom of body
            - Third, fourth, and fifth row class
                    - Same as the other rows, however, the 5th row is slightly different
                    - Fifth row includes = which will evaluate what is in the text box
                    - also includes the dot . to allow for decimal values
    
Calculator Script File
    clearScreen() function called when the clear button 'C' is pressed by the user
            1. Document object is the root object of the html document
            2. getElementById() returns the element that has the ID attribute with the specified value
    liveScreen() function will print value of button pressed by user to the text box
            1. Get the result input by the button being clicked, save it to res
            2. If the value is undefined, then print nothing
            3. Otherwise, add the value to the results on the screen
