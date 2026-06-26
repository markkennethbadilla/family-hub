# family-hub

A running database of family projects and errands. Each person gets a folder;
each project/errand gets a subfolder. Reuse past work as a base for new ones.

## Index

### Aunt
- **`aunt/edd-reports/`** — EdD coursework rendered as HTML slide presentations
  (4 lessons + shared `slides.css` / `slides.js`). Lessons:
  - `lesson1-learning-resources` — Learning Resources Management
  - `lesson2-strategic-planning` — Strategic Planning & Management Reporting
  - `lesson3-project-evaluation` — Project Development & Evaluation
  - `lesson4-educational-leadership` — Educational Leadership & Ethics
- **`aunt/source-material/`** — raw inputs the slides were built from
  (Word docs, Excel sheet, images + metadata).

### Mom
- *(nothing yet — ready for her projects)*

## Adding a new errand
1. Create `<person>/<short-slug>/` (e.g. `mom/permit-renewal/`).
2. Drop source material + any built output inside it.
3. Add a one-line entry under that person above.
