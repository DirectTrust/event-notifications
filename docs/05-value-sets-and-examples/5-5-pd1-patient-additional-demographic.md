---
title: "5.5 PD1 – Patient Additional Demographic"
---

# 5.5 PD1 – Patient Additional Demographic

Primary Care Provider information will be sent in the ROL segment. Receivers of ADTs that are earlier than version 2.5.1 will need to look in the PD1 segment for Primary Care Provider information.

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 28%" />
<col style="width: 28%" />
<col style="width: 13%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th><strong>Data Element Numbers</strong></th>
<th><strong>Element Name</strong></th>
<th><strong>V2 Element</strong></th>
<th><strong>Value Set</strong></th>
<th><strong>Requirement</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(107)</td>
<td><p>Primary Care Provider Identifier (NPI)</p>
<p><em>NOTE: Type 1 NPI if the entity is an Individual</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PD1.4.1">PD1-4.1</a> - Patient Primary Care Provider Name and ID No.Id Number</td>
<td></td>
<td>RE‖</td>
</tr>
<tr>
<td>(108)</td>
<td>Primary Care Provider Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PD1.4.2">PD1-4.2</a>† - Patient Primary Care Provider Name and ID No.Family Name</td>
<td></td>
<td>RE‖</td>
</tr>
<tr>
<td>(109)</td>
<td>Primary Care Provider First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PD1.4.3">PD1-4.3</a>† - Patient Primary Care Provider Name and ID No.Given Name</td>
<td></td>
<td>RE‖</td>
</tr>
</tbody>
</table>

*‖ NOTE: Both PD1 and ROL Elements are required for senders whose implementation is based on HL7 V2.5.1 or later. Only PD1 elements are required for senders whose implementation is based on versions earlier than HL7 V2.5.1.*
