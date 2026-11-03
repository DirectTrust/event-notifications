---
title: "2.3 Scenarios"
---

# 2.3 Scenarios

In order to support coordinated care in circumstances where care team members do not all share the same system, standards-based electronic notifications to providers, clinicians, caregivers, and payers that request real-time updates are desirable. Initiating Systems need to be able to provide enough Context Metadata in the message to ensure Recipient Systems can alert the appropriate users, initiate the appropriate automated actions, and activate the appropriate workflow without the need to parse all of the attachments within the message.

This IG does not prohibit optional message content payloads or encapsulated data types that could support use cases beyond the initial scope of the Admit/Discharge/Transfer (ADT) Use Case (Initial Scenario).

## Admit/Discharge/Transfer Event Notifications Use Cases

While this IG can be used to support other types of notifications, the initial focus will be scenarios that will support compliance with the CMS Interoperability and Patient Access Final Rule ([CMS-9115-F](https://www.federalregister.gov/documents/2020/05/01/2020-05050/medicare-and-medicaid-programs-patient-protection-and-affordable-care-act-interoperability-and)).

The Rule requires that messages “convey, at a minimum, the patient’s basic personal or demographic information, as well as the name of the sending institution (that is, the hospital), and, if not prohibited by other applicable law, diagnosis.” As a part of this IG additional elements beyond those specified in the Rule are identified, including specific patient demographics that will enable effective patient matching, and additional “required if available” elements in both context and content that can help in routing, prioritizing and filtering by Recipient Systems.

To locate the preferred Direct address for delivering event notifications you can search an available directory. Additionally, for frequent exchange partners, inquire what their preferred Direct address is for receiving notifications.

### Scenarios

The following scenarios representing changes in patient status at the initiating business actor/sending facility SHALL be supported:

- Admission at Emergency Department

- Discharge from Emergency Department

- Admission to an Inpatient Facility

- Discharge from Inpatient Facility

- Transfers from Emergency to an Inpatient status

The following Transfers within the sending facility SHOULD also be supported:

- Transfer from Inpatient to ICU

The following Transfers are allowed but not required:

- Transfer/Step-down from ICU to Inpatient

- Other Transfers between inpatient services within a facility.

The following Outpatient events are allowed but not required:

- Admission to an Outpatient Department

- Discharge from an Outpatient Department

- Transfer between Outpatient Departments within the same organization

These SHALL be communicated in context and coded in LOINC according to the values found in Appendix [5.1.1](/05-value-sets-and-examples/5-1-value-sets-used-in-this-implementation-guide#loinc-codes-for-use-in-context-and-xdm-metadata) of this IG.

Additional information about the details related to a discharge from an inpatient facility represents other scenarios that can be considered a “transfer to another healthcare facility or to another community provider” referenced in the Rule. ADTA02 messages are most frequently used to communicate transfers within the sending facility such as those described above. In order to appropriately communicate about transfers to outside facilities or “External Transfers”, additional information in the PV1-36 (Discharge Disposition) segment must be considered.

Several code sets are in use that identify External Transfer scenarios. Initiating Systems SHALL use one of the following:

- The HL7 Value Set [Discharge Disposition](http://terminology.hl7.org/ValueSet/encounter-discharge-disposition) as stipulated in HL7 FHIR

- HL7 Table 112 codes referenced in the HL7 2.5.1 specification and referenced by C-CDA but under a different value set.

- SNOMED Codes used by quality measures for this same information

These code sets deal with the following discharge scenarios:

- Discharge to Home

- Discharge to Skilled Nursing Facility

- Discharge to Rehabilitation Facility

- Discharge to Other Healthcare Facility

- Discharge to Psychiatric Hospital

- Discharge to Hospice

- Discharge to Long-Term Care

- Discharge to Alternative Home

- Left against advice

- Expired

- Other

Coded elements are found in the HL7 ADT field PV1-36 (Discharge Disposition). In the case where the patient is to be transferred to another facility, the Facility Name SHOULD be provided in PV1-37 (Discharged to Location). This field SHOULD be the name of the facility to which the patient is being discharged.

These fields will not be represented in Context Metadata and will require receivers and intermediaries to parse and evaluate the contents of the HL7 V2 message to facilitate appropriate routing and workflows.
