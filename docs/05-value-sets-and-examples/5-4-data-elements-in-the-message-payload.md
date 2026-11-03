---
title: "5.4 Data Elements in the Message Payload"
---

# 5.4 Data Elements in the Message Payload

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 15%" />
<col style="width: 18%" />
<col style="width: 13%" />
<col style="width: 13%" />
<col style="width: 13%" />
<col style="width: 13%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Number</strong></td>
<td><strong>Data Element Name</strong></td>
<td><strong>Element Type</strong></td>
<td><strong>CMS Final Rule</strong></td>
<td><strong>Context/Metadata</strong></td>
<td><strong>Content</strong></td>
<td><strong>Human Readable</strong></td>
</tr>
<tr>
<td><ol type="1">
<li></li>
</ol></td>
<td>X-Direct-Context</td>
<td>Message Header</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="2" type="1">
<li></li>
</ol></td>
<td>Content-Type</td>
<td>Mime-part</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="3" type="1">
<li></li>
</ol></td>
<td>Content-Transfer-Encoding</td>
<td>Mime-part</td>
<td></td>
<td>O</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="4" type="1">
<li></li>
</ol></td>
<td>Content-ID</td>
<td>Mime-part</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="5" type="1">
<li></li>
</ol></td>
<td>Content-Disposition</td>
<td>Mime-part</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="6" type="1">
<li></li>
</ol></td>
<td>version</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="7" type="1">
<li></li>
</ol></td>
<td>Id</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="8" type="1">
<li></li>
</ol></td>
<td>patient-id</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="9" type="1">
<li></li>
</ol></td>
<td>Type</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="10" type="1">
<li></li>
</ol></td>
<td>purpose</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="11" type="1">
<li></li>
</ol></td>
<td>patient</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11a.</td>
<td>givenName</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11b.</td>
<td>surname</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11c.</td>
<td>middleName</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11d.</td>
<td>dateOfBirth</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11e.</td>
<td>gender</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11f.</td>
<td>socialSecurityNumber</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11g.</td>
<td>telephoneNumber</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11h.</td>
<td>streetAddress</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11i.</td>
<td>stateOrProvinceName</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11j.</td>
<td>localityName</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11k.</td>
<td>postalCode</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td>11l.</td>
<td>country</td>
<td>Context</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>11m.</td>
<td>directAddress</td>
<td>Context</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="12" type="1">
<li></li>
</ol></td>
<td>creation-time</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="13" type="1">
<li></li>
</ol></td>
<td>profile</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="14" type="1">
<li></li>
</ol></td>
<td>type-code</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="15" type="1">
<li></li>
</ol></td>
<td>activity-code</td>
<td>Context</td>
<td></td>
<td>R</td>
<td></td>
<td>R</td>
</tr>
<tr>
<td><ol start="16" type="1">
<li></li>
</ol></td>
<td>author</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="17" type="1">
<li></li>
</ol></td>
<td>contentTypeCode</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="18" type="1">
<li></li>
</ol></td>
<td>entryUUID</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="19" type="1">
<li></li>
</ol></td>
<td>intendedRecipient</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="20" type="1">
<li></li>
</ol></td>
<td>patientId</td>
<td>Submission Set</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="21" type="1">
<li></li>
</ol></td>
<td>sourceId</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="22" type="1">
<li></li>
</ol></td>
<td>submissionTime</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="23" type="1">
<li></li>
</ol></td>
<td>title</td>
<td>Submission Set</td>
<td></td>
<td>O</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="24" type="1">
<li></li>
</ol></td>
<td>uniqueId</td>
<td>Submission Set</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="25" type="1">
<li></li>
</ol></td>
<td>author</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="26" type="1">
<li></li>
</ol></td>
<td>classCode</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="27" type="1">
<li></li>
</ol></td>
<td>confidentialityCode</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="28" type="1">
<li></li>
</ol></td>
<td>creationTime</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="29" type="1">
<li></li>
</ol></td>
<td>entryUUID</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="30" type="1">
<li></li>
</ol></td>
<td>formatCode</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="31" type="1">
<li></li>
</ol></td>
<td>healthcareFacilityTypeCode</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="32" type="1">
<li></li>
</ol></td>
<td>languageCode</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="33" type="1">
<li></li>
</ol></td>
<td>mimeType</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="34" type="1">
<li></li>
</ol></td>
<td>patientId</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="35" type="1">
<li></li>
</ol></td>
<td>practiceSettingCode</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="36" type="1">
<li></li>
</ol></td>
<td>sourcePatientId</td>
<td>Document entry</td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="37" type="1">
<li></li>
</ol></td>
<td>sourcePatientInfo</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>37a.</td>
<td>Source patient identifier list</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>37b.</td>
<td>Source patient name</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>37c.</td>
<td>(Intentionally Blank)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>37d.</td>
<td>(Intentionally Blank)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>37e.</td>
<td>Source patient date of birth</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>37f.</td>
<td>Source patient administrative gender</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td>37g.</td>
<td>Source patient address</td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="38" type="1">
<li></li>
</ol></td>
<td>typeCode</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td>R</td>
</tr>
<tr>
<td><ol start="39" type="1">
<li></li>
</ol></td>
<td>uniqueId</td>
<td>Document entry</td>
<td></td>
<td>R</td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="40" type="1">
<li></li>
</ol></td>
<td>(Intentionally Blank)</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>40A.</td>
<td>Message Code</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.9.1">MSH-9.1 – Message Type.Message Code</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>40B.</td>
<td>Message Event</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.9.2">MSH-9.2 – Message Type.Trigger Event</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="41" type="1">
<li></li>
</ol></td>
<td>Transaction ID</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.10">MSH-10 – Message Control ID</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="42" type="1">
<li></li>
</ol></td>
<td>Event Date</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.2.1">EVN-2.1 - Recorded Date/Time.Time</a></td>
<td>R</td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="43" type="1">
<li></li>
</ol></td>
<td>Version ID</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.12">MSH-12 – Version ID</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="44" type="1">
<li></li>
</ol></td>
<td>Patient ID</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1">PID-3.1– Patient Identifier List.Id Number</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="45" type="1">
<li></li>
</ol></td>
<td>Patient ID Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.5">PID-3.5– Patient Identifier List.Identifier Type Code</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="46" type="1">
<li></li>
</ol></td>
<td>Patient SSN Last 4 digits</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1">PID-3.1 – Patient Identifier List.Id Number</a></td>
<td></td>
<td></td>
<td>O</td>
<td></td>
</tr>
<tr>
<td><ol start="47" type="1">
<li></li>
</ol></td>
<td>Patient First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.2">PID-5.2 – Patient Name.Given Name</a></td>
<td>R</td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="48" type="1">
<li></li>
</ol></td>
<td>Patient Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.1">PID-5.1 – Patient Name.Family Name</a></td>
<td>R</td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="49" type="1">
<li></li>
</ol></td>
<td>Patient Middle Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.3">PID-5.3 – Patient Name.Second And Further Given Names Or Initials Thereof</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>R</td>
</tr>
<tr>
<td><ol start="50" type="1">
<li></li>
</ol></td>
<td>Patient Suffix</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.4">PID-5.4 – Patient Name.Suffix (e.g., Jr Or Iii)</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>R</td>
</tr>
<tr>
<td><ol start="51" type="1">
<li></li>
</ol></td>
<td>Patient Alias</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.7">PID-5.7 – - Patient Name.Name Type Code</a></td>
<td></td>
<td></td>
<td>O</td>
<td></td>
</tr>
<tr>
<td><ol start="52" type="1">
<li></li>
</ol></td>
<td>Patient Date of Birth</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.7">PID-7 – Date/Time of Birth</a></td>
<td></td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="53" type="1">
<li></li>
</ol></td>
<td>Patient Gender</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.8">PID-8 – Administrative Sex</a></td>
<td></td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="54" type="1">
<li></li>
</ol></td>
<td>Patient Street Address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.1">PID-11.1 – Patient Address.Street Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="55" type="1">
<li></li>
</ol></td>
<td>Patient Street Address 2</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.2">PID-11.2 – Patient Address.Other Designation</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="56" type="1">
<li></li>
</ol></td>
<td>Patient City</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.3">PID-11.3 – Patient Address.City</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="57" type="1">
<li></li>
</ol></td>
<td>Patient State</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.4">PID-11.4 – Patient Address.State Or Province</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="58" type="1">
<li></li>
</ol></td>
<td>Patient ZIP</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.5">PID-11.5 –Patient Address.Zip Or Postal Code</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="59" type="1">
<li></li>
</ol></td>
<td>Patient Countr– - if not US</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.6">PID-11.6 – Patient Address.Country</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="60" type="1">
<li></li>
</ol></td>
<td>Patient Telephone Number</td>
<td><p><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.6">PID-13.6 – Phone Number – Home.Area/City Code</a></p>
<p><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.7">PID-13.7 – Phone Number – Home.Local Number</a></p></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="61" type="1">
<li></li>
</ol></td>
<td>Patient Telecommunication Use Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.2">PID-13.2 - Phone Number – Home.Telecommunication Use Code</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="62" type="1">
<li></li>
</ol></td>
<td>Patient email</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.4">PID-13. 4– Phone Number – Home.Email Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="63" type="1">
<li></li>
</ol></td>
<td>Patient Account Number</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.18">PID-18 – Patient Account Number</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="64" type="1">
<li></li>
</ol></td>
<td>Patient Date of Death</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.29">PID-29 – Patient Death Date and Time</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="65" type="1">
<li></li>
</ol></td>
<td>Role</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.3.1">ROL-3.1 – Role-ROL. Identifier</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="66" type="1">
<li></li>
</ol></td>
<td>Person Identifier (NPI)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.1">ROL-4.1 - Role Person.Id Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="67" type="1">
<li></li>
</ol></td>
<td>Person Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.2">ROL-4.2 - Role Person.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="68" type="1">
<li></li>
</ol></td>
<td>Person First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.3">ROL-4.3 - Role Person.Given Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="69" type="1">
<li></li>
</ol></td>
<td>Organization Identifier (NPI)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.1">ROL-4.1 - Role Person.Id Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="70" type="1">
<li></li>
</ol></td>
<td>Organization Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.2">ROL-4.2 - Role Person.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="71" type="1">
<li></li>
</ol></td>
<td>Person or Organization Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="72" type="1">
<li></li>
</ol></td>
<td>Treating Facility Identifier (Type 2 NPI)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.7.2">EVN-7.2 – Event Facility.Universal Id</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="73" type="1">
<li></li>
</ol></td>
<td>Patient Class</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.2">PV1-2 - Patient Class</a></td>
<td></td>
<td></td>
<td>R</td>
<td>R</td>
</tr>
<tr>
<td><ol start="74" type="1">
<li></li>
</ol></td>
<td>Assigned Patient Location – Point of Care</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.3">PV1-3.1 - Assigned Patient Location</a>.Point Of Care</td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="75" type="1">
<li></li>
</ol></td>
<td>Treating Facility Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.3.9">PV1-3.9 - Assigned Patient Location.Location Description</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="76" type="1">
<li></li>
</ol></td>
<td>Treating Facility Address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.11">ROL-11 - Office/Home Address/Birthplace</a> (ROL-3.1 = TF)</td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="77" type="1">
<li></li>
</ol></td>
<td>Admission Type ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-1.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.4">PV1-4 - Admission Type</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="78" type="1">
<li></li>
</ol></td>
<td>Prior Patient Location</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.6">PV1-6 - Prior Patient Location</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td>79a.</td>
<td>Treating Provider (Attending) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.1">PV1-7.1 – Attending Doctor.Id Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="79" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Attending) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.2">PV1-7.2 - Attending Doctor.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="80" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Attending) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.3">PV1-7.3 - Attending Doctor.Given Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="81" type="1">
<li></li>
</ol></td>
<td>Intentionally Blank</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="82" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Attending) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="83" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Consulting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.1">PV1-9.1 - Consulting Doctor.Id Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="84" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Consulting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.2">PV1-9.2 - Consulting Doctor.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="85" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Consulting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.3">PV1-9.3 - Consulting Doctor.Given Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="86" type="1">
<li></li>
</ol></td>
<td>Intentionally Blank</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="87" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Consulting) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="88" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Admitting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.1">PV1-17.1 - Admitting Doctor.Id Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="89" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Admitting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.2">PV1-17.2 - Admitting Doctor.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="90" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Admitting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.3">PV1-17.3 - Admitting Doctor.Given Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="91" type="1">
<li></li>
</ol></td>
<td>Intentionally Blank</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><ol start="92" type="1">
<li></li>
</ol></td>
<td>Treating Provider (Admitting) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="93" type="1">
<li></li>
</ol></td>
<td>Visit Number</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.19">PV1-19 - Visit Number</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="94" type="1">
<li></li>
</ol></td>
<td>Discharge Disposition</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.36">PV1-36 - Discharge Disposition</a></td>
<td></td>
<td></td>
<td>R</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="95" type="1">
<li></li>
</ol></td>
<td>Discharged to Location</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.37">PV1-37 - Discharged to Location</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="96" type="1">
<li></li>
</ol></td>
<td>Admit Date</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.44">PV1-44 - Admit Date/Time</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="97" type="1">
<li></li>
</ol></td>
<td>Admission Reason</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.3">PV2-3 - Admit Reason</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="98" type="1">
<li></li>
</ol></td>
<td>Diagnosis Code</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.1">DG1-3.1 - Diagnosis Code - DG1.Identifier</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="99" type="1">
<li></li>
</ol></td>
<td>Diagnosis Description</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.2">DG1-3.2 - Diagnosis Code - DG1.Text</a></td>
<td></td>
<td></td>
<td>RE</td>
<td>RE</td>
</tr>
<tr>
<td><ol start="100" type="1">
<li></li>
</ol></td>
<td>Diagnosis Coding System</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.3">DG1-3.3 - Diagnosis Code - DG1.Name Of Coding System</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="101" type="1">
<li></li>
</ol></td>
<td>Diagnosis Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.6">DG1-6 - Diagnosis Type</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="102" type="1">
<li></li>
</ol></td>
<td>Insurance Company Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.4">IN1-4 - Insurance Company Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="103" type="1">
<li></li>
</ol></td>
<td>Insurance Group Number</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.8">IN1-8 - Group Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="104" type="1">
<li></li>
</ol></td>
<td>Insurance Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.15">IN1-15 - Plan Type</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="105" type="1">
<li></li>
</ol></td>
<td>Patient Insurance Member ID</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.36">IN1-36 - Policy Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="106" type="1">
<li></li>
</ol></td>
<td>Insured’s ID Number</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.49">IN1-49 – Insured’s ID Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="107" type="1">
<li></li>
</ol></td>
<td><p>Primary Care Provider Identifier (NPI)</p>
<p><em>NOTE: Type 1 NPI if the entity is an Individual</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.1">ROL-4.1 – Role Person.Id Number</a> (with ROL-3.1 = PP)</td>
<td></td>
<td></td>
<td><p>RE</p>
<p>RE</p></td>
<td></td>
</tr>
<tr>
<td><ol start="108" type="1">
<li></li>
</ol></td>
<td>Primary Care Provider Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.2">ROL-4.2 - Role Person.Family Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="109" type="1">
<li></li>
</ol></td>
<td>Primary Care Provider First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.3">ROL-4.3 - Role Person.Given Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="110" type="1">
<li></li>
</ol></td>
<td>Time</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.2.1">EVN-2.1 – Recorded Date/Time.Time</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="111" type="1">
<li></li>
</ol></td>
<td>Universal Id Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.7.3">EVN-7.3 – Event Facility.Universal Id Type</a></td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td><ol start="112" type="1">
<li></li>
</ol></td>
<td>Mother’s Name ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-2.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.2">NK1-2 - Name</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="113" type="1">
<li></li>
</ol></td>
<td>Relationship ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-3.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.3">NK1-3 - Relationship</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="114" type="1">
<li></li>
</ol></td>
<td>Mother’s Address ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-4.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.4">NK1-4 – Address</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="115" type="1">
<li></li>
</ol></td>
<td>Mother’s Phone Number ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-5.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.5.1">NK1-5.1 – Phone Number.Telephone Number</a></td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td><ol start="116" type="1">
<li></li>
</ol></td>
<td>Newborn Baby Indicator ![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-6.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.36">PV2-36 – Newborn Baby Indicator</a></td>
<td></td>
<td></td>
<td>O</td>
<td></td>
</tr>
<tr>
<td><ol start="117" type="1">
<li></li>
</ol></td>
<td>Discharge Date/time</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.45">PV1-45 – Discharge Date/Time</a></td>
<td></td>
<td></td>
<td>O</td>
<td></td>
</tr>
</tbody>
</table>

![Woman with stroller](/images/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload-7.svg) - See Appendix
