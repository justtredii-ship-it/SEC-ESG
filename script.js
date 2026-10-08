const jobs=[
['09 Oct 2026','HCV/HCS Desktop Verification Update','Office','ESG preparation and desktop validation','On Progress','office'],
['12 Oct 2026','Environmental Risk Data Compilation','Office','ESG data analysis','On Progress','office'],
['15 Oct 2026','Community Stakeholder Contact Verification','Pontianak / Kubu Raya','Local coordination','Pending Approval','office','Survey travel cost: IDR 350,000/trip (excluding monthly salary)'],
['17 Oct 2026','Review Field Survey Instruments','Office','Field preparation','On Progress','office'],
['19 Oct - 9 Nov 2026','HCV/HCS Ground-Truthing','Sambas','Field Survey','Approved','field','Survey cost: IDR 420,000/day x 22 days = IDR 9,240,000 (excluding monthly salary)'],
['20 Oct 2026','Forest Condition Observation','Sambas','Ground assessment','Approved','field'],
['22 Oct 2026','Community Interview & Social Mapping','Sambas','Stakeholder engagement','Approved','field'],
['25 Oct 2026','Biodiversity Observation','Sambas','Environmental survey','Approved','field'],
['28 Oct 2026','Land Use Verification','Sambas','Spatial ground check','Approved','field'],
['02 Nov 2026','ESG Compliance Evidence Collection','Sambas','Evidence gathering','Approved','field'],
['06 Nov 2026','Field Finding Validation','Sambas','Verification','Approved','field'],
['09 Nov 2026','Field Survey Closing Report','Sambas','Survey documentation','Approved','field'],
['10-11 Nov 2026','Demobilization (Demob)','Sambas to Office','Return travel','Approved','field','Survey travel cost: IDR 420,000/day x 2 days = IDR 840,000 (excluding monthly salary)'],
['12 Nov 2026','Post-Fieldwork Data Consolidation','Office','Data management','On Progress','office'],
['13 Nov 2026','ESG Field Evidence Organization','Office','Documentation','On Progress','office'],
['15 Nov 2026','Corrective Action Recommendation Draft','Office','ESG reporting','On Progress','office'],
['16 Nov 2026','Compliance Review Meeting','Office','Internal review','On Progress','office'],
['18 Nov 2026','Final ESG Assignment Report','Office','Reporting','On Progress','office'],
['19 Nov 2026','Assignment Closure & Debriefing','Office','Final debrief','On Progress','office']
];

const area=document.getElementById('jobs');
jobs.forEach(j=>{
let button=j[5]=='field'?'Download Assignment Letter':'View Task Detail';
let cls=j[5]=='field'?'field':'office';
area.innerHTML+=`
<div class="job card">
<h3>${j[0]} - ${j[1]}</h3>
<p>Location: ${j[2]} | ${j[3]}</p>
<p>Status: <span class="status">${j[4]}</span></p>
${j[6]?`<p class="money">💰 ${j[6]}</p>`:''}
<button class="btn ${cls}">${button}</button>
</div>`;
});