expander.js
===========

Expander - jQuery Plugin  
Daniel Fuller - 2012
 
Converts a dictionary list to an expandable list, each DT becoming the clickable item, and the   
cooresponding DD being the toggled item.  

Accepts JSON object as parameter with the following options:
<table>
	<tr>
		<th>Option</th>
		<th>Default</th>
		<th>Explanation</th>
	</tr>
	<tr>
		<td>listClass</td>
		<td>"expanderList"</td>
		<td>Class name applied to the root of the DL tag of the expander</td>
	</tr>
	<tr>
		<td>openedClass</td>
		<td>"opened"</td>
		<td>Class name applied to all 'opened' dictionary terms</td>
	</tr>
	<tr>
		<td>closedClass</td>
		<td>"closed"</td>
		<td>Class name applied to all 'opened' dictionary terms</td>
	</tr>
	<tr>
		<td>animate</td>
		<td>300</td>
		<td>Duration of slide animation (ms) or "false" for none</td>
	</tr>
	<tr>
		<td>controls</td>
		<td>true</td>
		<td>If true, adds Show/hide all buttons added before dictionary list</td>
	</tr>
	<tr>
		<td>initiallyOpen</td>
		<td>false</td>
		<td>List definitions are rendered in 'open' state if true</td>
	</tr>
	<tr>
		<td>showButtonLbl</td>
		<td>"Show All"</td>
		<td>Text within the "Show All" button (if controls=true)</td>
	</tr>
	<tr>
		<td>hideButtonLbl</td>
		<td>"Hide All"</td>
		<td>Text within the "Hide All" button (if controls=true)</td>
	</tr>
	<tr>
		<td>accordian</td>
		<td>false</td>
		<td>Allows a max of one definition to be open at once (forces controls=false and initiallyOpen=false)</td>
	</tr>
</table>

Example Call (passing in all default parameters):
<pre>
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
</pre>
