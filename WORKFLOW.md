# Workflow: Vague Prompt vs. Precise Prompt

## Setup
Same feature — a settings form — built twice from the same starting scaffold (`round1-vague-prompt` commit `90540a2`), diffed against `round2-precise-prompt` commit `971b3fc`. Round 1 used a single one-line prompt with no constraints. Round 2 used a detailed prompt specifying exact fields, validation rules, timing, accessibility requirements, and a self-verification step.

## Correctness
Round 1's `SettingsForm.jsx` had **no validation logic at all**. The `email` field had a native `required` attribute, but `handleSubmit` called `setSavedMessage('Settings saved successfully.')` unconditionally — an empty or malformed email would still show a success message, since nothing checked `settings.email` before saving. Round 2's `validate()` function explicitly checks both fields (min 2 characters for name, a regex for email) and blocks submission via a disabled `Save` button until `isValid` is true. This is the mistake I caught: round 1 looked complete at a glance (it had a `required` input) but didn't actually enforce the "email must be valid" rule the way round 2's spec demanded — it would have shipped broken validation to a reviewer who didn't test it by hand.

## Scope / Correctness of Requirements
Round 1 invented eight fields (`displayName`, `email`, `username`, `bio`, `theme`, `language`, two notification checkboxes) plus a `Reset` button — none of which were asked for, since the prompt was just "add a settings form." Round 2 produced exactly the two fields specified: Full Name and Email. This is the clearest illustration of why vague prompts are risky: the model filled the gap with plausible-looking scope creep instead of asking, and a reviewer skimming the diff could easily approve fields the product never needed.

## Accessibility
Round 1 used `<label>` wrapping each `<input>` (implicit association), which is valid but doesn't handle error messaging since there were no errors to associate. Round 2 explicitly uses `htmlFor`/`id` pairs and `aria-describedby` pointing at `id="fullName-error"` / `id="email-error"`, plus `aria-invalid`, exactly matching the accessibility requirement stated in the prompt. Round 1's accessibility was accidental (a byproduct of normal form markup); round 2's was deliberate and traceable to a specific requirement line.

## Edge Cases
Round 1 showed no error state ever — `savedMessage` only ever showed success. Round 2 handles four explicit states: untouched/no error, touched+invalid, submit-attempted+invalid, and valid+success (auto-dismissing after 3 seconds). Round 2 was also self-tested against a written checklist (`TESTS.md`) covering empty submit, invalid email, valid submit, and blur-only behavior; round 1 had no test artifact at all.

## Review Effort
Round 1 took very little time to *generate* but required a full re-read to catch what was missing (validation, error UI, scope) — the review cost was hidden until I actually tried to break it. Round 2 took longer to prompt (writing the constraints), but the resulting diff was reviewable in a single pass because the constraints in the prompt doubled as an implicit checklist while reading the code. Net effect: round 2 was slower to start but faster end-to-end once review time is included, which was the whole point of the drill.
