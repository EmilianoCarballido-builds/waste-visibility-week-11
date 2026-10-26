# Mechanical test record
Date: 25 October 2026, Mexico City. Executed by the coding agent; synthetic fixtures only.

## First release
Commit `f05f9fdca1a3b0f2e15c9c901de3307f430f1a0f`.
Deployment 1: `dpl_ADBD6sfyzMiyCqvdsn2VK6gMzAN6`, production, READY.
Immutable URL: https://waste-visibility-week-11-ldaprsn73-smart-business2.vercel.app
Initial test run: **9 passed, 0 failed**. See `evidence/initial-tests.txt`.

## Actual discovered bug
An edge-case test added after deployment found that `validateEntry` accepted an empty string, whitespace or null numeric field as zero because JavaScript `Number` coerces absence to 0. A missing independent reference could therefore be classified as a critical low event rather than missing information. Browser `required` checks usually prevented this through the form, but the underlying validation contract was wrong.

Reproduction: call `validateEntry` with an otherwise valid row and `reference: ''` (also checking/support empty, whitespace, null). Expected: reject missing input. Actual: no exception. The preserved run reports **10 tests, 9 passed, 1 failed**, `AssertionError: Missing expected exception`. See `evidence/regression-before.txt`. This was not an intentionally inserted bug.

Fix: reject null, undefined, unexpected types and whitespace-only values BEFORE numeric coercion; preserve valid numeric zero. The unchanged regression test passes afterward: **10 tests, 10 passed, 0 failed**. See `evidence/regression-after.txt`.

## Browser flow observations
- Public v1 loaded with simulation label, 32% synthetic sensor, independent 31% reference and fitted 6-hour estimate.
- Safety checkboxes + start enabled logging.
- Manual fixture: reference 31%, action yes, checking 3 min, support 2 min. Table displayed `Manual 1 1 5 0 0 0 0 0`.
- Digital fixture: reference 15%, warning no, checking 1, support 0. Table displayed one low event and one missed warning; status became PAUSA.
- Local corrected release: requiring refill with budget 0 paused an active trial. Switching to stable scenario retained PAUSA. Starting with no resource is also blocked.
- Local corrected release: withdrawal changed manual/digital counts to zero and displayed deletion confirmation plus PAUSA.
- Mobile width 390: document width 390, no page-level horizontal overflow; safety controls readable. Comparison table intentionally scrolls horizontally.
- Local corrected browser error/warning log returned an empty list.
- Extra correction: pause reason appears next to the form as well as at the top; a fresh fictional trial resets budget/resource controls too.

## Security inspection
No backend, database or stored personal data. Numeric/enum-only forms; textContent rendering; no fetch, cookies, localStorage, analytics, credentials or external runtime packages. Auth/RLS not applicable. Public access was explicitly approved by the user for this demo project; Vercel login protection disabled only for that project. Host-level ordinary request logging is outside the app's no-pilot-record-storage claim.

## Limits
No physical sensor, field calibration, adversarial penetration test, real household, real supplier, water quality check, or reliability validation. Ten tests are bounded evidence, not proof of safety. Production post-redeploy results and second deployment identifiers are recorded in DECISIONS.md.
