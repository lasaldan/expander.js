expander.js
===========

Expander - jQuery Plugin
Daniel Fuller - 2012
 
Converts a dictionary list to an expandable list, each DT becoming the clickable item, and the 
cooresponding DD being the toggled item.

Accepts JSON object as parameter with the following options:
+---------------------------------------------------------------------------------------------------+
| Option        | Default	       | Explanation                                                      |
+---------------+----------------+------------------------------------------------------------------+
| listClass     | "expanderList" | Class name applied to the root of the DL tag of the expander     |
| openedClass   | "opened"	     | Class name applied to all 'opened' dictionary terms              |
| closedClass   | "closed"	     | Class name applied to all 'opened' dictionary terms              |
| animate       | 300	           | Duration of slide animation (ms) or "false" for none             |
| controls      | true	         | If true, adds Show/hide all buttons added before dictionary list |
| initiallyOpen | false	         | List definitions are rendered in 'open' state if true            |
| showButtonLbl | "Show All"     | Text within the "Show All" button (if controls=true)             |
| hideButtonLbl | "Hide All"     | Text within the "Hide All" button (if controls=true)             |
| accordian     | false	         | Allows a max of one definition to be open at once                |
|               |                | (forces controls=false and initiallyOpen=false)                  |
+---------------+----------------+------------------------------------------------------------------+

Example Call (passing in all default parameters):
$('#faq').expander({
  listClass: 'expanderList',
  openedClass: 'opened',
  closedClass: 'closed',
  animate: 300,
  controls: true,
  initiallyOpen: false,
  showButtonLbl: "Show All",
  hideButtonLbl: "Hide All",
  accordian: false
});
