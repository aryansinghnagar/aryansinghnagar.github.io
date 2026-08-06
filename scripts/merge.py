"""Merge cover + body PDFs into final deliverable, then brand metadata."""
import os
import sys

from pypdf import PdfReader, PdfWriter

A4_W, A4_H = 595.28, 841.89  # A4 in points

COVER = '/home/z/my-project/scripts/cover.pdf'
BODY  = '/home/z/my-project/scripts/body.pdf'
OUT   = '/home/z/my-project/download/Portfolio_Build_Plan.pdf'


def normalize_page_to_a4(page):
    """Force every page to exact A4 dimensions to avoid sub-point mismatches."""
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    if abs(w - A4_W) > 0.5 or abs(h - A4_H) > 0.5:
        page.scale_to(A4_W, A4_H)
    return page


def main():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    writer = PdfWriter()

    # Cover as page 1
    cover_pages = PdfReader(COVER).pages
    for p in cover_pages:
        writer.add_page(normalize_page_to_a4(p))

    # Body pages follow
    body_pages = PdfReader(BODY).pages
    for p in body_pages:
        writer.add_page(normalize_page_to_a4(p))

    writer.add_metadata({
        '/Title': 'Professional Portfolio Build Plan',
        '/Author': 'Z.ai',
        '/Creator': 'Z.ai',
        '/Subject': 'Comprehensive build plan for a professional web portfolio deployed on GitHub Pages',
    })

    with open(OUT, 'wb') as f:
        writer.write(f)

    print(f'Final PDF written: {OUT}')
    print(f'  Pages: {len(cover_pages) + len(body_pages)}')
    print(f'  Size:  {os.path.getsize(OUT) / 1024:.1f} KB')


if __name__ == '__main__':
    main()
