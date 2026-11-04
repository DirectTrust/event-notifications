---
title: "4.4 Human Readable Content"
---

# 4.4 Human Readable Content

The human readable content is represented by a single MIME part. This MIME-part may contain a single representation of the human readable content or may contain multiple representations using the multi-part/alternative content type defined in Section 5.1.4 of [RFC2046](https://datatracker.ietf.org/doc/html/rfc2046). The multi-part/alternative is used to supply alternative representation of the human readable content which the recipient system can choose the best fit for their use case.

## MIME Part Elements for the Human Readable Content

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 16%" />
<col style="width: 36%" />
<col style="width: 12%" />
<col style="width: 23%" />
</colgroup>
<thead>
<tr>
<th><strong>Data Element Number</strong></th>
<th><strong>Context Element</strong></th>
<th><strong>Value</strong></th>
<th><strong>Value Set</strong></th>
<th><strong>Context/Metadata Requirement</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(2)</td>
<td>Content-Type</td>
<td><p>At least one representation of the human readable content SHALL use mimeType text/plain.</p>
<p>If using multipart/alternative each MIME part of the multipart/alternative SHALL use an applicable MIME type corresponding to the human readable content representation.</p></td>
<td>Expected Value</td>
<td>R</td>
</tr>
<tr>
<td>(3)</td>
<td>Content-Transfer- Encoding</td>
<td>This is an optional field and the possible values are specified in section 6.1 of <a href="https://datatracker.ietf.org/doc/html/rfc2045">RFC2045</a>.</td>
<td></td>
<td>O</td>
</tr>
</tbody>
</table>

The MIME part for the human readable content SHALL NOT include a Content-Disposition of attachment. The intent for the human readable content is to have the content directly readable within an edge client. The human readable content appears in the message without taking additional action such as opening an attachment.

When the message includes an XDM attachment, the MIME part for the human readable message body SHALL be first.

CMS requires messages “convey, at a minimum, the patient’s basic personal or demographic information, as well as the name of the sending institution (that is, the hospital), and, if not prohibited by other applicable law, diagnosis.”

In order to ensure that any receiver of the Notification, regardless of their ability to process an HL7 V2.5.1 message or any other allowable attachment, this IG requires the following minimum data content be sent as a part of the body of the message:

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 18%" />
<col style="width: 24%" />
<col style="width: 22%" />
<col style="width: 22%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Number</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>Content</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td><p>(15)</p>
<p>or</p>
<p>(38)</p></td>
<td>Notification Type</td>
<td><a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>: activity-code XD: typeCode</td>
<td>D</td>
<td>R</td>
</tr>
<tr>
<td>(42)</td>
<td>Event Date/Time</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.2.1">EVN-2.1 - Recorded Date/Time-Time</a></td>
<td>Event Date/Time represents the date and time at the location where the event occurred.</td>
<td>R</td>
</tr>
<tr>
<td>(47-50)</td>
<td>Patient Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5">PID-5 – Patient Name</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(52)</td>
<td>Patient DOB</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.7">PID-7 - Date/Time of Birth</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(53)</td>
<td>Patient Gender</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.8">PID-8 – Administrative Sex</a></td>
<td>A</td>
<td>R</td>
</tr>
<tr>
<td>(75)</td>
<td>Treating Facility</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.3.9">PV1-3.9 - Assigned Patient Location.Location Description</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(72)</td>
<td>Treating Facility Identifier (Type 2 NPI)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.7.2">EVN-7.2 – Event Facility.Universal Id</a></td>
<td></td>
<td></td>
</tr>
<tr>
<td>(99)</td>
<td>Diagnosis</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.2">DG1-3.2* Diagnosis Code DG1.Text</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(77)</td>
<td>Admission Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.4">PV1-4 – Admission Type</a></td>
<td>L</td>
<td>RE</td>
</tr>
<tr>
<td>(97)</td>
<td>Admission Reason</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.3">PV2-3 – Admit Reason</a></td>
<td></td>
<td><p>R when event type is admission.</p>
<p>RE when event type is discharge/transfer</p></td>
</tr>
<tr>
<td>(88)</td>
<td>Treating Provider (Admitting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.1">PV1-17.1 – Admitting Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(89)</td>
<td>Treating Provider (Admitting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.2">PV1-17.2 – Admitting Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(90)</td>
<td>Treating Provider (Admitting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.3">PV1-17.3 – Admitting Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(92)</td>
<td>Treating Provider (Admitting) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4 - Phone.Email Address</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(79.A)</td>
<td>Treating Provider (Attending) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.1">PV1-7.1 – Attending Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(79)</td>
<td>Treating Provider (Attending) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.2">PV1-7.2 – Attending Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(80)</td>
<td>Treating Provider (Attending) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.3">PV1-7.3 – Attending Doctor.Given Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(82)</td>
<td>Treating Provider (Attending) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4 - Phone.Email Address</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(83)</td>
<td>Treating Provider (Consulting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.1">PV1-9.1 – Consulting Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(84)</td>
<td>Treating Provider (Consulting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.2">PV1-9.2 – Consulting Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(85)</td>
<td>Treating Provider (Consulting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.3">PV1-9.3 – Consulting Doctor.Given Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(87)</td>
<td>Treating Provider (Consulting) Direct address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4 - Phone.Email Address</a></td>
<td></td>
<td>RE‡</td>
</tr>
</tbody>
</table>

***‡** For Treating Provider, at least one of Attending, Consulting or Admitting Doctor is Required.*

*\*
