# Agua a la vista — Week 11
Emiliano Carballido · **ADVERSARY**, implementing the ADVERSARY / OPERATOR declaration.

A Spanish, simulation-only household tank prototype. The core deliverables are the **manual-versus-digital pilot log** and **warning/stop-rule checklist**, honoring Blueprint conditions **2, 4 and 5**.

Dragon stack: timestamped simulated sensing + fitted ordinary least-squares ML + marketplace-style matching of fictional response resources. No paid API, real supplier, booking, personal record, backend or physical sensor.

## Run
Serve `public/` with any static HTTP server, for example `python3 -m http.server 8000 --directory public`. Open http://localhost:8000 . Run tests with `node --test tests/*.test.mjs` (Node 22+). No install or build is required.

## Try the complete flow
1. Read the simulation banner; compare sensor and independent reference.
2. Check the three safety conditions and start the fictional rehearsal.
3. Record a manual observation, then a digital one. Compare actions and total effort.
4. Choose “Lectura equivocada” to trigger a missed-critical-warning pause. Changing the scenario does not lift it.
5. Withdraw to delete all session records. Reload also clears them.

## Evidence boundaries
The Blueprint is a proposed synthesis, not confirmed pilot evidence. No real household was tested. All forecast inputs, response costs and household codes are synthetic. Model fit error is not a validated prediction interval. The comparison always remains inconclusive. Real adoption needs a qualified installer, consent, ground-level reference, funded responses and calibrated thresholds.

Read [packet](docs/PACKET.md), [mechanical evidence](docs/MECHANICAL.md), [persona test](docs/PERSONA.md) and [session decisions](DECISIONS.md) as they are completed. The generated image is a conceptual mockup, not application evidence.

## Security and privacy
No secrets, dependencies, external scripts, database, storage API, cookies, analytics or personal-data fields. Inputs use bounds and allowlists; text is rendered with `textContent`. HTTPS hosting adds CSP, anti-framing, no-sniff, no-referrer and disabled camera/microphone/geolocation. Auth and RLS are not applicable because no personal data/database exists. Host infrastructure may retain ordinary web request metadata; “no records stored” refers to application pilot entries.

## Proposed future pilot
Six households, two-week baseline and two weeks per condition; three households in each randomized order. Record useful actions, checking/support time, interruptions, warning errors and supply changes. This prototype does not recruit households, run randomization, or validate that protocol.
