---
title: "Use Case Overview"
---

# Use Case Overview

## Overview

This Implementation Guide (hereafter, “IG”) describes a method to communicate patient Event Notifications to support the real-time exchange of information that impacts patient care, including particularly the delivery of value-based or risk-based services. These notifications may include an admission to or discharge from a care facility or program or transfers to other facilities. In the future, these Event Notifications may include information about updates to diagnosis or treatment changes. Informing a patient’s care team of events such as admissions, transfers and discharges should improve care delivery quality and increase healthcare value.

This IG specifically covers Unsolicited Notifications and assumes that the Recipient System will be responsible for determining which users or processes should be alerted to such notifications. Potential recipients of such messages include any interested member of the care team, including but not limited to the patient’s primary care provider, specialist, or long-term care or post-acute care setting.

## Scope

The goal of this IG is to provide the technical framework for using [[The Direct Standard®](https://directtrust.org/standards/the-direct-standard/versions)](https://directtrust.org/standards/the-direct-standard/versions) for the transmission of Unsolicited Notifications between actors in the healthcare environment which are triggered by an event in or request to an Initiating System. It is intended to enable conformance with the CMS Interoperability and Patient Access Final Rule ([CMS-9115-F](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)).

While the technical approach here can support transmission of other kinds of events or information of interest to actors, this standard will initially be applicable to encounter-focused Event Notifications triggered by status changes of patients primarily in hospitals. While this IG will not specify triggering mechanisms, the events and the timing of these Event Notifications are expected to mirror those that map to a subset of HL7 V2.5.1 ADT message triggers.

## Use Cases

Unsolicited Notifications under this IG will typically involve two or more Business Actors or Actor Groupings.

An Initiating System and its associated HISP are responsible for complying with this IG. As such, there are alternative mechanisms to comply. In all cases, conformant HISP to HISP transactions SHALL comply with the IG, but some responsibilities may be handled by either the Initiating System or the Sending HISP.

Likewise, Receiving HISPs are responsible for complying with this IG. Receiving HISPs may tailor edge integration to the needs of a given Recipient System. This IG makes no additional constraints on the Recipient System. See Appendix [5.1.1.1](/09-vocabulary/#examples-utilizing-loinc-codes-in-xdm-metadata) for sample implementation workflows observed during adoption testing.

## In this section

- [1.1 Direct Secure Messaging](/01-use-case-overview/1-1-direct-secure-messaging)
- [1.2 The Need for a Standard](/01-use-case-overview/1-2-the-need-for-a-standard)
- [2.1 In Scope](/01-use-case-overview/2-1-in-scope)
- [2.2 Out of Scope for the Guide](/01-use-case-overview/2-2-out-of-scope-for-the-guide)
- [3.1 Two Business Actor Use Case](/01-use-case-overview/3-1-two-business-actor-use-case)
- [3.2 Three (or more) Business Actor Use Case](/01-use-case-overview/3-2-three-or-more-business-actor-use-case)
