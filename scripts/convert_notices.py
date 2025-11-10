#!/usr/bin/env python3
"""
convert_notices.py

Code written entirely by copilot clanker

Scan markdown files for the old inline notice flags like
    Some paragraph
    {: .notice--warning}

and replace them with the block style:

::: warning
Some paragraph
:::

This script edits files in-place and creates a .bak backup for safety.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]

NOTICE_RE = re.compile(r"^\s*\{:\s*\.notice--([a-zA-Z0-9_-]+)\s*}\s*$")


def process_file(path: Path) -> int:
    text = path.read_text(encoding="utf-8")
    lines = text.splitlines()
    out_lines = []
    i = 0
    changed = 0
    while i < len(lines):
        m = NOTICE_RE.match(lines[i])
        if m:
            # We found a standalone inline notice marker on its own line.
            typ = m.group(1)
            # Look back to find the start of the paragraph (previous non-empty block of lines)
            # We'll treat the paragraph as the immediately preceding non-empty line(s) until a blank line or list/code fence.
            # If out_lines is empty, nothing to wrap; just skip.
            if not out_lines:
                # nothing to wrap, copy marker as-is
                out_lines.append(lines[i])
                i += 1
                continue

            # Pop previous paragraph lines
            para = []
            while out_lines and out_lines[-1].strip() != "":
                para.append(out_lines.pop())
            para.reverse()

            # Insert block wrapper
            out_lines.append(f"::: {typ}")
            out_lines.extend(para)
            out_lines.append(":::")
            changed += 1
            i += 1
            # Skip the marker line (already processed)
        else:
            out_lines.append(lines[i])
            i += 1

    if changed:
        bak = path.with_suffix(path.suffix + ".bak")
        path.rename(bak)
        path.write_text("\n".join(out_lines) + "\n", encoding="utf-8")
        print(f"Updated {path} (wrapped {changed} notices) -> backup at {bak}")
    return changed


def main():
    md_files = list((ROOT / "docs").rglob("*.md"))
    total = 0
    for p in md_files:
        total += process_file(p)
    print(f"Total notices replaced: {total}")


if __name__ == "__main__":
    main()
