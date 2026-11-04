---
title: "Vocabulary"
---

# 5.1 Value Sets Used in this Implementation Guide

<table style="width:100%;">
<colgroup>
<col style="width: 8%" />
<col style="width: 39%" />
<col style="width: 52%" />
</colgroup>
<thead>
<tr>
<th><strong>VS ID</strong></th>
<th><strong>Value Set Name</strong></th>
<th><strong>Value Set Expansion Location (or an enumerated coded concept to be used if a Value Set Expansion is not defined elsewhere)</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>A</td>
<td>Administrative Sex</td>
<td><p>As an example, if needed, below is a mapping between V2 Administrative Sex value set and V3 Administrative Gender Value Set.</p>
<table style="width:50%;">
<colgroup>
<col style="width: 25%" />
<col style="width: 25%" />
</colgroup>
<thead>
<tr>
<th>Administrative Sex</th>
<th>Administrative Gender</th>
</tr>
</thead>
<tbody>
<tr>
<td>F</td>
<td>F</td>
</tr>
<tr>
<td>M</td>
<td>M</td>
</tr>
<tr>
<td>A</td>
<td>UN</td>
</tr>
<tr>
<td>N</td>
<td>NA</td>
</tr>
<tr>
<td>O</td>
<td>OTH</td>
</tr>
<tr>
<td>U</td>
<td>UNK</td>
</tr>
</tbody>
</table>
<p><a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0001.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0001.html</a></p></td>
</tr>
<tr>
<td>B</td>
<td>Diagnosis Type (0052)</td>
<td><a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0052.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0052.html</a></td>
</tr>
<tr>
<td>C</td>
<td></td>
<td>Not needed</td>
</tr>
<tr>
<td>D</td>
<td>Notification Note Types</td>
<td>Table in Section <a href="#loinc-codes-for-use-in-context-and-xdm-metadata">5.1.1</a></td>
</tr>
<tr>
<td>E</td>
<td>Healthcare Facility Type Code</td>
<td><a href="http://hl7.org/fhir/R4/valueset-c80-facilitycodes.html">http://hl7.org/fhir/R4/valueset-c80-facilitycodes.html</a></td>
</tr>
<tr>
<td>F</td>
<td>languageCode</td>
<td>Coded identifiers as described by the IETF (Internet Engineering Task Force) <a href="https://www.ietf.org/rfc/rfc3066.txt">RFC 3066</a>, conformant with IHE requirements</td>
</tr>
<tr>
<td>G</td>
<td>Practice Setting</td>
<td><a href="http://hl7.org/fhir/R4/valueset-c80-practice-codes.html">http://hl7.org/fhir/R4/valueset-c80-practice-codes.html</a></td>
</tr>
<tr>
<td>H</td>
<td>Event Types</td>
<td><p>A01 Admit/visit notification</p>
<p>A02 Transfer a patient</p>
<p>A03 Discharge/end visit</p>
<p>A04 Register a patient</p>
<p>A06 Change an outpatient to an Inpatient</p>
<p>A09 Emergency department Departure notification</p>
<p>A10 Emergency department Arrival notification</p>
<p><em>Note this IG does not restrict Notification Initiators from distributing additional event types to support specific use cases that need more event types. Definitions of filtering mechanisms by any actor are out of scope.</em></p></td>
</tr>
<tr>
<td>I</td>
<td>Provider Role (0443)</td>
<td>For Recipient, specifically expect to see one of PP or FHCP. For Treating Facility, specifically expect to see TF (note this is an extension to the Provider Role value set) <a href="https://terminology.hl7.org/2.1.0/ValueSet-v2-0443.html">https://terminology.hl7.org/2.1.0/ValueSet-v2-0443.html</a></td>
</tr>
<tr>
<td>J</td>
<td>Patient Class (0004) with extensions defined here to add codes for Observation and Short Stay</td>
<td><p>All codes in Patient Class value set with these additions:</p>
<p>V Observation Table in Section 5.1.2</p>
<p>S Short Stay</p>
<p><a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0004.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0004.html</a></p></td>
</tr>
<tr>
<td>K</td>
<td>Coding Systems (0396)</td>
<td><p>This Standard restricts the possible coding systems I10 ICD-10</p>
<p>SCT SNOMED-CT</p>
<p><a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0396.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0396.html</a></p></td>
</tr>
<tr>
<td>L</td>
<td>Admission Type (0007)</td>
<td><p><a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0007.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0007.html</a></p>
<p>![Woman with stroller](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-1.svg)Note: For Newborn birth in healthcare facility use code N.</p></td>
</tr>
<tr>
<td>M</td>
<td>Discharge Disposition (0112)</td>
<td>The code values to be used in <a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.36">PV1-36</a> should be from the NUBC UB-04 Patient Discharge Status codes used in Form Locator 17.</td>
</tr>
<tr>
<td>N</td>
<td></td>
<td>Not needed</td>
</tr>
<tr>
<td>O</td>
<td></td>
<td>Not needed</td>
</tr>
<tr>
<td>P</td>
<td><p>Health Insurance Type</p>
<p>2.16.840.1.113883.3.88.12.3221.5.2</p></td>
<td>This is a X12 value set and is not available through the VSAC.</td>
</tr>
<tr>
<td>Q</td>
<td>Telecom Use Code (0201)</td>
<td><p>Use DSM for Direct Secure Messaging addresses</p>
<p>https://terminology.hl7.org/ValueSet-v2-0201.html</p></td>
</tr>
</tbody>
</table>

## LOINC Codes for Use in Context and XDM Metadata

| **Code** | **Display** | **Definition** |
|----|----|----|
| [86530-3](https://loinc.org/86530-3/) | Visit notification | Visit notification - the most general code |
| [86532-9](https://loinc.org/86532-9/) | Admission notification | Admission notification |
| [86531-1](https://loinc.org/86531-1/) | Discharge notification | Discharge notification |
| [79429-7](https://loinc.org/79429-7/) | Hospital Admission notification | Admission notification |
| [79430-5](https://loinc.org/79430-5/) | Hospital Discharge notification | Discharge notification |
| [80110-0](https://loinc.org/80110-0/) | Emergency department Visit notification | Visit notification - most general for ED notifications |
| [98141-5](https://loinc.org/98141-5/) | Emergency department Admission notification | ED notification of the admission event |
| [98142-3](https://loinc.org/98142-3/) | Emergency department Discharge notification | ED notification of the discharge event |
| [98143-1](https://loinc.org/98143-1/) | Emergency department Arrival notification | ED notification of the arrival even - happens before being admitted |
| [98144-9](https://loinc.org/98144-9/) | Emergency department Departure notification | ED notification of the departure event |
| [98145-6](https://loinc.org/98145-6/) | Outpatient Visit notification | Outpatient Visit notification |

**General Guidance:**

In XDM metadata Document Entries include two fields that help systems process the included content: classCode (26) and typeCode (38). The classCode uses very prescriptive LOINC codes that help systems broadly identify what kind of information is included. The typeCode offers more specific information, if it is available, to support more refined workflows. When populating classCodes, initiating systems sharing ADT event notifications conformant to this specification must use very specific LOINC codes:

- [56444-3](https://loinc.org/56444-3/) for the human readable content

- [86530-3](https://loinc.org/86530-3/) for the V2 ADT message

When populating typeCode for the V2 message content, initiating systems should use the most specific LOINC code they are able to apply. If no appropriate code is available for a combination of ADT event type and Patient Class, the initiating system uses the most specific code that would apply. For example, for a notification of admission to a Skilled Nursing facility, use [86532-9](https://loinc.org/86532-9/) (Admission Notification).

The Submission Set contentTypeCode (17) uses the same LOINC code as the Document Entry typeCode (38) for the V2 message.

### Examples utilizing LOINC Codes in XDM Metadata

*Note: Using LOINC codes in Document Entries to indicate the classCode (26) of the document.*

In the Document Entry for the file that holds the human readable content (Document 1 in this example) the classCode uses LOINC Code [56444-3](https://loinc.org/56444-3/) to indicate this content is the human readable healthcare communication. By convention established for the IHE XDM transaction, this code is used to identify the inclusion of a document that holds the human readable content.

![Graphical user interface, text, application, email Description automatically generated](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-2.png)

In the Document Entry for the file that holds the HL7 V2 message content (Document 2 in this example) the classCode uses LOINC Code [86530-3](https://loinc.org/86530-3/) to indicate this content is the machine processable ADT notification message.

![Graphical user interface, text, application, email Description automatically generated](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-3.png)

**DocumentEntry.typeCode (38)**

(See Reference, IHE Guide [4.2.3.2.25](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.2.25))

**Description:** The code specifies the precise type of document from the user’s perspective. It is recommended that the creating entity draw these values from a coding scheme providing a fine level of granularity such as LOINC.

**Coding:** Coded as an ebRIM classification. (See reference, IHE Guide [4.2.3.1.2](https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.2) for a description on creating classifications). Shall have zero or one value.

The following example specifies typeCod”=”ExampletypeCo”e” with display nam“ “typeCodeDisplayNam“ “ and coding schem“ “ Example Type Code Schem“ “ for the DocumentEntry labele“ “ExampleDocume”t”.

![Graphical user interface, text, application, email Description automatically generated](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-4.png)

**Document Entry: typeCode (38)**

The Document Entry typeCode carries a more specific classification of the type of event to facilitate more granular workflow management.

![Graphical user interface, application Description automatically generated](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-5.png)

**Submission Set: contentTypeCode (17)**

Supports carrying a more specific classification of the type of event to facilitate more granular workflow management. This should be identical to the document entry typeCode of the document entry for the V2 message.

![Graphical user interface, text, application, email Description automatically generated](/images/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide-6.png)

## Patient Class Table 0004 with Extensions

(Value Set J)

<table>
<colgroup>
<col style="width: 9%" />
<col style="width: 31%" />
<col style="width: 31%" />
<col style="width: 28%" />
</colgroup>
<thead>
<tr>
<th><strong>Code</strong></th>
<th><strong>Display</strong></th>
<th><strong>Definition</strong></th>
<th><strong>ActEncounterCode</strong> ¶</th>
</tr>
</thead>
<tbody>
<tr>
<td>E</td>
<td>Emergency</td>
<td>Emergency</td>
<td>EMER</td>
</tr>
<tr>
<td>I</td>
<td>Inpatient</td>
<td>Inpatient</td>
<td><p>IMP</p>
<p>ACUTE</p>
<p>NONAC</p></td>
</tr>
<tr>
<td>O</td>
<td>Outpatient</td>
<td>Outpatient</td>
<td>AMB</td>
</tr>
<tr>
<td>P</td>
<td>Preadmit</td>
<td>Preadmit</td>
<td>PRENC</td>
</tr>
<tr>
<td>R</td>
<td>Recurring patient</td>
<td>Recurring patient</td>
<td></td>
</tr>
<tr>
<td>B</td>
<td>Obstetrics</td>
<td>Obstetrics</td>
<td></td>
</tr>
<tr>
<td>C</td>
<td>Commercial Account</td>
<td>Commercial Account</td>
<td></td>
</tr>
<tr>
<td>N</td>
<td>Not Applicable</td>
<td>Not Applicable</td>
<td></td>
</tr>
<tr>
<td>U</td>
<td>Unknown</td>
<td>Unknown</td>
<td></td>
</tr>
<tr>
<td>S ‖</td>
<td>Short Stay</td>
<td>Short Stay</td>
<td>SS</td>
</tr>
<tr>
<td>V ‖</td>
<td>Observation</td>
<td>Observation</td>
<td>OBSENC</td>
</tr>
</tbody>
</table>

*‖ Extensions*

*¶ Cross reference to HL7 V3 ActEncounterCode*

## Provider Role Table 0443 with Extensions

(Value Set I)

| **Code** | **Display** | **Comment** |
|----|----|----|
| AD | Admitting | [PV1-17 Admitting doctor](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.17.3) |
| AT | Attending | [PV1-7 Attending doctor](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.7) |
| CP | Consulting Provider |  |
| FHCP | Family Health Care Professional |  |
| PP | Primary Care Provider |  |
| RP | Referring Provider | [PV1-8 Referring doctor](https://hl7-definition.caristix.com/v2/HL7v2.5.1/Fields/PV1.8) |
| RT | Referred to Provider |  |
| TF ‖ | Treating Facility |  |

‖ Extensions
