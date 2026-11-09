---
title: "0.3 Change Log"
---

# 0.3 Change Log

## Document Version and Change Log

<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 20%" />
<col style="width: 66%" />
</colgroup>
<thead>
<tr>
<th style="text-align: center;">Version</th>
<th style="text-align: center;">Date</th>
<th style="text-align: center;">Description of Changes</th>
</tr>
</thead>
<tbody>
<tr>
<td>N</td>
<td>11/12/2021</td>
<td>Initial Draft</td>
</tr>
<tr>
<td>O</td>
<td>2/11/2022</td>
<td>Initial Draft with Revision from ANSI Reviewer Comments (Issue and Comment Resolution)</td>
</tr>
<tr>
<td>P</td>
<td>4/6/2022</td>
<td>Minor technical corrections</td>
</tr>
<tr>
<td>Q</td>
<td>4/21/2022</td>
<td>Minor technical corrections</td>
</tr>
<tr>
<td>1.0</td>
<td>May 13, 2022</td>
<td>ANSI approved Version 1.0 (ANSI/DS 2020-03-100-2022)</td>
</tr>
<tr>
<td>R</td>
<td>08/03/2023</td>
<td>Enhancements to Version 1.0 to be called Draft Version 1.1</td>
</tr>
<tr>
<td>S</td>
<td>12/20/2023</td>
<td>Changes made between Version 1.0 and the current Version 1.1 as described in the Version 1.1 Issue and Comment Resolution table (below).</td>
</tr>
<tr>
<td>1.1</td>
<td>01/04/2024</td>
<td>ANSI approved Version 1.1 (ANSI/DS 2020-03-101-2022)</td>
</tr>
<tr>
<td>1.2</td>
<td>03/20/2025</td>
<td>Enhancements to Version 1.1 to be called Version 1.2</td>
</tr>
<tr>
<td>1.2.1</td>
<td>11/24/2025</td>
<td>Enhancements to Version 1.2 to be called Version 1.2.1 – Trial Use Version</td>
</tr>
</tbody>
</table>

## Version 1.0: Issue and Comment Resolution

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><strong>Comment</strong></th>
<th><strong>Description of Changes/Resolution</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Regarding a methodology to uniquely identify admission-discharge-transfer (ADT) notifications in the receiving system, we suggest a standard message subject line, in addition to a Logical Observation Identifiers Names and Code (LOINC®) or metadata details. These items would assist receiving electronic medical record (EMR) systems and end users in organizing, managing, and prioritizing the information received.</strong></td>
<td>It was determined that making the population of the message subject line required would conflict with underlying standards including the email RFC (5321) and the S/MIME RFC (8551). The Consensus Body considered making a recommendation (not a requirement) to populate the message subject line with the display name of the LOINC code for visit notification. This was rejected as it would create a redundancy that could cause confusion. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>Notifications on internal transfers are not operationalized today. When implementing this, we need to consider volume vs value of messages to avoid overwhelming providers and contribute to burnout. We recommend identifying in the message content the type of level of care transition. For example, transfer to an intensive care unit. This detail is not currently available by message type and could increase maintenance to manage location types by site.</strong></td>
<td>The Consensus Body evaluated the idea of introducing new metadata elements to carry the same information that can be found in the V2 ADT message that clarifies the context of the transfer. In the end this was rejected in favor of having this detail communicated in the HL7 V2 message only. The reasoning was that extensions to the metadata model in XDR as well as the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> would be required and that receivers that want this information can parse the HL7 Message. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>In regards of identifying the notification as an external transfer when a patient is discharged from one facility and then admitted to another, it is important to consider the method of identification when the patient is being discharged that would uniquely identify them as transferring to another facility. In the standard ADT content, this is not uniquely identified by a message type. However, one potential solution would be to use a combination of message type and discharge to location.</strong></td>
<td><p>The Consensus Body evaluated the idea of introducing new metadata elements to carry the same information that can be found in the V2 ADT message for "discharge disposition" and information that clarifies the context of the external transfer. The industry has not standardized the discharge disposition value set and much variation is seen in messages in production use.</p>
<p>The group determined it best to allow this information to be communicated only in the attached ADT message. To have done otherwise would have required metadata extensions. Receivers or intermediaries that want the full context can parse the HL7 message for this information. If the industry moves to standardize this value set the Consensus Body may consider adding this information to metadata. No changes were made to the Implementation Guide.</p></td>
</tr>
<tr>
<td><strong>Implement a universal subscription model that allows providers the flexibility to receive content that is most relevant to their practice and workflows. Removing content not valued highly by an individual provider will keep them focused on what is important as well as utilizing the technology.</strong></td>
<td>Early in the process of determining the scope of the Consensus Bodies work, a subscription model was evaluated and rejected for inclusion in the Implementation Guide. Many of the intermediaries that intend to implement the IG have subscription approaches as a part of their technologies. Nothing about the IG precludes the notion of subscription or of other filtering mechanisms. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>Direct Secure Messages should consistently identify the sending or referring provider.</strong></td>
<td>The sending provider is bound to the Direct Address itself and provides organizational identity assurance on its own. Other fields identifying treating providers are required if known and included in the HL7 v2 message. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>Additionally, we would submit that the Direct Standard should support a universal methodology to display a message delivery notification in the EMR for all clinicians caring for the patient to see as a discrete data element.</strong></td>
<td><p>The workflow of edge systems has never been a part of the Direct Standard related implementation guides. Interoperability Implementation Guides usually shy away from dictating how an interoperable workflow "looks".</p>
<p>We have also referred the commenter to the Direct Standard™ Consensus Body as MDNs relate to all Direct Secure Messaging use cases not just notifications. If such a change were accepted, it should be a part of the core standards. No changes were made to the Implementation Guide.</p></td>
</tr>
<tr>
<td><strong>The Direct standard should also incorporate descriptors that can assist in managing duplicate notifications i.e., hospital, HIE (Health Information Exchange) and other organizations.</strong></td>
<td>The determination of the consensus body on this topic was that visit id, date/time and event type can be used for this purpose most often and that other elements that are included in HL7 messages would provide further ability to de-duplicate such messages by receivers. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>We also recommend one message/document type standard that is accepted by all receiving entities. Today, the requirements to process an inbound notification vary from EMR to EMR causing notifications to error in many cases.</strong></td>
<td><p>While this would be a valuable change, the differences between metadata models in the market are such that mandating all EHRs implement one of the models would cause significant upheaval. Organizations that support the IG as senders will need to select one of the two mechanisms for communicating metadata.</p>
<p>The Consensus Bodies approach to solving this problem was to map between metadata models (at the receiving HISP), and to also enable implementations that don't support any metadata model at all by requiring a human readable duplication of all the salient information contained in metadata. No changes were made to the Implementation Guide.</p></td>
</tr>
<tr>
<td><strong>Finally, practitioners often have more than one Direct address published to Direct Trust. In the current implementation, the ADT notification is often being sent to an address not intended for this purpose. For these users, the ability to set a priority by address for various content types is urgently needed.</strong></td>
<td>The DirectTrust directory is not a part of our scope of work in this IG. However, it should be noted that DirectTrust is working to enhance the aggregated directory to allow for addresses to be tagged with a supported use case which implies the capabilities they support. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>The Event Notifications Standard should consider allow the sending or receiving organization to be able to filter out certain types of event types. One of the problems we hear from members of our primary care association is the overload of event notifications that come in and their inability to allow some but not others – it is an all or nothing type situation.</strong></td>
<td><p>Such filtering of messages by receivers is not prohibited by the IG and it is assumed that many receivers will evaluate metadata populated to determine which if any users are interested in notification messages. The CMS rule defines the obligations of senders.</p>
<p>The Consensus Body wanted to provide receivers with the tools to route and filter incoming messages as they see fit.</p>
<p>No changes were made to the Implementation Guide.</p></td>
</tr>
<tr>
<td><strong>The IG supports the use for Outpatient visits (see 4.2.2.1, 5.1.1 and 5.1.2).  This is superb since I’ve used Outpatient ADTs to know when my patients have gone for outpatient PET scans and seen consultants at other organizations.  However, I understand that this may not necessarily be the aim of this version of the IG. </strong></td>
<td><p>Updated Section 2.3.1.1 in Version O to include: The following Outpatient events are allowed but not required:</p>
<ul>
<li><p>Admission to an Outpatient Department</p></li>
<li><p>Discharge from an Outpatient Department</p></li>
<li><p>Transfer between Outpatient Departments within the same organization</p></li>
</ul></td>
</tr>
<tr>
<td><strong>The IG allows the use of multiple HL7v2 Versions to encode the data. So feasibly someone could send with a 2.7 or 2.9 version which places data like phone numbers and encounter providers in separate fields and segments.<br />
This would lead to lower version consumers (the generally smaller organizations I would argue should not do the harder work) to miss out on this data in the best case, or if their interface is strict on version they will miss out on all of the HL7v2 from these higher version sources. The plain text helps here but I would hope we hold this guide to a standard where if you implement it, you always get to benefit from it. The plain text in my mind is only for those who have not implemented the guide.</strong></td>
<td><p>The Consensus Body agreed to identify the ADT version as 2.5.1 and added a requirement for senders using a base HL7 standard version of 2.5.1 or later to send Primary Care Provider information in both PD1 and ROL segments to accommodate backwards compatibility.</p>
<p>The Consensus Body also added guidance that receivers of ADTs will need to look in both the PD1 and ROL segments for Primary Care Provider information.</p></td>
</tr>
</tbody>
</table>

## Version 1.1: Issue and Comment Resolution

<table>
<colgroup>
<col style="width: 49%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><strong>Regarding Project US@ (USA): This standard for address format is named in USCDI v3 and the HTI-1 proposed rule. Proposing that the Event Notifications IG should reference this standard for Patient Address within the PID segment. <a href="https://oncprojectracking.healthit.gov/wiki/pages/viewpage.action?pageId=180486153">https://oncprojectracking.healthit.gov/wiki/pages/viewpage.action?pageId=180486153</a></strong></th>
<th>The Consensus Body approved to include a reference to Project US@ in section 1.3 Normative References with a note that patient address SHOULD conform to the guidance provided in the specification.</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>If there are not references to sets of best practice matching attributes you may want to refer to section 4.4 and 4.5 of HL7's patient matching standard: https://build.fhir.org/ig/HL7/fhir-identity-matching-ig/patient-matching.html</strong></td>
<td>It was determined by the Consensus Body that section 4.4 is important and consistent with the content in the V2 content, section 4.5, and the rest of the guide is heavily focused on patient-matching approaches, but deemed outside the scope of this IG. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>Looks like the HL7 mapping project puts the EVN elements in Provenance</strong></td>
<td>The commenter's observation about the FHIR mappings do not require changes to be made to the Event Notification IG.</td>
</tr>
<tr>
<td><strong>I see for Identifier we have focused on “SS” is that because Direct Trust requires it? We went through a project almost a decade ago to remove all SSN’s in our organization. I have heard others have too. Typically we see the MR number from he facility is this field with their assigningAuthority OID</strong></td>
<td>It was determined that the comment was relevant to the guide but discouraged as it states “if needed only use the last 4 the “SSN”. An assigning authority ID is a MAY/SHOULD, if the assigning authority is not included in the historical interoperation, the MR number of the organization where the event occurred MAY/SHOULD be used. The Consensus Body deemed no further action is required.</td>
</tr>
<tr>
<td><strong>I was surprised to see DSM in the patient’s telecommunication. Is that common?</strong></td>
<td>DSM was included in the guide to encourage the use of Direct Secure Messaging and to demonstrate how it can done. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>Patient Account Number goes to Account.identifier. Our issue and likely others is there is no system PID-18-4. There is a “AN” type you could use from the full expansion of valueSet specified and the set is extensional.</strong></td>
<td>Similar to the comment resolution on “SSN” if an MR number is not included, it can be left out and assumed to be the account number at the organization where the event occurred. The Consensus Body deemed no further action is required.</td>
</tr>
<tr>
<td><strong>PV1.2 Class Code – unless the DirectTrust IG requires the same codes as FHIR Encounter.class, this will be a problem. HL7 v2 has this as a “user defined field”. While many use those values (and also add Observation), we always have to normalize.</strong></td>
<td>The Consensus Body approved adding A cross-walk to the table in section 5.1 to reference the following link: <a href="https://terminology.hl7.org/5.0.0/ValueSet-v3-ActEncounterCode.html">https://terminology.hl7.org/5.0.0/ValueSet-v3-ActEncounterCode.html</a> for ActEncounterCode Value Set.</td>
</tr>
<tr>
<td><strong>PV1.3 – do you really not want to include room and bed? You have to send as 3 locations. Should location.status be “active” (or are you also included the Planned admission types?)</strong></td>
<td>The Consensus Body approved adding a note to section 4.0 in the guide stating the following “Elements not listed in the implementation guide MAY be included at the sender’s discretion are outside the scope of this guide”.</td>
</tr>
<tr>
<td><strong>PV1.4 – just doesn’t work. It is a user defined valueSet in v2. People don’t really understand the concept – seems to overlap with PV1-2 at times. I have never seen CPT/SNOMED values</strong></td>
<td>The Consensus Body reviewed the comment and disagreed. The V2 standard has suggested values in HL7 v2.5.1 -0007 – Admission Type along with the use of code source L, the guide includes the following link to the relevant HL7 codes <a href="http://terminology.hl7.org/2.1.0/ValueSet-v2-0007.html">http://terminology.hl7.org/2.1.0/ValueSet-v2-0007.html</a>.</td>
</tr>
<tr>
<td><strong>For PV1-7, 9, 17, How do you match up the ROL segment for each, i.e. what value does DirectTrust say to use in the ROL segment? ROL-3 of AD, CP, AT, etc</strong></td>
<td>The Consensus body approved to improve section 4.3.2.7 to explain how the ROL segment links to the specific role of the persons listed in PV1.</td>
</tr>
<tr>
<td><strong>PV1-36 totally agree on NUBC. Does DT ADT IG say to use those?</strong></td>
<td>This guide does state that PV1-36 uses NUBC codes. The Consensus Body determined no further action is required.</td>
</tr>
<tr>
<td><strong>PV1-37 – think you have to pick one – only submitter will know if the value is an organization. I would lean towards location.description</strong></td>
<td><p>In the Outstanding Issues section of the guide, it states HL7 does not have a profile on location. After further research US Core does and uses .description. There is a recommendation to update PV1-37 to location.name</p>
<p>The Consensus Body added a statement to Section 2.3.1 to clarify the following about PV1-37 “This field SHOULD be the name of the facility to which the patient is being discharged”.</p></td>
</tr>
<tr>
<td><strong>PV1.45 – why not mapped?</strong></td>
<td>The Consensus Body approved to add PV1-45 Discharge Date/Time to section 4.3.2.6 and appendix and listed as O (Optional)</td>
</tr>
<tr>
<td><strong>PV2.26 – inferred from birthdate and admissiondate?</strong></td>
<td>The Consensus Body determined this to be not relevant as PV2-26 is not included in the guide. No changes were made to the Implementation Guide.</td>
</tr>
<tr>
<td><strong>DG1.6 – preferred valueSet does not align well. Do we just use v2 table?</strong></td>
<td><p>The Consensus Body recommends an HL7 vocabulary alignment effort to decide on a single Diagnosis Type Value set.</p>
<p>V2 Diagnosis Type: <a href="https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0052">https://hl7-definition.caristix.com/v2/HL7v2.5.1/Tables/0052</a><br />
FHIR Diagnosis Type: <a href="https://hl7.org/fhir/R4/valueset-diagnosis-role.html">https://hl7.org/fhir/R4/valueset-diagnosis-role.html</a></p></td>
</tr>
<tr>
<td><strong>IN1-8 – goes in Coverage.class:group in US Core</strong></td>
<td>The US Core is not in scope of this guide, we state “Group Number”. The Consensus Body deemed no further action is required.</td>
</tr>
<tr>
<td><strong>IN1.15 – this is another sticky wicket but US Core uses Payer Type</strong></td>
<td><p>This guide states IN1.15 should use the value set Health Insurance Type 2.16.840.1.113883.3.88.12.3221.5.2 OID:2.16.840.1.114222.4.11.3591 (Refer to section 5.1)</p>
<p>The Consensus Body determined no further action is required.</p></td>
</tr>
<tr>
<td><strong>IN1.36 – Coverage.identifier:membered</strong></td>
<td>This guide states Patient Insurance Member ID – RE (Required if Known). The Consensus Body determined no further action is required.</td>
</tr>
<tr>
<td><strong>IN1.49 – Coverage.SubscriberID</strong></td>
<td>This guide states Insured’s ID Number – RE (Required if Known). The Consensus Body determined no further action is required.</td>
</tr>
<tr>
<td><strong>One of the above two are required but both can be present in FHIR</strong></td>
<td>This guide states both IN1-36 and IN1-49 are both RE (Required if Known). The Consensus Body determined no further action is required.</td>
</tr>
<tr>
<td><strong>NK1 shows Mother – is that all ADT allows?</strong></td>
<td>We suggest using HL7 for a single value set for a person and legal roles. Currently being used by FHIR/CDA is Personal and Legal Relationship Role Type OID: 2.16.840.1.113883.11.20.12.1. The Consensus Body determined no further action is required.</td>
</tr>
</tbody>
</table>

**Outstanding Issues**

<table>
<colgroup>
<col style="width: 38%" />
<col style="width: 15%" />
<col style="width: 46%" />
</colgroup>
<thead>
<tr>
<th><strong>Issue</strong></th>
<th><strong>Update Date</strong></th>
<th><strong>Description of Changes/Resolution</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>The concept of “transfers” in the rule are not communicated by HL7 Type/Trigger alone. Evaluating the need for Discharge Disposition to be duplicated in Context.</strong></td>
<td>1/29/2021</td>
<td>The IG will require content to contain Discharge Disposition (PV1-36) and Discharge to Location (PV1-37) but will not require these are carried in context.</td>
</tr>
<tr>
<td><strong>Discharge Dispositions under HL7 V.2.5.1 are coded in UB-O4 codes that require licensing. We are evaluating alternative value sets that C-CDAs and FHIR have adopted. The document reflects at this time the list referenced HL7 for use in the FHIR and the C-CDA IGs, not the UB-04/NUCC.</strong></td>
<td>1/29/2021</td>
<td>Multiple discharge disposition codesets may be found in HL7 V2 messages. The IG will allow several and expect that Receiving HISPs and Intermediary Systems will map these code sets to common concepts as needed or as requested by Recipient Systems.</td>
</tr>
<tr>
<td><strong>There was unanimous consensus that the IG would require that XD metadata be mapped to <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> metadata for the required Context Metadata. However, no decision was made about what technical actor would be responsible for such mapping.</strong></td>
<td>2/04/2021</td>
<td>The full consensus body voted electronically over a seven-day period ending January 30, 2021. 60.9% of voting members who responded elected to <em>“allow messages HISP to HISP to contain either</em> <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> <em>Metadata or XDM packages containing XD metadata. Receiving HISPs SHALL map as needed to the alternative approach”.</em></td>
</tr>
<tr>
<td><strong>Temporary code of urn:dt-org:dsm:adt-en:1.0 needs to be added to a permanent code system or otherwise referenced in a publicly available location.</strong></td>
<td>6/25/2021</td>
<td><p>The temporary code pattern was reviewed by DirectTrust and a formal syntax for establishing formatCodes for DirectTrust IG's was adopted. The new pattern has been applied for this IG starting with version 1.1. The result is two formatCodes, one for the XMD format of message and another for the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> format of message. The new codes are:</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:1.1</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:1.1</p>
<p>Going forward as new Versions are developed the formatCode pattern will be:</p>
<p>urn:dt-org:dsm:adt-en:SMTP+CIG+V2:&lt;version&gt;</p>
<p>urn:dt-org:dsm:adt-en:SMTP+XDM:&lt;version&gt;</p></td>
</tr>
<tr>
<td><strong>This IG uses extensions to the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>.</strong></td>
<td>6/16/2021</td>
<td>The Notifications Consensus Body acknowledges that the Direct Standard Consensus Body will need to update the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> to explicitly allow extensions of the sort stipulated in this Notification implementation guide. We strongly recommend that the Direct Standard Consensus Body generalize the pattern for extension defined in this Notifications IG which defines additional metadata elements that comply with the syntax of the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>.  Further, the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> needs to be modified to define a profiling mechanism that enables assertion of conformance to a specific implementation guide which extends the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a>. This mechanism would use a URL that identifies the IG where the additional constraints are established.</td>
</tr>
<tr>
<td><strong>Representation of Health Insurance Information remains an open issue across HL7 V2, CDA and FHIR standards. Health Insurance Information was recently included in the proposed USCDI V3. Requirements for representing Health Insurance Information in this IG will be reviewed and updated if appropriate once USCDI V3 is published.</strong></td>
<td>2/2/2022</td>
<td>USCDI V3 Health Insurance Information includes data related to an individual’s insurance coverage for health care.<br />
Coverage Status<br />
Coverage Type<br />
Relationship to Subscriber<br />
Member Identifier<br />
Subscriber Identifier<br />
Group Number<br />
Payer Identifier</td>
</tr>
</tbody>
</table>
