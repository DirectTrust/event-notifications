---
title: "Terms"
---

# 1.3 Terms and Symbols

For the purposes of this IG, the following definitions apply.

<table>
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<thead>
<tr>
<th><strong>Terms</strong></th>
<th><strong>Definition</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Admission</td>
<td>Administrative activity of assigning a patient to an inpatient bed in the hospital or other inpatient facility (e.g. nursing home),or accepting a patient for care in an emergency department.</td>
</tr>
<tr>
<td><a href="https://directtrust.app.box.com/s/p1dpmt9tkoa9ay7h3bmcwwo5jj0yrhw7">Applicability Statement for Secure Health Transport</a> (hereafter “<a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a>”)</td>
<td>The Document that defines conformance to <a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a>.</td>
</tr>
<tr>
<td>Care Team</td>
<td>The set of people, including providers and other caregivers involved in the healthcare of an individual. A care team member may be an individual such as a clinical practitioner or an organization such as an organized health delivery system or an agency providing health and related services to the person or the person’s family unit. This may include the patient and their family members as well.</td>
</tr>
<tr>
<td>Context</td>
<td>Information necessary to determine the type of context, the purpose of the message and to whom it may be of interest.</td>
</tr>
<tr>
<td>Direct Standard®, Direct Secure Messaging (hereafter, “Direct’)</td>
<td><a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a> was developed under The Direct Project, which began in 2010 as a grass-roots public/private partnership focused on creating a simple and low-cost mechanism for healthcare interoperability. It builds upon existing standards and deployed internet scale infrastructure such as <a href="https://datatracker.ietf.org/doc/html/rfc5322">RFC5322</a> for message structure, <a href="https://datatracker.ietf.org/doc/html/rfc5751">RFC5751</a> for message security, and <a href="https://datatracker.ietf.org/doc/html/rfc5280">RFC5280</a> for public key infrastructure (PKI). <a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a> specifies not only a profiled use of these technologies but adds requirements and specifications for quality-of-service notifications, for public key discovery, and to build scalable trust relationships among message exchange partners.</td>
</tr>
<tr>
<td>DirectTrust®</td>
<td>In 2012, as a part of the work of the Direct Project, DirectTrust was incorporated as a 501c6 not-for-profit trade association charged with growing a “trust community” that would create a policy framework for Direct Secure Messaging. DirectTrust also operates DirectTrust Standards.</td>
</tr>
<tr>
<td>DirectTrust Network</td>
<td>The deployment of Direct Secure Messaging within the DirectTrust Trust Community.</td>
</tr>
<tr>
<td>DirectTrust Standards</td>
<td>A Division of DirectTrust that was accredited as an American National Standards Institute (ANSI) Standards Development Organization in 2019.</td>
</tr>
<tr>
<td>Discharge</td>
<td>Administrative event in a hospital, other inpatient facility, or emergency department that communicates the patient has left the service and is no longer a patient. A discharge may be to home or to another facility (see External Transfer).</td>
</tr>
<tr>
<td>Edge system</td>
<td>An Edge system is any endpoint serviced by a HISP. HISPs serve Edge systems by performing integration tasks allowing Edge systems to take advantage of <a href="https://directtrust.org/standards/the-direct-standard/versions">The Direct Standard®</a>.</td>
</tr>
<tr>
<td>External Transfer</td>
<td>The discharge and subsequent admission/arrival of a patient at another facility. For the purposes of this IG “External Transfer” will be used to describe a discharge that results in an admission at another facility when such an event is communicated by the discharging facility.</td>
</tr>
<tr>
<td>Facility Arrival</td>
<td>An administrative notice that a patient is present in a facility before such time as they are officially “admitted”. In the case of ambulatory care, this may be functionally equivalent to “admission” since practices don’t assign beds and stays are short enough that the only important information is the “date of service”.</td>
</tr>
<tr>
<td><a href="https://directtrust.org/standards/the-direct-standard/context-versions">Implementation Guide for Expressing Context in Direct Messaging</a> (hereafter, “<a href="https://directtrust.org/standards/the-direct-standard/context-versions"><span>Context IG</span></a>”)</td>
<td>A Standard developed by the Direct Project community to provide a simple method to communicate context in Direct Secure Messages.</td>
</tr>
<tr>
<td>Message Content Payloads</td>
<td>Standardized message types to be included as attachments in Direct Secure Messages. Such payloads may be required or optional. This IG may also require certain fields within such payloads to be valued.</td>
</tr>
<tr>
<td>Message Metadata</td>
<td>Formatted discrete information about the data within a message that can be used for both automated and manual processing of the message by transporting systems without requiring the transporting system to extract and decode encapsulated information to determine the needed information.</td>
</tr>
<tr>
<td>Notice of Proposed Rule-Making - 2019 CMS 45 CFR Part 156 – “<a href="https://www.govinfo.gov/content/pkg/FR-2019-03-04/pdf/2019-02200.pdf">NPRM</a>” and the subsequent Interoperability and Patient Access final rule (<a href="https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and">CMS-9115-F</a>)</td>
<td>As part of a much broader rule focused on interoperability, this CMS rule revised Conditions of Participation <em>“for Medicare- and Medicaid-participating hospitals at 42 CFR 482.24 by adding a new standard at paragraph (d), ‘‘Electronic Notifications,’’ that would require hospitals to send electronic patient Event Notifications of a patient’s admission, discharge, and/or transfer to another healthcare facility or to another community provider.”</em> It requires messages <em>“convey, at a minimum, the patient’s basic personal or demographic information, as well as the name of the sending institution (that is, the hospital), and, if not prohibited by other applicable law, diagnosis.</em> This rule provides impetus for the development of this IG. Descriptive text in section 5.3.</td>
</tr>
<tr>
<td>Notification Subscriptions</td>
<td>Requests for specific types of notifications which may be routed and filtered from the source based upon an automated or manual process in such systems. Such subscriptions may be created using electronic transactions via web-services or otherwise.</td>
</tr>
<tr>
<td>Risk Adjustment</td>
<td>A statistical process that takes into account the underlying health status and health spending of the enrollees in an insurance plan when looking at their healthcare outcomes or healthcare costs.</td>
</tr>
<tr>
<td>Transfer</td>
<td>The administrative movement of a patient from one location to another within a hospital, sometimes indicating a change in the patient’s level of care or acuity. (See External Transfer)</td>
</tr>
<tr>
<td>Treating Facility</td>
<td>The facility where the patient is or was receiving healthcare services.</td>
</tr>
<tr>
<td>Treating Provider(s)</td>
<td>At a minimum, it is the admitting physician but could also include additional roles such as attending and consulting.</td>
</tr>
<tr>
<td>Trust Community</td>
<td>A group of individuals and/or organizations that voluntarily form or join an independent organization created to adopt standards that facilitate communication among unrelated and/or unknown parties that become trusted as a result of the governance practices and policies enforced by the organization. Such an organization creates and enforces rules of engagement for compliant parties.</td>
</tr>
<tr>
<td>Unsolicited Notifications</td>
<td>Sending information based on a "standing" or "blanket" subscription or an explicit patient instruction with consent. No electronic transaction is required from the intended recipient to trigger the notification transmission.</td>
</tr>
<tr>
<td>Value Based Care</td>
<td><p>Value Based Care is a healthcare delivery model where providers (both individuals and organizations) are paid to improve the quality of care for patients. Under such agreements, providers are rewarded when patients demonstrate measurable improvement in their health status.</p>
<p>Such models are in contrast to a fee-for-service approach, in which providers are paid based on the volume of healthcare services delivered.</p></td>
</tr>
</tbody>
</table>

| **Symbols and Acronyms** | **Definition** |
|----|----|
| ADT | Admit, Discharge and Transfer. Refers to the system that manages patient access in an electronic health record system as well as the HL7 V2 Messaging Standard code set for these triggers. It is this Standard that is referenced in the CMS Final Rule. |
| HL7® | Health Level Seven International (HL7) is a not-for-profit, ANSI-accredited standards developing organization seeking to provide a framework and related standards for the exchange, integration and sharing of electronic health information. |
| HL7 C-CDA IG | An HL7 Implementation Guide which defines a set of CDA templates to establish conformance expectations for common Clinical Note Types used by practitioners in the US to share clinical notes for patient encounters and patient medical histories. |
| HISP | HISPs are Health Information Service Providers as described in [The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions). These are organizations that offer Direct Secure Messaging services to other organizations that together enable information exchange via [The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions). |
| ITI | The IHE IT Infrastructure Technical Framework specifies numerous technical Profiles including XDR and XDM. |
| XDM | Cross-Enterprise Document Media Interchange (XDM) provides a common file and directory for document exchange using standard media. This capability enables person-to-person email and Direct Secure Messaging in particular to convey medical documents. |
| XDR | Cross-Enterprise Document Reliable Interchange (XDR) defines a transaction for document exchange through a reliable messaging system. |
