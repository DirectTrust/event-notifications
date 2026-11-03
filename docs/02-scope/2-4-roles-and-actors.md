---
title: "2.4 Roles and Actors"
---

# 2.4 Roles and Actors

In health information exchange, actors of different types are at play.

## Roles and Actors – General Description

The following nomenclature will be utilized in this IG.

**Business Actors** – These are the organizations responsible for the technical systems and human actor users within their boundaries. Health systems, payers and public health agencies are examples.

**System Actors** – These are the deployed systems with human actor users. Electronic Health Records Systems are an example.

**Human Actors** – These are the individuals that interact with the systems in use. Physicians and other clinicians, administrative users, and patients are examples.

![](/images/02-scope/2-4-roles-and-actors-1.png)

***Technical roles** are the activities of system actors that participate in exchange. In the above diagram, both “push” and “pull” transaction types are shown. Information flow can be initiated by any actor. This IG will focus on Direct Secure Messaging which is a “push” modality.*

## Technical Roles in Unsolicited Notifications

Under this IG, five technical roles are defined. Actors may also perform as an Actor Grouping.

| **Technical Role** | **Description** |
|----|----|
| Initiating System | System responsible for generating the Event Notification information. This is the Event Notification originator. |
| Recipient System | System responsible for processing the Event Notification message content payload for the Event Notification recipient which MAY be a practitioner or an organization. |
| Intermediary System | System responsible for routing the message based on established forwarding policies and possibly subscription rules. This system is authorized to interrogate the Context Metadata in the message payload to facilitate message routing. This system may be authorized by a Business actor to process The Event Notification information in order to create, update, or modify the formator content of the message payload. |
| Sending HISP System | System responsible for sending the Direct Secure Message containing an Event Notification payload conformant to this IG. |
| Receiving HISP System | System responsible for receiving the Direct Secure Message containing an Event Notification payload conformant to this IG. This system may transform the payload to accommodate the information integration preferences of the Recipient System. |
| Actor Grouping | A concept defined in IHE to describe situations where the role, responsibilities and functional capabilities are assigned to a system actor which fulfills those requirements by combining the capabilities of multiple technical actors into a single system or under the control of a single Business Actor. It is a conceptual mechanism used to describe a solution that combines the capabilities of multiple technical actors. |

***Note 1:** The Sending HISP and Receiving HISP may be the same HISP, but this is not a requirement and often times they will be different HISPs.*
