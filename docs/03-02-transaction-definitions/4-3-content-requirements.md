---
title: "4.3 Content Requirements"
---

# 4.3 Content Requirements

HL7 V2.5.1 was chosen as the baseline data content payload standard as it is referenced as the qualification requirement for CMS’s Conditions of Participation per the CMS Interoperability and Patient Access Final Rule ([CMS-9115-F](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)). References to data elements are based on HL7 V2.5.1. If a later (or earlier version) of the HL7 V2 standard is sent, the equivalent data element must be used. For example, if HL7 V2.7.1 is sent, the Patient’s phone number is sent in PID-40, rather than PID-13 as referenced for HL7 V.2.5.1. If an HL7 V2.5.1 element has a different element in an earlier version, it will be identified with an “\*”.

If an HL7 V2.5.1 element has a different element in a later version, it will be identified with a “†”.ADT message must be fully compliant with the data requirements of the HL7 V2 version being sent, including value set tables suggested in the HL7 V2 Standard unless otherwise specified in this Implementation Guide. Elements that have been withdrawn from that version SHALL NOT be sent.

The minimum requirements to comply with the CMS Interoperability and Patient Access Final Rule ([CMS-9115-F](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)) require that messages “convey, at a minimum, the patient’s basic personal or demographic information, as well as the name of the sending institution (that is, the hospital), and, if not prohibited by other applicable law, diagnosis”.

## MIME Part Elements for the V2 Message

***Note:** These requirements are only relevant when the notification message is using the* [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions) *format.*

|  |  |  |  |  |
|----|----|----|----|----|
| **Data Element Number** | **Context Element** | **Value** | **Value Set** | **Context/Metadata Requirement** |
| \(2\) | Content-Type | application/hl7v2+er7 | Fixed value | R |
| \(3\) | Content-Transfer-Encoding | This is an optional field and the possible values are specified in section 6.1 of RFC2045. |  | O |
| \(5\) | Content-Disposition | attachment; filename=ADTmessage.txt | Fixed value | R |

## Content in V2 Format

***Note:** These requirements apply to the V2 message content contained in the Document Entry of the XDM package or contained within the Content MIME-part of the message using Content IG format.*

### MSH – Message Headers

|  |  |  |  |  |
|----|----|----|----|----|
| **Data Element Numbers** | **Element Name** | **V2 Element** | **Value Set** | **Requirement** |
| (40A) | Message Code | [MSH-9.1 – Message Type.Message Code](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.9.1) |  | R |
| (40B) | Trigger Event | [MSH-9.2 – Message Type.Trigger Event\*](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.9.2) | H | R |
| \(41\) | Transaction ID | [MSH-10 - Message Control ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.10) |  | R |
| \(43\) | Version ID | [MSH-12 – Version ID](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/MSH.12) | 2.5.1 | R |

### EVN – Event Type

<table style="width:100%;">
<colgroup>
<col style="width: 13%" />
<col style="width: 13%" />
<col style="width: 22%" />
<col style="width: 32%" />
<col style="width: 18%" />
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
<td>(42)</td>
<td>Event Date/ Time</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.2.1">EVN 2.1 – Recorded Date/Time.Time</a></td>
<td>Actual date/time of the event. UTC offset is required [+/-ZZZZ]</td>
<td>R</td>
</tr>
<tr>
<td>(110)</td>
<td>Time</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.2.1">EVN-2.1 – Recorded Date/Time.Time</a></td>
<td>UTC offset is required [+/-ZZZZ]</td>
<td>R</td>
</tr>
<tr>
<td>(72)</td>
<td><p>Treating Facility Identifier</p>
<p>(Type 2 NPI)</p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.7.2">EVN-7.2 – Event Facility.Universal Id</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(111)</td>
<td>Universal Id Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/EVN.7.3">EVN-7.3 – Event Facility.Universal Id Type</a></td>
<td><p>NPI</p>
<p><em>Note: This code is available in http://terminology.hl7.org/CodeSystem/v2-0301 version 2.9.1</em></p></td>
<td>R</td>
</tr>
<tr>
<td><p><strong>Data</strong></p>
<p><strong>Element Numbers</strong></p></td>
<td><strong>Element Name</strong></td>
<td style="text-align: center;"><strong>V2 Element</strong></td>
<td style="text-align: center;"><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(11m)</td>
<td>directAddress</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.4">PID-13.4 – Phone Number – Home.Email Address</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(44)</td>
<td><p>Patient ID</p>
<p><em>NOTE: PID-3 is a repeating element. The MRN is recommended in the first repetition. If additional Patient IDs are sent, the ID Type must be sent in PID-3.5 (e.g. MRN, SSN)</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1">PID-3.1 - Patient Identifier List.Id Number</a></td>
<td style="text-align: center;"></td>
<td>R</td>
</tr>
<tr>
<td>(45)</td>
<td>Patient ID Type</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.5">PID-3.5 - Patient Identifier List.Identifier Type Code</a></td>
<td style="text-align: center;"></td>
<td><p>RE</p>
<p>NOTE: Required if more than one repetition of PID-3 is used.</p></td>
</tr>
<tr>
<td>(46)</td>
<td><p>Patient SSN Last 4 digits</p>
<p><em>NOTE: Limit to last 4 digits</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.3.1">PID-3.1* - Patient Identifier List.Id Number</a></td>
<td style="text-align: center;"></td>
<td>O</td>
</tr>
<tr>
<td>(47)</td>
<td><p>Patient First Name</p>
<p><em>NOTE: PID-5 is a repeating element. The Patient’s Legal Name should be sent in the first repetition of PID-5</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.2">PID-5.2 - Patient Name.Given Name</a></td>
<td style="text-align: center;"></td>
<td>R</td>
</tr>
<tr>
<td>(48)</td>
<td>Patient Last Name</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.1">PID-5.1 - Patient Name.Family Name</a></td>
<td style="text-align: center;"></td>
<td>R</td>
</tr>
<tr>
<td>(49)</td>
<td>Patient Middle Name</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.3">PID-5.3 - Patient Name.Second And Further Given Names Or Initials Thereof</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(50)</td>
<td>Patient Suffix</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.4">PID-5.4 - Patient Name.Suffix (e.g., Jr Or Iii)</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(51)</td>
<td><p>Patient Alias</p>
<p><em>NOTE: Patient Alias Name is recommended if available and differs from the Patient Legal Name. If a Patient Alias Name is sent in a repetition of PID-5, PID-5.7 must contain “A”</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.5.7">PID-5.7* - Patient Name.Name Type Code</a></td>
<td style="text-align: center;"></td>
<td>O</td>
</tr>
<tr>
<td>(52)</td>
<td><p>Patient Date of Birth</p>
<p><em>Note: For patient demographic matching only date information (YYYYMMDD) should be used.</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.7">PID-7 - Date/Time of Birth</a></td>
<td style="text-align: center;"></td>
<td>R</td>
</tr>
<tr>
<td>(53)</td>
<td>Patient Gender</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.8">PID-8 - Administrative Sex</a></td>
<td style="text-align: center;">A</td>
<td>R</td>
</tr>
<tr>
<td>(54)</td>
<td>Patient Street Address</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.1">PID-11.1 - Patient Address.Street Address</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(55)</td>
<td>Patient Street Address 2</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.2">PID-11.2 - Patient Address.Other Designation</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(56)</td>
<td>Patient City</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.3">PID-11.3 - Patient Address.City</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(57)</td>
<td>Patient State</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.4">PID-11.4 - Patient Address.State Or Province</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(58)</td>
<td>Patient ZIP</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.5">PID-11.5 - Patient Address.Zip Or Postal Code</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(59)</td>
<td>Patient Country - if not US</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.11.6">PID-11.6 - Patient Address.Country</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(60)</td>
<td>Patient Telephone Number</td>
<td style="text-align: center;"><p><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.6">PID-13.6*† - Phone Number – Home.Area/City Code</a></p>
<p><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.7">PID-13.7*† - Phone Number – Home.Local Number</a></p></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(61)</td>
<td>Patient Telephone Number Type</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.2">PID-13.2† - Phone Number - Home.Telecommunication Use Code</a></td>
<td style="text-align: center;">Q</td>
<td>RE</td>
</tr>
<tr>
<td>(62)</td>
<td>Patient email</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.13.4">PID-13.4† - Phone Number - Home.Email Address</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(63)</td>
<td>Patient Account Number</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/PID.18">PID-18 - Patient Account Number</a></td>
<td style="text-align: center;"></td>
<td>R</td>
</tr>
<tr>
<td>(64)</td>
<td>Patient Date of Death</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PID.29">PID-29 - Patient Death Date and Time</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td style="text-align: center;"><p><strong>ROL Segment Usage</strong></p>
<p>In HL7 Version 2 (V2) messages, such as the ADT (Admit, Discharge, Transfer) message, the ROL (Role) segment is used to convey information about roles or relationships between various entities involved in healthcare transactions. The ROL segment can appear multiple times within an ADT message.</p>
<p>The order of the ROL segment in the message indicates the meaning and purpose of each ROL segment. The ROL segment that follows the PID segment or optional PD1 segment contains information about the Patient’s Primary Care Organization and Practitioner (PCP). The ROL segments that follow the PV1 and PV2 segments convey information about Care Organizations and Practitioners involved in the patient visit associated with this ADT.</p>
<p>See Section <a href="#pv2-patient-visit-additional-information">4.3.2.7</a>.</p></td>
</tr>
</tbody>
</table>

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 32%" />
<col style="width: 25%" />
<col style="width: 12%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Numbers</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(65)</td>
<td>Role</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.3.1">ROL-3.1 – Role-ROL. Identifier</a></td>
<td>PP (Primary Care Provider)</td>
<td>RE</td>
</tr>
<tr>
<td>(66)</td>
<td><p>Person Identifier (NPI)</p>
<p><em>NOTE: Type 1 NPI if the entity is an Individual</em></p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.4.1">ROL-4.1*† - Role Person.Id Number</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(67)</td>
<td>Person Last Name</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.4.2">ROL-4.2*† - Role Person.Family Name</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(68)</td>
<td>Person First Name</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.4.3">ROL-4.3*† - Role Person.Given Name</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(69)</td>
<td>Organization Identifier (NPI)</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.4.1">ROL-4.1*† - Role Person.Id Number</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td>(70)</td>
<td>Organization Name</td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.7.1/Fields/ROL.4.2">ROL-4.2*† - Role Person.Family Name</a></td>
<td style="text-align: center;"></td>
<td>RE</td>
</tr>
<tr>
<td><p>(82)</p>
<p>(87)</p>
<p>(92)</p></td>
<td><p>Treating Provider (Attending) Direct address</p>
<p>Treating Provider (Consulting) Direct address</p>
<p>Treating Provider (Admitting) Direct address</p></td>
<td style="text-align: center;"><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td>Q</td>
<td>RE</td>
</tr>
</tbody>
</table>

### NK1 - Next of Kin/Associated Parties

| **Data Element Numbers** | **Element Name** | **V2 Element** | **Value Set** | **Requirement** |
|----|----|----|----|----|
| \(112\) | Mother’s Name ![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-1.svg) | [NK1-2 – NK Name](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.2) |  | RE |
| \(113\) | Relationship![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-2.svg) | [NK1-3 - Relationship](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.3) | MTH (Mother) | RE |
| \(114\) | Mother’s Address![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-3.svg) | [NK1-4 - Address](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.4) |  | RE |
| \(115\) | Mother’s Phone Number![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-4.svg) | [NK1-5.1 – Phone Number.Telephone Number](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/NK1.5.1) |  | RE |

![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-5.svg) - See Appendix

### PV1 – Patient Visit

<table style="width:100%;">
<colgroup>
<col style="width: 13%" />
<col style="width: 29%" />
<col style="width: 23%" />
<col style="width: 14%" />
<col style="width: 19%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Numbers</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(73)</td>
<td>Patient Class</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.2">PV1-2 - Patient Class</a></td>
<td>J</td>
<td>R</td>
</tr>
<tr>
<td>(74)</td>
<td>Assigned Patient Location – Point of Care</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.3.1">PV1-3.1 - Assigned Patient Location.Point Of Care</a></td>
<td></td>
<td><p>RE</p>
<p><em>NOTE: Required if known - for A02 Transfer event</em></p></td>
</tr>
<tr>
<td>(75)</td>
<td><p>Treating Facility Name – Location Description</p>
<p><em>NOTE: The treating facility name SHOULD be distinctive enough that it uniquely identifies the physical location where the patient is or was being treated</em></p>
<p><em>NOTE: The Treating Facility Address should be sent in a corresponding ROL segment in ROL-11 with ROL-3 = TF.</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.3.9">PV1-3.9 - Assigned Patient Location.Location Description</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(77)</td>
<td>Admission Type ![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-6.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.4">PV1-4 - Admission Type</a></td>
<td>L</td>
<td>R</td>
</tr>
<tr>
<td>(78)</td>
<td><p>Prior Patient Location</p>
<p><em>NOTE: Required if known - for A02 Transfer event</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.6">PV1-6 - Prior Patient Location</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(93)</td>
<td>Visit Number</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.19">PV1-19 - Visit Number</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(94)</td>
<td>Discharge Disposition</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.36">PV1-36 - Discharge Disposition</a></td>
<td>M</td>
<td><p>RE</p>
<p><em>NOTE: Required - for Discharge events</em></p></td>
</tr>
<tr>
<td>(95)</td>
<td>Discharged to Location</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.37">PV1-37 - Discharged to Location</a></td>
<td></td>
<td><p>RE</p>
<p><em>NOTE: Required if known - for Discharge events</em></p></td>
</tr>
<tr>
<td>(96)</td>
<td>Admit Date</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.44">PV1-44 - Admit Date/Time</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(117)</td>
<td>Discharge Date</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.7/Fields/PV1.45">PV1-45 – Discharge Date/Time</a></td>
<td></td>
<td>O</td>
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
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.2">PV1-7.2 - Attending Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(80)</td>
<td>Treating Provider (Attending) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7.3">PV1-7.3 - Attending Doctor.Given Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(83)</td>
<td>Treating Provider (Consulting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.1">PV1-9.1 - Consulting Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(84)</td>
<td>Treating Provider (Consulting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.2">PV1-9.2 - Consulting Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(85)</td>
<td>Treating Provider (Consulting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.9.3">PV1-9.3 - Consulting Doctor.Given Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(88)</td>
<td>Treating Provider (Admitting) NPI</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.1">PV1-17.1 - Admitting Doctor.Id Number</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(89)</td>
<td>Treating Provider (Admitting) Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.2">PV1-17.2 - Admitting Doctor.Family Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
<tr>
<td>(90)</td>
<td>Treating Provider (Admitting) First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.3">PV1-17.3 - Admitting Doctor.Given Name</a></td>
<td></td>
<td>RE‡</td>
</tr>
</tbody>
</table>

***‡** For Treating Provider, at least one of Attending, Consulting or Admitting Doctor is Required*

![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-7.svg)*- See appendix*

### PV2 – Patient Visit – Additional Information

<table style="width:100%;">
<colgroup>
<col style="width: 13%" />
<col style="width: 29%" />
<col style="width: 23%" />
<col style="width: 14%" />
<col style="width: 19%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Numbers</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(97)</td>
<td>Admission Reason</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.3">PV2-3 - Admit Reason</a></td>
<td></td>
<td><p>RE</p>
<p>Required - for Admission event</p>
<p>Required if known - for Discharge/ Transfer event</p></td>
</tr>
<tr>
<td>(75)</td>
<td><p>Treating Facility Name</p>
<p><em>NOTE: The treating facility name SHOULD be distinctive enough that it uniquely identifies the physical location where the patient is or was being treated.</em></p>
<p><em>NOTE: The Treating Facility Address should be sent in a corresponding ROL segment in ROL-11 with ROL-3.1 = TF</em></p>
<p><em>NOTE: The Treating Facility Name should correspond with the Organizations identified in the EVN-7.2 and ROL with ROL-3.1 = TF</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.23.1">PV2-23.1 – Clinic Organization Name.Organization Name</a></td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(116)</td>
<td>Newborn Baby Indicator ![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-8.svg)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV2.36">PV2-36 – Newborn Baby Indicator</a></td>
<td></td>
<td>O</td>
</tr>
</tbody>
</table>

![Woman with stroller](/images/04-messaging-requirements/4-3-content-requirements-9.svg) - See Appendix

### ROL - Role (Treating Providers and Treating Facility)

The ROL segment in this position (following PV1 and the optional PV2 if present) is linked to the patient visit identified in the PV1 segment. If ROL-3.1 = AD, it is linked to the entity identified in [PV1-17](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.3). If ROL-3.1 = AT, it is linked to the entity identified in [PV1-7](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7). If ROL-3.1 = RP, it is linked to the entity identified in [PV1-8](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.8).

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 34%" />
<col style="width: 26%" />
<col style="width: 10%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Numbers</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(65)</td>
<td>Role</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.3.1">ROL-3.1 – Role-ROL. Identifier</a></td>
<td>I</td>
<td>RE</td>
</tr>
<tr>
<td>(66)</td>
<td><p>Person Identifier (NPI)</p>
<p><em>NOTE: Type 1 NPI if the entity is an Individual</em></p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.1">ROL-4.1*† - Role Person.Id Number</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(67)</td>
<td>Person Last Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.2">ROL-4.2*† - Role Person.Family Name</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(68)</td>
<td>Person First Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.3">ROL-4.3*† - Role Person.Given Name</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(69)</td>
<td>Organization Identifier (NPI)</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.1">ROL-4.1*† - Role Person.Id Number</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(70)</td>
<td>Organization Name</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.4.2">ROL-4.2*† - Role Person.Family Name</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(76)</td>
<td>Treating Facility Address</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.11">ROL-11 - Office/Home Address/Birthplace</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td><p>(71)</p>
<p>(82)</p>
<p>(87)</p>
<p>(92)</p></td>
<td><p>Person or Organization Direct address</p>
<p>Treating Provider (Attending) Direct address</p>
<p>Treating Provider (Consulting) Direct address</p>
<p>Treating Provider (Admitting) Direct address</p></td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/ROL.12.4">ROL-12.4-Phone.Email Address</a></td>
<td>Q</td>
<td>RE</td>
</tr>
</tbody>
</table>

### DG1 – Diagnosis

<table style="width:100%;">
<colgroup>
<col style="width: 13%" />
<col style="width: 29%" />
<col style="width: 24%" />
<col style="width: 15%" />
<col style="width: 16%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Numbers</strong></td>
<td><strong>Element Name</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Value Set</strong></td>
<td><strong>Requirement</strong></td>
</tr>
<tr>
<td>(98)</td>
<td>Diagnosis Code</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.1">DG1-3.1 - Diagnosis Code - DG1.Identifier</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(99)</td>
<td>Diagnosis Description</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.2">DG1-3.2* - Diagnosis Code - DG1.Text</a></td>
<td></td>
<td>RE</td>
</tr>
<tr>
<td>(100)</td>
<td>Diagnosis Coding System</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.3.3">DG1-3.3* - Diagnosis Code - DG1.Name Of Coding System</a></td>
<td>K</td>
<td><p>RE</p>
<p>Required if Diagnosis Code sent</p></td>
</tr>
<tr>
<td>(101)</td>
<td>Diagnosis Type</td>
<td><a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/DG1.6">DG1-6 - Diagnosis Type</a></td>
<td>B</td>
<td><p>R</p>
<p>Required if Diagnosis Code sent</p></td>
</tr>
</tbody>
</table>

### IN1 – Insurance

|  |  |  |  |  |
|----|----|----|----|----|
| **Data Element Numbers** | **Element Name** | **V2 Element** | **Value Set** | **Requirement** |
| \(102\) | Insurance Company Name | [IN1-4 - Insurance Company Name](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.4) |  | RE |
| \(103\) | Insurance Group Number | [IN1-8 - Group Number](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.8) |  | RE |
| \(104\) | Insurance Type | [IN1-15 - Plan Type](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.15) | P | RE |
| \(105\) | Patient Insurance Member ID | [IN1-36 - Policy Number](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.36) |  | RE |
| \(106\) | Insured’s ID Number | [IN1-49 – Insured’s ID Number](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/IN1.49) |  | RE |

## Mapping Context IG Metadata and XD Metadata Elements to and from V2 Content Elements

<table>
<colgroup>
<col style="width: 20%" />
<col style="width: 13%" />
<col style="width: 18%" />
<col style="width: 19%" />
<col style="width: 28%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Number</strong></td>
<td><strong>V2 Element</strong></td>
<td><strong>Context IG Metadata Element</strong></td>
<td><strong>XD Metadata Element</strong></td>
<td><strong>Content Element</strong></td>
</tr>
<tr>
<td>(25)</td>
<td>PV2-23.1</td>
<td></td>
<td>SubmissionSet.AuthorInstitution</td>
<td><p>The Treating Facility identified in EVN-7.2 – Event Facility.Universal Id should have some correspondence to the Treating Facility described by name in the PV1 (PV1-3.9) segment.</p>
<p>The author should be the Treating Facility organization.</p></td>
</tr>
<tr>
<td>(15), (17)</td>
<td></td>
<td>activity-code</td>
<td>(submission set) contentTypeCode</td>
<td>MSH-9.2 (see mapping table below -4.3.3.1)</td>
</tr>
<tr>
<td>(7), (18)/ (29)</td>
<td></td>
<td>Id</td>
<td>entryUUID</td>
<td></td>
</tr>
<tr>
<td>(19)</td>
<td></td>
<td></td>
<td>intendedRecipient</td>
<td>At least one of the intended recipients should be the provider listed in the ROL segment with a ROL-3.1 code of PP or FHCP.</td>
</tr>
<tr>
<td>(7), (21)</td>
<td></td>
<td>Id</td>
<td>sourceId</td>
<td></td>
</tr>
<tr>
<td>(22)</td>
<td></td>
<td></td>
<td>submissionTime</td>
<td><em>Note that submissionTime may or may not be the same as the actual event date/time. Event date/time is found in EVN-2.1. SubmissionTime is the time the message was submitted to be distributed.</em></td>
</tr>
<tr>
<td>(7), (24)</td>
<td></td>
<td>id</td>
<td>uniqueId</td>
<td></td>
</tr>
<tr>
<td>(14), (26)</td>
<td></td>
<td>type-code</td>
<td><p>(Document entry)</p>
<p>classCode</p></td>
<td>Fixed Values</td>
</tr>
<tr>
<td>(12), (28)</td>
<td></td>
<td>creation-time</td>
<td>creationTime</td>
<td><em>Note that creation-time may or may not be the same as the actual event date/time. Event date/time is found in EVN-2.1. CreationTime is the time the information in the document entry was created.</em></td>
</tr>
<tr>
<td>(13), (30)</td>
<td></td>
<td>profile</td>
<td>formatCode</td>
<td></td>
</tr>
<tr>
<td>(33)</td>
<td></td>
<td></td>
<td>mimeType</td>
<td></td>
</tr>
<tr>
<td>(8), (36)</td>
<td></td>
<td>patient-id</td>
<td>sourcePatientId</td>
<td></td>
</tr>
<tr>
<td>(11), (37)</td>
<td></td>
<td>Patient</td>
<td>sourcePatientInfo</td>
<td>PID</td>
</tr>
<tr>
<td>(11a), (37b)</td>
<td></td>
<td>givenName</td>
<td>Source patient name</td>
<td>PID-5.2</td>
</tr>
<tr>
<td>(11b)</td>
<td></td>
<td>surname</td>
<td>Source patient name</td>
<td>PID-5.1</td>
</tr>
<tr>
<td>(11c), (37b)</td>
<td></td>
<td>middleName</td>
<td>Source patient name</td>
<td>PID-5.3</td>
</tr>
<tr>
<td>(11d), (37e)</td>
<td></td>
<td>dateOfBirth</td>
<td>Source Patient date of birth</td>
<td>PID-7</td>
</tr>
<tr>
<td>(11e), (37f)</td>
<td></td>
<td>gender</td>
<td>Source patient administrative gender</td>
<td>PID-8</td>
</tr>
<tr>
<td>(11f), (37a)</td>
<td></td>
<td>socialSecurityNumber</td>
<td>Source patient identifier list</td>
<td>PID-3.1</td>
</tr>
<tr>
<td>(11g)</td>
<td></td>
<td>telephoneNumber</td>
<td></td>
<td>PID-13.2</td>
</tr>
<tr>
<td>(11h), (37g)</td>
<td></td>
<td>streetAddress</td>
<td>Source patient address</td>
<td>PID-11.1</td>
</tr>
<tr>
<td>(11i), (37g)</td>
<td></td>
<td>stateOrProvinceName</td>
<td>Source patient address</td>
<td>PID-11.4</td>
</tr>
<tr>
<td>(11j), (37g)</td>
<td></td>
<td>localityName</td>
<td>Source patient address</td>
<td>PID-11.3</td>
</tr>
<tr>
<td>(11k), (37g)</td>
<td></td>
<td>postalCode</td>
<td>Source patient address</td>
<td>PID-11.5</td>
</tr>
<tr>
<td>(11l), (37g)</td>
<td></td>
<td>country</td>
<td>Source patient address</td>
<td>PID-11.6</td>
</tr>
<tr>
<td>(11m)</td>
<td></td>
<td>directAddress</td>
<td></td>
<td>PID-13</td>
</tr>
<tr>
<td>(34), (37a)</td>
<td></td>
<td>patient-id</td>
<td>Source patient identifier list</td>
<td>PID-3.1</td>
</tr>
<tr>
<td>(17), (38)</td>
<td></td>
<td>activity-code</td>
<td>typeCode</td>
<td>MSH-9.2</td>
</tr>
<tr>
<td>(24)/ (39)</td>
<td></td>
<td></td>
<td>uniqueId</td>
<td><a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>🡪XD: Populate with the id of the V2 message in MSH Segment using MSH-10 Message Control ID.</td>
</tr>
</tbody>
</table>

### Mapping for Context type-code and Metadata (Submission Set) activity-code or (Document Entry) classCode to and from ADT Message Types

When represented in Context Elements, codes from LOINC use the code system 2.16.840.1.113883.6.1 and a colon (😊 preceding the code).

| **Context type-code (14)** | **Display** | **Metadata (Document Entry) classCode (26)** | **Content for MSH-9.1** |
|----|----|----|----|
| 86530-3 | Visit notification | 86530-3 | ADT |

Notifications Initiators are encouraged to be as specific as possible when populating this element.

<table style="width:100%;">
<colgroup>
<col style="width: 19%" />
<col style="width: 21%" />
<col style="width: 22%" />
<col style="width: 18%" />
<col style="width: 18%" />
</colgroup>
<thead>
<tr>
<th><strong>Context activity-code (15)</strong></th>
<th><strong>Display</strong></th>
<th><strong>Metadata (Submission Set) contentTypeCode (17)</strong></th>
<th><strong>Metadata (Document Entry) typeCode (38)</strong></th>
<th><strong>Content for MSH-9.2</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><a href="https://loinc.org/86530-3/">86530-3</a></td>
<td>Visit notification</td>
<td>86530-3</td>
<td>86530-3</td>
<td><p>A01 or</p>
<p>A03 or A02</p></td>
</tr>
<tr>
<td><a href="https://loinc.org/86532-9/">86532-9</a></td>
<td>Admission notification</td>
<td>86532-9</td>
<td>86532-9</td>
<td>A01 or A06</td>
</tr>
<tr>
<td><a href="https://loinc.org/86531-1/">86531-1</a></td>
<td>Discharge notification</td>
<td>86531-1</td>
<td>86531-1</td>
<td>A03</td>
</tr>
<tr>
<td><a href="https://loinc.org/79429-7/">79429-7</a></td>
<td>Hospital Admission notification</td>
<td>79429-7</td>
<td>79429-7</td>
<td>A01</td>
</tr>
<tr>
<td><a href="https://loinc.org/79430-5/">79430-5</a></td>
<td>Hospital Discharge notification</td>
<td>79430-5</td>
<td>79430-5</td>
<td>A02</td>
</tr>
<tr>
<td><a href="https://loinc.org/80110-0/">80110-0</a></td>
<td>Emergency department Visit notification</td>
<td>80110-0</td>
<td>80110-0</td>
<td>A01 or A03</td>
</tr>
<tr>
<td><a href="https://loinc.org/98141-5/">98141-5</a></td>
<td>Emergency department Admission notification</td>
<td>98141-5</td>
<td>98141-5</td>
<td>A01</td>
</tr>
<tr>
<td><a href="https://loinc.org/98142-3/">98142-3</a></td>
<td>Emergency department Discharge notification</td>
<td>98142-3</td>
<td>98142-3</td>
<td>A03</td>
</tr>
<tr>
<td><a href="https://loinc.org/98143-1/">98143-1</a></td>
<td>Emergency department Arrival notification</td>
<td>98143-1</td>
<td>98143-1</td>
<td>A10</td>
</tr>
<tr>
<td><a href="https://loinc.org/98144-9/">98144-9</a></td>
<td>Emergency department Departure notification</td>
<td>98144-9</td>
<td>98144-9</td>
<td>A09</td>
</tr>
<tr>
<td><a href="https://loinc.org/98145-6/">98145-6</a></td>
<td>Outpatient Visit notification</td>
<td>98145-6</td>
<td>98145-6</td>
<td>A03</td>
</tr>
</tbody>
</table>
