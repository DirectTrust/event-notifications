---
title: "4.1 Message Format and Payload"
---

# 4.1 Message Format and Payload

The message SHALL be formatted using the MIME or XD message formats described below and specified in this IG. The data payload of each message SHALL include context/metadata information, discrete data in HL7 V2 format, and Human Readable information.

## Context IG and XD Message Formats

SHALL be included in Direct Secure Messages between HISPs and SHALL be communicated via one of the two options outlined below. ![A diagram of a structure Description automatically generated with medium confidence](/images/04-messaging-requirements/4-1-message-format-and-payload-1.png)

Messages SHALL contain information about only one patient and SHALL only communicate information about one event. As a result of these restrictions, only a single HL7 v2 attachment is permitted.

### Message Structure for Context IG Format

All messages SHALL conform to [The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions) and the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions). The X-Direct-Context parameter will be placed in the message header and is used as a reference to the separate MIME part containing the Direct messaging Context/Metadata. The HL7 V2 Message will be in a separate MIME part. The Human Readable version of the Event Notification SHALL be provided in the message body.

### Message Structure for XD Format

All attachments from XD Initiating Systems SHALL be included as a part of the XDM package sent by the HISP. XDM Packages will be conformant to The IHE ITI Technical Framework and packaged according to the [[XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions)](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions). The human readable version of the event notification SHALL be included in the message body.

Both the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions) and XD formats support the use of a multi-part MIME Part formats. This permits the Message Body to include multiple versions of the human readable message to support various text processing preferences of the recipient system.

### Required Message Content Payload

Direct Secure Messages sent between HISPs under this IG will meet the following requirements:

1)  Such messages SHALL contain Context Metadata as defined in Section [4.1](/04-messaging-requirements/4-1-message-format-and-payload#message-format-and-payload). Two options are allowed:

    1.  [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions) metadata SHALL be formatted in conformance with both [The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions) and the [Context IG](https://directtrust.org/standards/the-direct-standard/context-versions) and expressed with the Context MIME part of the message.

    2.  An XDM package formatted in compliance with the IHE ITI XDM Profile and [XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions).

2)  Messages SHALL contain **HL7 ADT messages based on HL7 version 2.5.1, where field MSH-12 SHALL contain “2.5.1”. In order to accommodate existing implementations of earlier HL7 versions, HL7 messages SHALL regardless contain** required and conditionally required data elements as defined in Section [4.2.1](/04-messaging-requirements/4-2-context-metadata-requirements#direct-ig-for-context-requirements).

3)  Messages SHALL contain **human readable text in the message body that contains the Event Notification information** with at a minimum the elements required by the Conditions of Participation quoted in Section [2.3.1](/02-scope/2-3-scenarios#admitdischargetransfer-event-notifications-use-cases). and detailed in Section [4.2.2](/04-messaging-requirements/4-2-context-metadata-requirements#xd-metadata-requirements). No specific requirements for format are stipulated for this text.

Item 2 and 3 MAY be alternatively communicated within an XDM package as detailed in [XDR and XDM for Direct Secure Messaging Specification](https://directtrust.org/standards/the-direct-standard/xdr-xdm-versions). Details about how attachments are formatted within Direct Secure Messages and which actors may be involved can be found in Section [2.4](/02-scope/2-4-roles-and-actors#roles-and-actors) Roles and Actors.

## Data Elements in the Message Payload

See Appendix [5.4](/05-value-sets-and-examples/5-4-data-elements-in-the-message-payload#data-elements-in-the-message-payload)
