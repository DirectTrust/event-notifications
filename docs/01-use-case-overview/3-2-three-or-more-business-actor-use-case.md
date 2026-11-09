---
title: "3.2 Three (or more) Business Actor Use Case"
---

# 3.2 Three (or more) Business Actor Use Case

One or more Intermediary Systems may be involved in the delivery of Unsolicited Notifications to interested parties. The role of the Intermediary Systems is to receive Unsolicited Notifications and to re-address these to one or more Direct addresses. Rules within the Intermediary System interact with the contents of the message to determine the new recipient Direct addresses as well as possible reformatting for the needs of the receiver. The rules and technologies that enable this behavior are out of scope for this IG.

![](/images/03-use-cases/3-2-three-or-more-business-actor-use-case-1.png)

The Intermediary System will play two additional technical roles that are in scope – Receiving HISP and Sending HISP. Such Intermediary Systems may also perform Edge integration directly with some Initiating and/or Recipient Systems. If a sending HISP sends to an Intermediary System, it is assumed that messages will be conformant with this IG. Likewise, when Intermediary Systems send to Receiving HISPs, messages will be expected to be conformant.

<table>
<colgroup>
<col style="width: 16%" />
<col style="width: 14%" />
<col style="width: 16%" />
<col style="width: 17%" />
<col style="width: 17%" />
<col style="width: 17%" />
</colgroup>
<thead>
<tr>
<th><strong>Responsibility</strong></th>
<th><strong>Initiating System</strong></th>
<th><strong>Sending HISP System</strong></th>
<th><strong>Intermediary System</strong></th>
<th><strong>Receiving HISP System</strong></th>
<th><strong>Recipient System</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Context Metadata</strong></td>
<td>SHALL produce and include either an XDR message, an XDM package with full XDS metadata or a <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> metadata as specified in Section <a href="#data-elements-in-the-message-payload">4.1.2</a></td>
<td>SHALL include Context Metadata as provided by Initiating System or transmit XDM packages from XDR. The Sending HISP MAY send either an XDM package or the <a href="https://directtrust.org/standards/the-direct-standard/context-versions">Context IG</a> metadata or both. Context Metadata SHALL be mapped as shown in Section <a href="#direct-ig-for-context-requirements">4.2.1</a></td>
<td>SHALL include Context Metadata or XDM metadata packaging that reflects the event-initiating Treating Facility, and the Intermediary System as the Message sender.</td>
<td>SHALL deliver message contents and associated context as appropriate to the Edge protocol in use.</td>
<td>SHOULD make use of Context to alert appropriate users and inform workflow</td>
</tr>
<tr>
<td><strong>HL7 V2 Message Content Payload</strong></td>
<td>SHALL produce and include an HL7 V2 message with all required content.</td>
<td>SHALL include HL7 V2 message segments (other than the MSH segment) as produced by Initiating Systems.</td>
<td><p>SHALL include accurate MSH segment information in the message header indicating the Intermediary as the sender of the message and the intended recipient.</p>
<p>MAY transform the message to use a different version of HL7 V2. MAY enrich the content carried in the V2 message, for example adding the Facility Name if that was not previously populated.</p></td>
<td>SHALL accept HL7 V2 messages and communicate them based on the needs of the Recipient System</td>
<td>SHOULD repose or parse and repose HL7 V2 content provided by Receiving HISP</td>
</tr>
<tr>
<td><strong>Human readable text that contains the Event Notification Information</strong></td>
<td>SHALL produce and include a human-readable text attachment.</td>
<td colspan="2"><p>The Initiating or Intermediary System SHALL produce and include a human-readable text attachment.</p>
<p>SHALL include the human readable text attachment in the Message Body.</p>
<p>If XDM format, an identical human readable text SHALL be included in the XDM Package</p>
<p><em>For Document Entry associated with the human readable, classCode may vary to support existing implementations between HISPs and edge systems to define the body message. The preferred value established by this IG is 56444-3 (LOINC), but other guidance may prevail.</em></p></td>
<td>SHALL assure that the human readable text (from either source) is delivered based upon the needs of the Recipient System</td>
<td>SHALL display either the included human readable text attachment OR a human readable message constructed from other included data</td>
</tr>
</tbody>
</table>
