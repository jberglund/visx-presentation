# Visx

Vad Visx är.
* Ett gäng primitives för att enklare kunna "komponera"
* Du må bygga allt själv
* Det hjälper att kunna lite SVG (eller om du har en designervän som kan)

Vad Visx inte är.
* Du må hantera det mesta själv.
* Du får hantera det mesta själv (...för er som använt tredjeparts graf-rammeverk)
* Batteries är INTE inkluderat

### De stora delarna (Chart primitives)
För att göra någon typ av visualisering behöver du:
* Shapes - cirklar, fyrkanter, paths, bars
* Scales - tid, linjär, logaritmisk, osv.


Shapes är SVG-element wrappade i React-komponenter för att få göra det lite enklare än vanliga.

Ibland enklare
<BarRounded x="100" y="100" width="20" height="100" radius="5"/>
<rect x="100" width="20" height="100" rx="5" />

Men betydligt svårare:
´´´
<path class="visx-area-closed" d={/* manuell uträkning :| */} stroke-width="1" stroke="url(#area-gradient)" fill="url(#area-gradient)"></path>
<AreaClosed
  data={stock}
  x={(d) => dateScale(getDate(d)) ?? 0}
  y={(d) => stockValueScale(getStockValue(d)) ?? 0}
  yScale={stockValueScale}
  strokeWidth={1}
  stroke="url(#area-gradient)"
  fill="url(#area-gradient)"
  curve={curveMonotoneX}
/>
´´´

Data-förslag:
* Slack
* När folk startade i Variant
* Bonus per kvartal
* 


const employees = [
{name: 'Anders Morten Ramstad Hammervold', date: '01.08.2018'},
{name: 'Mikael Brevik', date: '01.09.2018'},
{name: 'Marius Krakeli', date: '01.09.2018'},
{name: 'Odd Morten Sveås', date: '01.09.2018'},
{name: 'Tonje Evanger', date: '01.09.2018'},
{name: 'Tore Vestues', date: '01.09.2018'},
{name: 'Jacob Berglund', date:	'01.01.2019'},
{name: 'Petter Suul', date:	'01.09.2019'},
{name: 'Line Skjærvik', date:	'01.02.2019'},
{name: 'Ellen Wagnild-Antonsen', date:	'30.01.2019'},
{name: 'Hilde Osmo Reindal', date:	'01.05.2019'},
{name: 'Christian Brevik', date:	'01.03.2019'},
{name: 'Kristin Qvenild Nesset', date:	'24.04.2019'},
{name: 'Magnus Olderø Sæther', date:	'13.05.2019'},
{name: 'Maciek Jakub Adamczyk', date:	'01.08.2019'},
{name: 'Adrian Santana Berg', date:	'01.09.2019'},
{name: 'Vikas Gupta', date:	'26.09.2019'},
{name: 'Sarah Serussi', date:	'01.09.2019'},
{name: 'Ole Jørgen Skogstad', date:	'01.12.2019'},
{name: 'Malin C. Karlsen', date:	'01.02.2020'},
{name: 'Mathias Flått', date:	'01.08.2020'},
{name: 'Magnus Dahl', date:	'01.08.2020'},
{name: 'Mikkel Dan-Rognlie', date:	'01.09.2020'},
{name: 'Stine Bechmann', date:	'01.09.2020'},
{name: 'Anders Njøs Slinde', date:	'01.08.2020'},
{name: 'Bror Brurberg', date:	'01.10.2020'},
{name: 'Linn Helen Dyrhaug', date:	'01.10.2020'},
{name: 'Simen Strøm Braaten', date:	'02.10.2020'},
{name: 'Mari Andrine Thorsteinsen', date:	'01.03.2021'},
{name: 'Tore Stensaker Tefre', date:	'01.08.2021'},
{name: 'Martin Bolin Møller', date:	'01.08.2021'},
{name: 'Stina Sofie Møller', date:	'01.08.2021'},
{name: 'Tormod Haugene', date:	'01.08.2021'}
]