---
title: "4.2 Context/Metadata Requirements"
---

# 4.2 Context/Metadata Requirements

In order for the Recipient System to know that the inbound Direct Secure Message is an Unsolicited Notification and be able to accurately and efficiently route and process the message to the appropriate care team, department, and provider or automate a unique workflow, Sending HISPs SHALL provide the appropriate metadata to determine the purpose of the message and to help Recipient Systems identify to whom it may be of interest.

The Initiating System SHALL produce and include required context data elements either in the MIME part or in the XD Metadata packaged in XDM format by the Initiating System or the HISP.

The two different tables represent the two XDR Metadata levels:

1)  Submission Set Metadata – describes the entire contents of the XDM package and applies to all attachments

2)  Document Entry Metadata – describes each of the attachments within an XDM package.

For this IG, XDM packages SHALL contain information on one patient and for one event so only one HL7 V2 message will be included.

## Direct IG for Context Requirements

A sending system SHALL indicate its conformance to this guide by including the following header with the [RFC 822](https://datatracker.ietf.org/doc/html/rfc822) headers of the Health Content Container (as defined by [The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions))

*X-Direct-Context: \<cid-identifier\>*

The presence of the X-Direct-Context parameter indicates this IG is conformant to [the Context IG.](https://directtrust.org/standards/the-direct-standard/context-versions)

The MIME body of the conforming Health Content Container SHALL be a MIME multipart container. The *cid-identifier* in the *X-Direct-Context* header SHALL correspond to the value of a *Content-ID* header of the MIME part that contains the Metadata attachment (see Section 2.0 of this document), as per [RFC 2045](https://datatracker.ietf.org/doc/html/rfc2045). The MIME part referenced by the *Content-ID* header SHALL NOT be nested within another MIME multipart container. Only a single context is permitted per message. When multiple attachments are included by a sender, the same context SHALL apply to all attachments.

Below is a table showing the required Context Metadata for inclusion in messages that do not include an XDM payload. Metadata elements that are an extension of the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions) are defined below and listed in green.

### Context MIME part Requirements

<table>
<colgroup>
<col style="width: 12%" />
<col style="width: 16%" />
<col style="width: 35%" />
<col style="width: 9%" />
<col style="width: 25%" />
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
<td>(1)</td>
<td>X-Direct-Context</td>
<td>Message Header</td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(2)</td>
<td>Content-Type</td>
<td><p>The mimeType SHALL be text/plain.</p>
<p>You may include character type encoding. This is specified in section 2 of the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>. Any standard coding is supported.</p></td>
<td>Fixed Value</td>
<td>R</td>
</tr>
<tr>
<td>(3)</td>
<td>Content-Transfer-Encoding</td>
<td>This is an optional field and the possible values are specified in section 6.1 of <a href="https://datatracker.ietf.org/doc/html/rfc2045">RFC2045</a>.</td>
<td></td>
<td>O</td>
</tr>
<tr>
<td>(4)</td>
<td>Content-ID</td>
<td>This needs to be a GUID or other type of unique identifier. It must match the Content-ID used in the X-Direct-Context field in the message header.</td>
<td></td>
<td>R</td>
</tr>
<tr>
<td>(5)</td>
<td>Content-Disposition</td>
<td><p>attachment; filename=metadata.txt</p>
<p>Defined in section 2 of the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>.</p></td>
<td>Fixed Value</td>
<td>R</td>
</tr>
</tbody>
</table>

### Context Element Requirements

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 12%" />
<col style="width: 27%" />
<col style="width: 13%" />
<col style="width: 13%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th><strong>Data Element Number</strong></th>
<th><strong>Context Element</strong></th>
<th><strong>Value</strong></th>
<th><strong>Value Set</strong></th>
<th><strong>Context/Metadata Requirement</strong></th>
<th><strong>Mapping Guidance from XD to Context IG</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(6)</td>
<td>Version</td>
<td>1.2</td>
<td>Fixed Value</td>
<td>R</td>
<td>N/A</td>
</tr>
<tr>
<td>(7)</td>
<td>Id</td>
<td><p>&lt;transaction id: A unique and persistent identifier assigned by the originating party to uniquely identify a sequence of related transactions. This id-element also correlates any error reporting or required acknowledgments when this is not already encapsulated in the message content.&gt;</p>
<p>This is a persistent value to enable tracking ADT messages of an encounter. SHALL be populated with the Visit Number found in PV1.19 and IHE type identifier urn:ihe:iti:xds:2015:encounterId</p>
<p>Example: 12345: urn:ihe:iti:xds:2015:encounterId</p></td>
<td></td>
<td>R</td>
<td>SHALL populate Direct Context id element with corresponding IHE encounerId from the XD SubmissionSet.referenceIdList.</td>
</tr>
<tr>
<td>(8)</td>
<td>Patient-id</td>
<td><p>&lt;the patient's id&gt;This is a two-part field with a unique assigning authority oid “:” the patient id assigned by that authority.</p>
<p>Defined in section 3.3 of the Context IG.</p></td>
<td></td>
<td>R</td>
<td>DocumentEntry.sourcePatientID</td>
</tr>
<tr>
<td>(9)</td>
<td>Type</td>
<td>General/notification</td>
<td>Fixed Value</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(10)</td>
<td>Purpose</td>
<td>Treatment (Preferred)</td>
<td>Values from the purpose-value value set established in the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(11-11m)</td>
<td>Patient</td>
<td><p>&lt;populate the defined sub-elements}</p>
<p>“givenName” /</p>
<p>“surname” /</p>
<p>“middleName” /</p>
<p>“dateOfBirth” /</p>
<p>“gender” /</p>
<p>“socialSecurityNumber” /</p>
<p>“telephoneNumber” /</p>
<p>“streetAddress” /</p>
<p>“localityName” /</p>
<p>“stateOrProvinceName” /</p>
<p>“postalCode” /</p>
<p>“country” /</p>
<p>“directAddress”</p>
<p>R: givenName, surname, dateOfBirth, gender</p>
<p>The rest are RE.</p>
<p><em>Note: gender is codified using value set A.</em></p></td>
<td></td>
<td>R</td>
<td><p>DocumentEntry.sourcePatientInfo</p>
<p>Patient Demographics are represented as individual PID elements adhering to the HL7v2 constraints. See section 4.3.2.3 for guidance on formatting.</p></td>
</tr>
<tr>
<td>(12)</td>
<td>Creation-time</td>
<td>&lt;a field containing the date and time the ADT Mesagewas generated&gt;</td>
<td></td>
<td>R</td>
<td>DocumentEntry.creationTime of the v2 attachment</td>
</tr>
<tr>
<td>(13)</td>
<td>Profile</td>
<td><p><a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a></p>
<p><a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a></p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:&lt;version&gt;</p></td>
<td>Fixed Value</td>
<td>R</td>
<td>Populated with the DocumentEntry.formatCode associated with the v2 attachment</td>
</tr>
<tr>
<td>(14)</td>
<td>Type-code</td>
<td>2.16.840.1.113883.6.1:86530-3</td>
<td>Fixed Value</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(15)</td>
<td>Activity-code</td>
<td>2.16.840.1.113883.6.1:&lt;a concept from the value set&gt;</td>
<td>D</td>
<td>R</td>
<td>Populate the Context activity-code with the<br />
SubmissionSet.contentTypeCode</td>
</tr>
<tr>
<td><p>Constraints included from the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a></p>
<p>Both the patient-parameter-name and patient-parameter-value are case insensitive. The patient-parameter-value format is defined based on the patient-parameter-name and MUST NOT contain the “;”, CR, or LF characters. Contiguous whitespace MUST be treated as a single space. Leading and trailing whitespace MUST be ignored. A patient-parameter-name MUST NOT appear more than once in the patient-data-element. When a parameter is included, the following additional requirements apply:</p>
<ul>
<li><p>dateOfBirth: MUST be in YYYY-MM-DD or YYYY format (if month/day are unknown).</p></li>
<li><p>socialSecurityNumber: MUST contain 9 digits or last 4 digits; MAY include hyphens.</p></li>
<li><p>telephoneNumber: For telephone numbers in the United States of America and Canada, MUST contain 10 digits, including area code; MAY include parentheses or hyphens. For telephone numbers in other countries, MUST contain a telephone number formatted as per the ITU-T E.164 standard, which can be identified by a leading “+” character.</p></li>
<li><p>localityName: MUST contain the full locality name; the locality name MUST NOT be abbreviated.</p></li>
<li><p>stateOrProvinceName: MUST contain the full state or province name or the state or province abbreviation portion of the corresponding ISO 3166-2 code. For example, Alabama, USA = “AL” and Sonora, Mexico = “SON”.</p></li>
<li><p>postalCode: For locations within the United States of America, MUST contain 5 digit or 9 digit zip code; for 9 digit zip codes, MAY include a hyphen between the first 5 and last 4 digits.</p></li>
<li><p>middleName: MUST contain middle name or first letter of middle name; MAY include first letter plus a period.</p></li>
<li><p>country: MUST contain the two-letter ISO 3166 country code. If the country code is omitted, then the other patient matching parameters relating to a location, if any, SHALL be interpreted as identifying a location within the United States of America.</p></li>
<li><p>directAddress: MUST contain a Direct Address as defined in <a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a>, formatted as an addr-spec as per RFC 5322.</p></li>
</ul>
<p>The telephone and directAddress parameters MAY be multivalued. Multiple values SHALL be expressed as a comma-separated list of valid patient-parameter-values.</p></td>
</tr>
</tbody>
</table>

### Context Element Definitions (Defined in this IG)

The fields below extend the metadata content define in the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions).

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 21%" />
<col style="width: 66%" />
</colgroup>
<tbody>
<tr>
<td><strong>Data Element Number</strong></td>
<td><strong>Context Element</strong></td>
<td><strong>Element Definition</strong></td>
</tr>
<tr>
<td>(12)</td>
<td>creation-time</td>
<td>&lt;a field containing the date and time the attachment was generated&gt;</td>
</tr>
<tr>
<td>(13)</td>
<td>profile</td>
<td><p>profile= “profile:” profile-identifier</p>
<p>profile-identifier = &lt;URI defining message requirements&gt;<br />
<br />
This format code was established specifically for the DirectTrust Event Notifications via The Direct Standard® specification.</p>
<p>This constraint extends the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>.</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:&lt;version&gt;</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:&lt;version&gt;</p>
<p>Example:</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.1</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:1.1</p></td>
</tr>
<tr>
<td>(14)</td>
<td>type-code</td>
<td><p>type-code = “type-code:” type-code-identifier</p>
<p>type-code-identifier = content-type-system “:” content-type-code</p>
<p>content-type-system = &lt;assigning authority domain id&gt;</p>
<p>content-type-code = &lt;printable ascii characters other than whitespace and “;”&gt;</p></td>
</tr>
<tr>
<td>(15)</td>
<td>activity-code</td>
<td><p>activity-code = “activity-code:” activity-code -identifier</p>
<p>activity-code -identifier = content-type-system “:” content-type-code</p>
<p>content-type-system = &lt;assigning authority domain id&gt;</p>
<p>content-type-code = &lt;printable ascii characters other than whitespace and “;”&gt;</p></td>
</tr>
</tbody>
</table>

## XD Metadata Requirements

This chapter describes requirements for the MIME part that contains the XDM package when the Notification message is formatted.

### Metadata Element Requirements

The following list identifies the XD metadata requirements. Mapping Guidance provided only for XD metadata requirements from the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions). See [XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions) for all other conversion requirements.

**Submission Set**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 21%" />
<col style="width: 23%" />
<col style="width: 9%" />
<col style="width: 16%" />
<col style="width: 16%" />
</colgroup>
<thead>
<tr>
<th><strong>Data Element Number</strong></th>
<th><strong>Metadata Element</strong></th>
<th><strong>Value</strong></th>
<th><strong>Value Set</strong></th>
<th><strong>Metadata Requirement</strong></th>
<th><strong>Mapping Guidance</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(16)</td>
<td>Author</td>
<td>This would be the Treating Facility</td>
<td></td>
<td>R</td>
<td>Populate authorInstitution from PV2.23.1 from the V2 attachment</td>
</tr>
<tr>
<td>(17)</td>
<td>contentTypeCode</td>
<td></td>
<td>D</td>
<td>R</td>
<td><a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> &gt; XD populate the activity-code</td>
</tr>
<tr>
<td>(18)</td>
<td>entryUUID</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(19)</td>
<td>intendedRecipient</td>
<td>This is one or more determined recipients.</td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(20)</td>
<td>PatientId</td>
<td></td>
<td></td>
<td>RE</td>
<td>Shall be populated with <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> patient-id as XD patientId as know by the receiver.</td>
</tr>
<tr>
<td>(21)</td>
<td>sourceId</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(22)</td>
<td>submissionTime</td>
<td>This is the time of the Event</td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(23)</td>
<td>title</td>
<td></td>
<td></td>
<td>O</td>
<td></td>
</tr>
<tr>
<td>(24)</td>
<td>uniqueId</td>
<td></td>
<td></td>
<td>R</td>
<td><p>Populate with the id of the V2 message in MSH Segment using MSH-10 Message</p>
<p>Control ID plus the assigning authority to create an external identifier as defined in <a href="https://profiles.ihe.net/ITI/TF/Volume3/ch-4.2.html#4.2.3.1.3">IHE ITI TF vol.3 ch. 4.2.3.1.3</a>.</p></td>
</tr>
<tr>
<td>(25)</td>
<td>referenceIdList</td>
<td><p>This is a persistent value to enable tracking ADT messages of an encounter. It SHALL populated with the Visit Number found in PV1.19 and IHE type identifier urn:ihe:iti:xds:2015:encounterId.</p>
<p>Example: 12345: urn:ihe:iti:xds:2015:encounterId</p></td>
<td></td>
<td>R</td>
<td>SubmissionSet.referenceIdList SHALL be mapped from the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> id</td>
</tr>
</tbody>
</table>

**Document entry**

<table>
<colgroup>
<col style="width: 11%" />
<col style="width: 22%" />
<col style="width: 22%" />
<col style="width: 8%" />
<col style="width: 13%" />
<col style="width: 22%" />
</colgroup>
<thead>
<tr>
<th><strong>Data Element Number</strong></th>
<th><strong>Metadata Element</strong></th>
<th><strong>Value</strong></th>
<th><strong>Value Set</strong></th>
<th><strong>Context/Metadata Requirement</strong></th>
<th><strong>Mapping Guidance</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>(25)</td>
<td>Author</td>
<td>This would be the Treating Facility</td>
<td></td>
<td>RE</td>
<td>Populate authorInstitution PV2.23.1 from the V2 attachment</td>
</tr>
<tr>
<td>(26)</td>
<td>classCode</td>
<td><p>For Document Entry associated with the V2 message:</p>
<p>2.16.840.1.113883.6.1:86530-3</p>
<p>For Document Entry associated with the human readable, classCode may vary to support existing implementations between HISPs and edge systems to define the body message.</p>
<p>The preferred value established by this IG is 56444-3 (LOINC), but other guidance may prevail.</p></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(27)</td>
<td>confidentialityCode</td>
<td></td>
<td></td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td>(28)</td>
<td>creationTime</td>
<td>Time when the message was created</td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(29)</td>
<td>entryUUID</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(30)</td>
<td>formatCode</td>
<td><p>This format code was established specifically for the DirectTrust Event Notifications via the Direct Standard specification.</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:&lt;version&gt;</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:&lt;version&gt;</p>
<p>Example:</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.1</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:1.1</p></td>
<td>Fixed Value</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(31)</td>
<td>healthcareFacilityTypeCode</td>
<td></td>
<td>E</td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td>(32)</td>
<td>languageCode</td>
<td></td>
<td>F</td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td>(33)</td>
<td>mimeType</td>
<td><p>For hl7v2 message, application/hl7v2+er7</p>
<p>For human readable free text attachment, required</p>
<p>text/plain</p>
<p>(if using multipart/alternative, text/plain should appear first)</p></td>
<td>Expected type</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(34)</td>
<td>patientId</td>
<td></td>
<td></td>
<td>RE</td>
<td>Shall not be populated with <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> patient-id as XD patientId as know by the receiver.</td>
</tr>
<tr>
<td>(35)</td>
<td>practiceSettingCode</td>
<td></td>
<td>G</td>
<td>RE</td>
<td></td>
</tr>
<tr>
<td>(36)</td>
<td>sourcePatientId</td>
<td></td>
<td></td>
<td>RE</td>
<td>Populate with the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> patient-id.</td>
</tr>
<tr>
<td>(37)</td>
<td>sourcePatientInfo</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(38)</td>
<td>typeCode</td>
<td>2.16.840.1.113883.6.1:&lt;a concept from the value set&gt;</td>
<td>D</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>(39)</td>
<td>uniqueId</td>
<td></td>
<td></td>
<td>R</td>
<td></td>
</tr>
</tbody>
</table>
