# CRM Master Data Sample: Neutral Oil Trading

## Purpose

Synthetic, public-safe master data for UAT, training and automated tests in an oil-trading scenario. The dataset uses neutral names and a historical 1978-1986 business context. It does not contain real personal, banking or vessel-identification data.

All IDs are stable test keys. Names can be selected in UI lists; tests should retain the corresponding IDs after selection.

## 1. Counterparties

| ID | Name (ENG) | Legal Form (ENG) | Abbreviation | Group Company | Name (RUS) | Legal Form (RUS) | INN | VAT Code | Registration Certificate No. | Country | City/Locality |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CP-NORTHSTAR | Northstar Trading Ltd | Limited Company | NST | Northstar Group | Нортстар Трейдинг | Общество с ограниченной ответственностью | N/A | N/A | REG-NST-1978 | United Kingdom | London |
| CP-MERIDIAN | Meridian Refining Co. | Corporation | MRC | Meridian Group | Меридиан Рефайнинг | Корпорация | N/A | N/A | REG-MRC-1981 | United States | Houston |
| CP-ATLAS | Atlas Marine Services | Limited Company | AMS | Atlas Group | Атлас Марин Сервисез | Общество с ограниченной ответственностью | N/A | N/A | REG-AMS-1980 | Netherlands | Rotterdam |
| CP-HARBOR | Harbor Shield Insurance Co. | Corporation | HSI | Harbor Group | Харбор Шилд Иншурэнс | Корпорация | N/A | N/A | REG-HSI-1979 | United Kingdom | London |

## 2. Banks

| ID | Name (ENG) | Name (RUS) | Short Name / Abbreviation | SWIFT/BIC | Tax ID (INN) | Region | Bank ID | Country | City/Locality | Street | Building/Block |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| BANK-MERIDIAN | Meridian Commercial Bank | Меридиан Коммерческий Банк | MCB | MCBKXX00 | N/A | Greater London | BANK-001 | United Kingdom | London | King Street | 10 |
| BANK-HARBOR | Harbor Settlement Bank | Харбор Сеттлемент Банк | HSB | HSBKXX00 | N/A | Zuid-Holland | BANK-002 | Netherlands | Rotterdam | Port Avenue | 4 |

## 3. Bank Accounts

| ID | Bank | Account No. | IBAN | Currency | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| ACC-NST-USD | BANK-MERIDIAN | TEST-ACC-NST-USD | GB00TEST000000000001 | USD | Active | UAT settlement account for Northstar Trading |
| ACC-NST-EUR | BANK-HARBOR | TEST-ACC-NST-EUR | NL00TEST000000000002 | EUR | Active | UAT settlement account for port-related payments |
| ACC-MRC-USD | BANK-MERIDIAN | TEST-ACC-MRC-USD | GB00TEST000000000003 | USD | Active | UAT counterparty account |

## 4. Tankers / Vessels

| ID | Vessel ID | Vessel Name | Type / Vessel Type | Capacity (DWT) | Flag / Flag State | Built | Owner | Operator | Storage | MO # | MMSI # | Sanction Status | Status |
| --- | --- | --- | --- | ---: | --- | ---: | --- | --- | --- | --- | --- | --- | --- |
| VESSEL-HORIZON-01 | VSL-HT-01 | Horizon Trader | Product Tanker | 42000 | Liberia | 1978 | Northstar Fleet Holdings | Atlas Marine Services | Stainless steel parcel tanks | MO-HT-1978 | N/A | Clear - sample | Active |
| VESSEL-MERIDIAN-02 | VSL-MR-02 | Meridian Runner | Product Tanker | 38000 | Panama | 1982 | Meridian Fleet Company | Atlas Marine Services | Coated cargo tanks | MO-MR-1982 | N/A | Clear - sample | Active |

## 5. Shippers

| ID | Shipper ID | Shipper Name | Vessel Assigned | Speciality | Base Port | License No. |
| --- | --- | --- | --- | --- | --- | --- |
| SHIPPER-ATLAS | SHP-AMS-01 | Atlas Marine Services | VESSEL-HORIZON-01 | Petroleum product shipping | PORT-ROTTERDAM | LIC-AMS-1980 |
| SHIPPER-MERIDIAN | SHP-MRC-02 | Meridian Refining Co. | VESSEL-MERIDIAN-02 | Refinery cargo shipping | PORT-HOUSTON | LIC-MRC-1981 |

## 6. Projects & Subprojects

| ID | Project ID | Project Name | Subproject ID | Subproject Name | Status | Lead | Start Date | End Date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PROJECT-NET-1980 | PRJ-NET-1980 | Neutral Energy Trading 1980 | SUBPROJECT-CRUDE-01 | Coastal Product Flow | Active | USER-TRADING-01 | 1980-01-01 | 1986-12-31 |
| PROJECT-NET-1980 | PRJ-NET-1980 | Neutral Energy Trading 1980 | SUBPROJECT-REFINED-02 | Refined Product Flow | Active | USER-TRADING-01 | 1980-01-01 | 1986-12-31 |

## 7. Characteristics

| ID | Characteristic ID | Characteristic Name | Unit | Min Value | Max Value | Description |
| --- | --- | --- | --- | ---: | ---: | --- |
| CHAR-DENSITY | CHR-DENSITY | Density | kg/m3 | 650 | 900 | Product density at reference temperature |
| CHAR-SULFUR | CHR-SULFUR | Sulfur Content | % mass | 0 | 5 | Maximum sulfur content for sample cargo |
| CHAR-OCTANE | CHR-OCTANE | Octane Rating | RON | 70 | 100 | Applicable to gasoline-range product |
| CHAR-TEMP | CHR-TEMP | Reference Temperature | C | 0 | 50 | Temperature used for quantity conversion |

## 8. Products & Subproducts

| Product ID | Product Name | Subproduct ID | Subproduct Name |
| --- | --- | --- | --- |
| PRODUCT-CRUDE-A | Neutral Crude Blend A | SUBPRODUCT-CRUDE-A-01 | Crude Blend A - Standard |
| PRODUCT-DISTILLATE-B | Neutral Distillate B | SUBPRODUCT-DISTILLATE-B-01 | Distillate B - Standard |

## 9. Product Characteristics

| Product / Subproduct | Characteristic Name | Value / Range | Unit | Description |
| --- | --- | --- | --- | --- |
| SUBPRODUCT-CRUDE-A-01 | Density | 780-840 | kg/m3 | Standard sample range |
| SUBPRODUCT-CRUDE-A-01 | Sulfur Content | <= 1.5 | % mass | Contract quality range |
| SUBPRODUCT-DISTILLATE-B-01 | Density | 720-780 | kg/m3 | Standard sample range |
| SUBPRODUCT-DISTILLATE-B-01 | Octane Rating | 80-90 | RON | Reference product characteristic |

## 10. Escalations

| ID | Product / Subproduct | Escalation Name | Characteristic | Type | Direction | Value / Threshold | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ESC-CRUDE-SULFUR | SUBPRODUCT-CRUDE-A-01 | Sulfur Adjustment | CHAR-SULFUR | Threshold | Increase | > 1.0% | Sample price adjustment per excess sulfur |
| ESC-DISTILLATE-OCTANE | SUBPRODUCT-DISTILLATE-B-01 | Octane Adjustment | CHAR-OCTANE | Threshold | Increase | < 85 RON | Sample quality adjustment |
| ESC-DENSITY | PRODUCT-CRUDE-A | Density Adjustment | CHAR-DENSITY | Range | Increase/Decrease | Outside 780-840 | Sample conversion adjustment |

## 11. Project & Subproject Links

| Project Name | Subproject Name | Status | Lead | Start Date | End Date | Linked User | Linked Product | Linked Counterparty |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRJ-NET-1980 | SUBPROJECT-CRUDE-01 | Active | USER-TRADING-01 | 1980-01-01 | 1986-12-31 | USER-TRADING-01 | PRODUCT-CRUDE-A | CP-NORTHSTAR |
| PRJ-NET-1980 | SUBPROJECT-REFINED-02 | Active | USER-TRADING-01 | 1980-01-01 | 1986-12-31 | USER-TRADING-01 | PRODUCT-DISTILLATE-B | CP-MERIDIAN |

## 12. Load & Unload Ports

| ID | Port Name | UN/LOCODE | Country/Region | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| PORT-ROTTERDAM | Rotterdam Sample Terminal | NLRTM | Netherlands / Zuid-Holland | Active | Public UN/LOCODE used for UAT route |
| PORT-HOUSTON | Houston Sample Terminal | USHOU | United States / Texas | Active | Public UN/LOCODE used for UAT route |
| PORT-SINGAPORE | Singapore Sample Terminal | SGSIN | Singapore | Active | Alternative route endpoint |

## 13. Resources

| ID | Resource Name | UN/LOCODE | Country/Region | Status | Notes |
| --- | --- | --- | --- | --- | --- |
| RESOURCE-RTM-TANK-01 | Rotterdam Sample Tank Farm 01 | NLRTM | Netherlands / Zuid-Holland | Active | Storage resource for UAT batch |
| RESOURCE-HOU-PIER-01 | Houston Sample Pier 01 | USHOU | United States / Texas | Active | Loading and unloading resource |
| RESOURCE-OPS-TEAM-01 | Neutral Trading Operations Team | N/A | N/A | Active | Operational resource for workflow assignment |

## Suggested baseline flow

Use the following references for the default purchase-sale scenario:

- Project: `PRJ-NET-1980` / `SUBPROJECT-CRUDE-01`;
- Product: `PRODUCT-CRUDE-A` / `SUBPRODUCT-CRUDE-A-01`;
- Supplier: `CP-NORTHSTAR`;
- Buyer/refinery: `CP-MERIDIAN`;
- Vessel: `VESSEL-HORIZON-01`;
- Shipper: `SHIPPER-ATLAS`;
- Load port: `PORT-ROTTERDAM`;
- Unload port: `PORT-HOUSTON`;
- Warehouse/resource: `RESOURCE-RTM-TANK-01`;
- Settlement bank account: `ACC-NST-USD`;
- Currency: USD;
- Unit of measure: MT;
- Historical flow period: 1980-06-01 to 1980-08-31.

This baseline is synthetic and should be replaced with approved environment data when the UAT master-data request is completed.
