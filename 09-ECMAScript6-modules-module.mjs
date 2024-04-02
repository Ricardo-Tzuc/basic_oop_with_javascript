// The import is used in the script where we want to use the modules
import { PlatziClass } from './09-ECMAScript6-modules-main.mjs'
/* Rename is allowed in imports and exports,
by using the keyword 'as' the new names is given:
import/export {PlatziClass as ClassGenerator} from '/route'
*/

//we generate a new instance by using the imported prototype
const class67 = new PlatziClass({
    name: 'JavaScript: OOP, based on prototypes',
    videoID: 'sadasdqweqdd8as8da9'
    // by passing the ID will be helpful for the code hidden.
})


class67.play()
class67.pause()
// Using the methods seems easy, but the code-logic is in the main js.
class67.play()
class67.pause()

// How to apply the module in HTML?
//<script type="module" src="main.js"></script>