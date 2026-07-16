# Homework Assignment — Task Management App (AI-Assisted Build)

## App Overview

A small React task management app that lets a user add tasks, mark them complete/incomplete, delete tasks, and see a live count of remaining tasks.

## Prompts Used

1. "Create a React task manager component with an input to add tasks, a list showing each task with a checkbox to mark it done, and a delete button per task. Use functional React with hooks, no external libraries."
2. "Add an empty state message when there are no tasks, and show a count of remaining (not done) tasks at the bottom."
3. "Make sure the delete button has an accessible label describing which task it deletes."

## How AI Helped

AI (Claude/Cursor) generated the full component structure in one pass — state management with `useState` for the task list and input field, the add/toggle/delete handlers, and conditional rendering for the empty state. It handled the boilerplate (form submission preventing default reload, mapping over the task array with stable `key` props using `Date.now()` as an id) faster than writing it by hand, and suggested the accessible `aria-label` pattern for the delete button without me having to specify the exact syntax.

## Manual Improvements / Corrections Made

- Trimmed and validated the input (`input.trim()`) before adding a task, so empty or whitespace-only tasks can't be added — the first AI draft allowed blank tasks to be submitted.
- Simplified the styling the AI initially generated (it included extra hover/transition effects not needed for this scope) to keep the CSS minimal and focused.
- Renamed a few internal variables (e.g., `list` → `tasks`) for clarity and consistency with the rest of the naming in the file.
