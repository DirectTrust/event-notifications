---
title: "3.1 Two Business Actor Use Case"
---

# 3.1 Two Business Actor Use Case

The Initiating System and its sending HISP will need to communicate the Direct Secure Messages as described in Section [4.1.1.3](/03-02-transaction-definitions/4-1-message-format-and-payload#required-message-content-payload). Receiving HISPs will communicate with Recipient Systems as needs dictate. Responsibilities for communicating required attachments are shown in the table following.

![](/images/03-use-cases/3-1-two-business-actor-use-case-1.png)

<table>
<colgroup>
<col style="width: 17%" />
<col style="width: 15%" />
<col style="width: 34%" />
<col style="width: 17%" />
<col style="width: 15%" />
</colgroup>
<thead>
<tr>
<th><strong>Responsibility</strong></th>
<th><strong>Initiating System</strong></th>
<th><strong>Sending HISP System</strong></th>
<th><strong>Receiving HISP System</strong></th>
<th><strong>Recipient System</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Context Metadata</strong></td>
<td>SHALL produce and include either an XDR message, an XDM package with full XDS metadata or a <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> metadata as specified in Section <a href="#data-elements-in-the-message-payload">4.1.2</a></td>
<td>SHALL include Context Metadata as provided by Initiating System or transmit XDM packages from XDR. The Sending HISP MAY send either an XDM package or the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> metadata or both. Context Metadata SHALL be mapped as shown in Section <a href="#direct-ig-for-context-requirements">4.2.1</a>.</td>
<td>SHALL deliver message contents and associated context as appropriate to the Edge protocol in use.</td>
<td>SHOULD make use of Context to alert appropriate users and inform workflow</td>
</tr>
<tr>
<td><strong>HL7 V2 Message Content Payload</strong></td>
<td>SHALL produce and include an HL7 V2 message with all required content.</td>
<td><p>SHALL include HL7 V2 messages as produced by Initiating Systems. These may be sent within XDM packages.</p>
<p><em>Note: See mapping table in section <a href="/09-vocabulary/#loinc-codes-for-use-in-context-and-xdm-metadata">5.1.1</a> for specific metadata coding option</em></p></td>
<td>SHALL accept HL7 V2 messages and communicate them based on the needs of the Recipient System</td>
<td>SHOULD repose or parse and repose HL7 V2 content provided by Receiving HISP</td>
</tr>
<tr>
<td><strong>Human readable text that contains the Event Notification Information</strong></td>
<td>SHALL produce and include a human-readable text attachment.</td>
<td><p>SHALL include the human readable text in the Message Body</p>
<p>If XDM format, the identical human readable text SHALL be included as a DocumentEntry attachment in the XDM Package</p>
<p><em>For Document Entry associated with the human readable, classCode may vary to support existing implementations between HISPs and edge systems to define the body message. The preferred value established by this IG is 56444-3 (LOINC), but other guidance may prevail.</em></p></td>
<td>SHALL assure that the human readable text (from either source) is delivered based upon the needs of the Recipient System</td>
<td>SHALL display either the included human readable text attachment OR a human readable message constructed from other included data</td>
</tr>
</tbody>
</table>
