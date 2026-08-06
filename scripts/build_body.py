"""
Portfolio Build Plan — Body PDF Generator
Generates a multi-page A4 report body via ReportLab, then merged with HTML cover.

Theme: Dark Neon Blue x Platinum
Tech: ReportLab + TocDocTemplate + install_font_fallback
"""

import os
import sys
import hashlib
import platform

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import inch, mm
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_RIGHT, TA_JUSTIFY
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, PageBreak, Table, TableStyle,
    KeepTogether, HRFlowable, CondPageBreak, Image, Flowable, ListFlowable, ListItem
)
from reportlab.platypus.tableofcontents import TableOfContents
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily
from reportlab.pdfgen import canvas

# ─── Path setup ───────────────────────────────────────────────────────────
PDF_SKILL_DIR = "/home/z/my-project/skills/pdf"
sys.path.insert(0, os.path.join(PDF_SKILL_DIR, "scripts"))
from pdf import install_font_fallback  # noqa: E402

# ─── Font registration ────────────────────────────────────────────────────
_IS_MAC = platform.system() == 'Darwin'
FONT_DIR = os.path.expanduser('~/.openclaw/workspace/fonts') if _IS_MAC else '/usr/share/fonts'

pdfmetrics.registerFont(TTFont('NotoSerifSC', f'{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Regular.ttf'))
pdfmetrics.registerFont(TTFont('NotoSerifSC-Bold', f'{FONT_DIR}/truetype/noto-serif-sc/NotoSerifSC-Bold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif', f'{FONT_DIR}/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', f'{FONT_DIR}/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', f'{FONT_DIR}/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', f'{FONT_DIR}/truetype/freefont/FreeSerifBoldItalic.ttf'))
pdfmetrics.registerFont(TTFont('DejaVuSans', f'{FONT_DIR}/truetype/dejavu/DejaVuSansMono.ttf'))

registerFontFamily('NotoSerifSC', normal='NotoSerifSC', bold='NotoSerifSC-Bold')
registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold',
                   italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')

install_font_fallback()

# ─── Palette (cascade, dark mode) ─────────────────────────────────────────
# Custom-tuned to match cover: dark navy bg, neon blue accent, platinum text
PAGE_BG       = colors.HexColor('#0a0f1f')
SECTION_BG    = colors.HexColor('#0f1530')
CARD_BG       = colors.HexColor('#131a3a')
TABLE_STRIPE  = colors.HexColor('#0d1228')
HEADER_FILL   = colors.HexColor('#1a3358')   # M tier — table headers
COVER_BLOCK   = colors.HexColor('#0a1228')
BORDER        = colors.HexColor('#2a3a5a')
ICON          = colors.HexColor('#7da3d4')
ACCENT        = colors.HexColor('#00d4ff')   # Neon electric blue
ACCENT_2      = colors.HexColor('#c8d0e0')   # Platinum silver
TEXT_PRIMARY  = colors.HexColor('#f0f4ff')   # Platinum white
TEXT_MUTED    = colors.HexColor('#8b95b8')
TEXT_SECONDARY = colors.HexColor('#a8b4d8')

# ─── Layout constants ─────────────────────────────────────────────────────
PAGE_W, PAGE_H = A4
LEFT_M  = 0.85 * inch
RIGHT_M = 0.85 * inch
TOP_M   = 0.85 * inch
BOTTOM_M = 0.85 * inch
CONTENT_W = PAGE_W - LEFT_M - RIGHT_M

# ─── Styles ───────────────────────────────────────────────────────────────
BODY_FONT = 'FreeSerif'
BOLD_FONT = 'FreeSerif-Bold'
ITALIC_FONT = 'FreeSerif-Italic'

styles = {}

styles['H1'] = ParagraphStyle(
    name='H1', fontName=BOLD_FONT, fontSize=22, leading=28,
    textColor=TEXT_PRIMARY, spaceBefore=10, spaceAfter=4, alignment=TA_LEFT,
)
styles['H1Accent'] = ParagraphStyle(
    name='H1Accent', fontName=BOLD_FONT, fontSize=11, leading=14,
    textColor=ACCENT, spaceBefore=0, spaceAfter=8, alignment=TA_LEFT,
)
styles['H2'] = ParagraphStyle(
    name='H2', fontName=BOLD_FONT, fontSize=14, leading=20,
    textColor=ACCENT, spaceBefore=16, spaceAfter=6, alignment=TA_LEFT,
)
styles['H3'] = ParagraphStyle(
    name='H3', fontName=BOLD_FONT, fontSize=11.5, leading=16,
    textColor=ACCENT_2, spaceBefore=10, spaceAfter=4, alignment=TA_LEFT,
)
styles['Body'] = ParagraphStyle(
    name='Body', fontName=BODY_FONT, fontSize=10.5, leading=17,
    textColor=TEXT_PRIMARY, spaceBefore=0, spaceAfter=8, alignment=TA_JUSTIFY,
    firstLineIndent=0,
)
styles['BodyTight'] = ParagraphStyle(
    name='BodyTight', fontName=BODY_FONT, fontSize=10.5, leading=16,
    textColor=TEXT_PRIMARY, spaceBefore=0, spaceAfter=4, alignment=TA_LEFT,
)
styles['Bullet'] = ParagraphStyle(
    name='Bullet', fontName=BODY_FONT, fontSize=10.5, leading=16,
    textColor=TEXT_PRIMARY, spaceBefore=2, spaceAfter=2,
    leftIndent=18, bulletIndent=4, alignment=TA_LEFT,
)
styles['CalloutLabel'] = ParagraphStyle(
    name='CalloutLabel', fontName='DejaVuSans', fontSize=8.5, leading=11,
    textColor=TEXT_MUTED, alignment=TA_LEFT,
)
styles['CalloutBig'] = ParagraphStyle(
    name='CalloutBig', fontName=BOLD_FONT, fontSize=18, leading=22,
    textColor=ACCENT, alignment=TA_LEFT,
)
styles['CalloutBody'] = ParagraphStyle(
    name='CalloutBody', fontName=BODY_FONT, fontSize=9.5, leading=14,
    textColor=TEXT_SECONDARY, alignment=TA_LEFT,
)
styles['TableHeader'] = ParagraphStyle(
    name='TableHeader', fontName=BOLD_FONT, fontSize=10, leading=13,
    textColor=colors.white, alignment=TA_LEFT,
)
styles['TableCell'] = ParagraphStyle(
    name='TableCell', fontName=BODY_FONT, fontSize=9.5, leading=13,
    textColor=TEXT_PRIMARY, alignment=TA_LEFT,
)
styles['TableCellMuted'] = ParagraphStyle(
    name='TableCellMuted', fontName=BODY_FONT, fontSize=9.5, leading=13,
    textColor=TEXT_MUTED, alignment=TA_LEFT,
)
styles['TableCellAccent'] = ParagraphStyle(
    name='TableCellAccent', fontName='DejaVuSans', fontSize=9, leading=13,
    textColor=ACCENT, alignment=TA_LEFT,
)
styles['Code'] = ParagraphStyle(
    name='Code', fontName='DejaVuSans', fontSize=9, leading=13,
    textColor=ACCENT_2, leftIndent=12, alignment=TA_LEFT,
    backColor=CARD_BG, borderPadding=8, spaceBefore=4, spaceAfter=4,
)
styles['Quote'] = ParagraphStyle(
    name='Quote', fontName=ITALIC_FONT, fontSize=11, leading=17,
    textColor=ACCENT_2, leftIndent=18, rightIndent=18,
    spaceBefore=8, spaceAfter=8, alignment=TA_LEFT,
)
styles['TOCTitle'] = ParagraphStyle(
    name='TOCTitle', fontName=BOLD_FONT, fontSize=22, leading=28,
    textColor=TEXT_PRIMARY, spaceAfter=18, alignment=TA_LEFT,
)
styles['Footer'] = ParagraphStyle(
    name='Footer', fontName='DejaVuSans', fontSize=7.5, leading=10,
    textColor=TEXT_MUTED, alignment=TA_LEFT,
)
styles['PageNum'] = ParagraphStyle(
    name='PageNum', fontName='DejaVuSans', fontSize=7.5, leading=10,
    textColor=TEXT_MUTED, alignment=TA_RIGHT,
)
styles['TOC1'] = ParagraphStyle(
    name='TOC1', fontName=BOLD_FONT, fontSize=11, leading=22,
    textColor=TEXT_PRIMARY, leftIndent=0,
)
styles['TOC2'] = ParagraphStyle(
    name='TOC2', fontName=BODY_FONT, fontSize=10, leading=18,
    textColor=TEXT_SECONDARY, leftIndent=20,
)

# ─── Helpers ──────────────────────────────────────────────────────────────

def add_heading(text, style, level=0):
    """Add a bookmarked heading for TOC tracking."""
    key = 'h_' + hashlib.md5(text.encode()).hexdigest()[:8]
    p = Paragraph('<a name="%s"/>%s' % (key, text), style)
    p.bookmark_name = text
    p.bookmark_level = level
    p.bookmark_text = text
    p.bookmark_key = key
    return p


def section_header(kicker, title):
    """Two-line section header: small accent kicker + bold H1 title."""
    return [
        CondPageBreak(120),
        Paragraph(kicker.upper(), styles['H1Accent']),
        add_heading(title, styles['H1'], level=0),
        HRFlowable(width=CONTENT_W, color=ACCENT, thickness=1.2,
                   spaceBefore=2, spaceAfter=14),
    ]


def callout(label, big, body, width=None):
    """Accent-bordered callout box for stat / metric."""
    if width is None:
        width = CONTENT_W * 0.46
    inner = [
        [Paragraph(label.upper(), styles['CalloutLabel'])],
        [Paragraph('<b>%s</b>' % big, styles['CalloutBig'])],
        [Paragraph(body, styles['CalloutBody'])],
    ]
    t = Table(inner, colWidths=[width - 20])
    t.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), CARD_BG),
        ('LINEBEFORE', (0, 0), (-1, -1), 2, ACCENT),
        ('LEFTPADDING', (0, 0), (-1, -1), 14),
        ('RIGHTPADDING', (0, 0), (-1, -1), 14),
        ('TOPPADDING', (0, 0), (0, 0), 10),
        ('BOTTOMPADDING', (0, -1), (-1, -1), 12),
        ('TOPPADDING', (0, 1), (-1, -1), 4),
        ('BOTTOMPADDING', (0, 0), (-1, -2), 4),
    ]))
    return t


def two_col_callouts(items):
    """Two-column row of callouts. items = [(label, big, body), ...]"""
    cells = []
    for it in items:
        cells.append(callout(it[0], it[1], it[2], width=CONTENT_W / 2 - 6))
    row = [cells]
    t = Table(row, colWidths=[CONTENT_W / 2, CONTENT_W / 2])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0),
        ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    return t


def styled_table(data, col_ratios, header=True):
    """Build a table from list-of-lists of Paragraph-ready strings."""
    col_widths = [r * CONTENT_W for r in col_ratios]
    rows = []
    for i, row in enumerate(data):
        rendered = []
        for j, cell in enumerate(row):
            if i == 0 and header:
                rendered.append(Paragraph('<b>%s</b>' % cell, styles['TableHeader']))
            else:
                rendered.append(Paragraph(cell, styles['TableCell']))
        rows.append(rendered)
    t = Table(rows, colWidths=col_widths, hAlign='CENTER', repeatRows=1 if header else 0)
    style_cmds = [
        ('VALIGN', (0, 0), (-1, -1), 'MIDDLE'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 7),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 7),
        ('LINEBELOW', (0, 0), (-1, 0), 0.8, ACCENT),
        ('GRID', (0, 0), (-1, -1), 0.25, BORDER),
    ]
    if header:
        style_cmds.append(('BACKGROUND', (0, 0), (-1, 0), HEADER_FILL))
        style_cmds.append(('TEXTCOLOR', (0, 0), (-1, 0), colors.white))
        # zebra stripes
        for r in range(1, len(rows)):
            if r % 2 == 0:
                style_cmds.append(('BACKGROUND', (0, r), (-1, r), TABLE_STRIPE))
            else:
                style_cmds.append(('BACKGROUND', (0, r), (-1, r), SECTION_BG))
    t.setStyle(TableStyle(style_cmds))
    return t


def bullet_list(items):
    """Render a list of bullet items using ListFlowable."""
    list_items = [
        ListItem(Paragraph(it, styles['BodyTight']),
                 leftIndent=18, value='circle',
                 bulletColor=ACCENT)
        for it in items
    ]
    return ListFlowable(
        list_items, bulletType='bullet', start='circle',
        leftIndent=14, bulletFontName='DejaVuSans', bulletFontSize=8,
        bulletColor=ACCENT, spaceBefore=2, spaceAfter=8,
    )


# ─── Page decoration: dark background, accent rule, footer ────────────────

def on_page(canv, doc):
    canv.saveState()
    # Full-page dark background
    canv.setFillColor(PAGE_BG)
    canv.rect(0, 0, PAGE_W, PAGE_H, stroke=0, fill=1)

    # Top accent strip
    canv.setFillColor(ACCENT)
    canv.rect(0, PAGE_H - 6, PAGE_W, 6, stroke=0, fill=1)

    # Side accent ticks (left margin gutter)
    canv.setFillColor(ACCENT)
    canv.rect(LEFT_M - 24, BOTTOM_M, 1.5, PAGE_H - TOP_M - BOTTOM_M, stroke=0, fill=1)

    # Footer rule
    canv.setStrokeColor(BORDER)
    canv.setLineWidth(0.5)
    canv.line(LEFT_M, BOTTOM_M - 16, PAGE_W - RIGHT_M, BOTTOM_M - 16)

    # Footer text — left
    canv.setFillColor(TEXT_MUTED)
    canv.setFont('DejaVuSans', 7.5)
    canv.drawString(LEFT_M, BOTTOM_M - 28, 'PORTFOLIO BUILD PLAN  ·  AI/ML · DATA SCIENCE · FULL-STACK')

    # Footer text — right (page number)
    page_str = '%02d' % canv.getPageNumber()
    canv.setFillColor(ACCENT)
    canv.setFont('DejaVuSans', 7.5)
    canv.drawRightString(PAGE_W - RIGHT_M, BOTTOM_M - 28, page_str)

    canv.restoreState()


# ─── TocDocTemplate ───────────────────────────────────────────────────────

class TocDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if hasattr(flowable, 'bookmark_name'):
            level = getattr(flowable, 'bookmark_level', 0)
            text = getattr(flowable, 'bookmark_text', '')
            key = getattr(flowable, 'bookmark_key', '')
            self.notify('TOCEntry', (level, text, self.page, key))


# ─── Story builder ────────────────────────────────────────────────────────

def build_story():
    story = []

    # ─── TOC ──────────────────────────────────────────────────────────────
    story.append(Paragraph('<a name="toc"/>Table of Contents', styles['TOCTitle']))
    story.append(HRFlowable(width=CONTENT_W, color=ACCENT, thickness=1.2,
                            spaceBefore=0, spaceAfter=18))
    toc = TableOfContents()
    toc.levelStyles = [styles['TOC1'], styles['TOC2']]
    story.append(toc)
    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 1. Executive Summary
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 01', 'Executive Summary'))

    story.append(Paragraph(
        'This document presents a comprehensive build plan for a professional web portfolio '
        'deployed on GitHub Pages, designed to position the candidate across AI/ML, Data Science, '
        'and Full-Stack engineering roles. The portfolio blends Modern Bold typography with '
        'Dark Sleek aesthetics, anchored by a Dark Neon Blue base color with Neon Silver/Platinum '
        'accents. Every section, layout decision, and technology choice below has been derived '
        'from current industry standards for developer portfolios in 2026, with particular '
        'attention to what hiring managers and technical recruiters actually look for when '
        'evaluating candidates in AI/ML and adjacent fields.', styles['Body']))

    story.append(Paragraph(
        'The plan covers positioning strategy, technology stack selection, a complete design '
        'system specification, section-by-section content architecture, AI/ML-specific showcase '
        'elements, feature checklist, deployment workflow, and a phased build execution order. '
        'It is structured so that the candidate can verify each layer before any code is written, '
        'and so that downstream implementation can proceed in clean phases with measurable '
        'deliverables at each step.', styles['Body']))

    story.append(Spacer(1, 12))
    story.append(two_col_callouts([
        ('Target Role',  'AI / ML', 'Primary positioning, with Data Science as secondary and Full-Stack as tertiary credibility layer.'),
        ('Tech Stack',   'Next.js 16', 'App Router + TypeScript + Tailwind CSS 4 + shadcn/ui + Framer Motion, statically exported to GitHub Pages.'),
    ]))
    story.append(Spacer(1, 10))
    story.append(two_col_callouts([
        ('Design Theme', 'Neon Blue', 'Dark Neon Blue (#00d4ff) with Platinum Silver (#c8d0e0) accents, blending Modern Bold and Dark Sleek aesthetics.'),
        ('Domain',       'github.io', 'Free GitHub Pages subdomain (username.github.io), with custom domain option preserved for future migration.'),
    ]))
    story.append(Spacer(1, 14))

    story.append(Paragraph(
        'The remainder of this document walks through each layer of the plan in detail. '
        'After review, the candidate should approve the plan as-is or request changes before '
        'the build phase begins. Three material inputs are required before implementation: '
        'the candidate\u2019s resume (PDF or text), LinkedIn profile URL, and GitHub profile URL. '
        'A short list of optional but high-impact inputs (target companies, project screenshots, '
        'headshot, email address, analytics preference) is also collected at the end of the document.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 2. Research Findings — Modern Portfolio Standards
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 02', 'Research Findings: Modern Portfolio Standards'))

    story.append(Paragraph(
        'Before drafting the plan, current industry standards for developer portfolios were '
        'researched across multiple sources covering general design trends, AI/ML-specific '
        'expectations, Data Science portfolio practices, Full-Stack conventions, GitHub Pages '
        'deployment patterns, and recruiter-side evaluation criteria. The findings below '
        'represent the consensus view across these sources as of late 2025 and early 2026, '
        'and they directly inform every architectural and design choice in this plan.', styles['Body']))

    story.append(add_heading('2.1  Cross-Discipline Consensus', styles['H2'], level=1))
    story.append(Paragraph(
        'The research surfaced a clear consensus across all four target disciplines '
        '(AI/ML, Data Science, Full-Stack, Web Dev) on what a modern portfolio must contain '
        'and how it should be built. The table below summarizes the seven dimensions that '
        'appeared repeatedly in best-practice guides, recruiter interviews, and award-winning '
        'portfolio case studies. These dimensions form the baseline against which this plan '
        'is calibrated.', styles['Body']))

    story.append(Spacer(1, 6))
    story.append(styled_table(
        [
            ['Dimension', 'Industry Standard (2026)'],
            ['Tech Stack',
             'Next.js 16 / Astro + TypeScript + Tailwind CSS, statically exported to GitHub Pages. The React-based Next.js stack remains the dominant choice for developer portfolios in 2026.'],
            ['Must-Have Sections',
             'Hero, About, Skills, Experience, Featured Projects, Resume download, Contact. Universally cited across recruiter and developer sources as the baseline minimum.'],
            ['Recruiter Priorities',
             'Real impact with quantified metrics, tech-stack match, evidence of problem-solving ability, clean and readable GitHub code, and an easy-to-find contact path.'],
            ['AI/ML Specifics',
             'Models with measurable metrics (accuracy, F1, latency, throughput), datasets, experiment tracking (W&B / MLflow), paper implementations, and live demos or notebook links.'],
            ['Data Science Specifics',
             'End-to-end project narratives: business problem, data acquisition, methodology, visualization, and measurable business impact. Reproducible notebooks are expected.'],
            ['Full-Stack Specifics',
             'Architecture diagrams, live deployed demos, both frontend and backend evidence, CI/CD pipeline visibility, and explicit deployment target documentation.'],
            ['Design Trends',
             'Dark-mode-first with toggle, bold typography (Space Grotesk, Inter), smooth scroll animations (Framer Motion), restrained glassmorphism accents, micro-interactions.'],
            ['Performance',
             'Lighthouse score 90+, LCP under 2.5 seconds, mobile-first responsive layout, static generation for fast first paint, lazy-loaded media assets.'],
        ],
        col_ratios=[0.22, 0.78],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('2.2  Recruiter Perspective', styles['H2'], level=1))
    story.append(Paragraph(
        'Recruiter-side sources were particularly valuable in calibrating the plan. The '
        'consistent message from hiring managers and technical recruiters was that '
        'portfolios are still actively reviewed, especially at later interview stages and '
        'for senior or specialized roles. AI-assisted resume screening has become common, '
        'but human reviewers continue to use portfolios as a differentiator between '
        'candidates with similar resumes. The three primary filters recruiters apply are '
        'work history, tech-stack match, and educational background, but a strong portfolio '
        'can override weaknesses in any of the three by providing direct evidence of '
        'capability that a resume cannot convey.', styles['Body']))

    story.append(Paragraph(
        'Specifically, recruiters look for outcomes and metrics rather than lists of '
        'technologies. A project described as "fine-tuned BERT classifier achieving 0.94 F1 '
        'on a 50k-row imbalanced dataset, deployed behind a FastAPI endpoint serving 200 '
        'requests per second" is dramatically more compelling than "built a sentiment '
        'analysis model using BERT." This insight directly informs the Featured Projects '
        'architecture in Section 6, which mandates a metric field for every project card.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 3. Positioning Strategy
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 03', 'Positioning Strategy'))

    story.append(Paragraph(
        'The portfolio positions the candidate across three layers of professional identity, '
        'with explicit primary, secondary, and tertiary roles. This layered approach lets the '
        'portfolio speak to multiple job families without diluting the message: a recruiter '
        'scanning for ten seconds sees a clear primary positioning, while a hiring manager '
        'digging deeper discovers the supporting breadth. The hero tagline condenses this '
        'layering into a single line: "AI/ML Engineer  ·  Data Scientist  ·  Full-Stack '
        'Developer."', styles['Body']))

    story.append(add_heading('3.1  Role Layering', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Layer', 'Role', 'How It Shows Up'],
            ['Primary', 'AI / ML Engineer',
             'Lead with models, experiments, datasets, paper implementations, metrics (accuracy, F1, latency), and live demos. This is the dominant lens through which the portfolio reads.'],
            ['Secondary', 'Data Scientist',
             'End-to-end project stories that walk through business problem, data acquisition, methodology, visualization, and measurable impact. Reinforces analytical depth.'],
            ['Tertiary', 'Full-Stack / Web Dev',
             'Evidence that the candidate can build and deploy the systems that serve ML models in production. Establishes generalist credibility and removes the "research-only" stereotype.'],
        ],
        col_ratios=[0.13, 0.22, 0.65],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('3.2  Why Layered Positioning Works', styles['H2'], level=1))
    story.append(Paragraph(
        'A purely single-role portfolio can read as narrow, especially for early-career '
        'candidates whose work has naturally spanned multiple disciplines. A purely '
        'generalist portfolio, on the other hand, reads as unfocused and fails to give '
        'recruiters a clear handle on what role to consider the candidate for. The layered '
        'approach resolves this tension by committing to a clear primary while preserving '
        'secondary and tertiary evidence that broadens the candidate\u2019s appeal. In practice, '
        'this means the hero section, skills matrix ordering, and the first three featured '
        'projects all lead with AI/ML content, while the project archive, skills matrix '
        'additional columns, and experience timeline show the broader stack.', styles['Body']))

    story.append(Paragraph(
        'This positioning is also resilient to role drift. If the candidate later decides to '
        'pivot toward Data Science or Full-Stack as the primary target, only the hero '
        'tagline, skills matrix ordering, and the first three featured project cards need '
        'to be re-curated. The underlying content architecture remains unchanged, which '
        'keeps the maintenance cost of pivoting low.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 4. Technology Stack
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 04', 'Technology Stack'))

    story.append(Paragraph(
        'The technology stack is chosen to balance modernity, maintainability, and GitHub '
        'Pages compatibility. Every component in the stack is industry-standard as of 2026, '
        'well-documented, and supported by an active community. The candidate will be able '
        'to maintain and extend the portfolio without learning exotic tooling, and any '
        'future contributor (or AI coding assistant) will be working in a familiar '
        'environment. The table below lists each layer, the chosen technology, and the '
        'specific rationale for the choice.', styles['Body']))

    story.append(Spacer(1, 6))
    story.append(styled_table(
        [
            ['Layer', 'Choice', 'Why'],
            ['Framework', 'Next.js 16 (App Router)',
             'Most modern React framework, statically exportable to GitHub Pages via output: export. Future-proof, with strong TypeScript support and a rich component ecosystem.'],
            ['Language', 'TypeScript',
             'Type safety is industry standard for serious front-end work in 2026. Catches bugs at compile time and provides excellent IDE support for portfolio maintenance.'],
            ['Styling', 'Tailwind CSS 4',
             'Utility-first approach enables fast iteration with consistent design tokens. Tailwind 4 brings the new Oxide engine for faster builds and better tree-shaking.'],
            ['Components', 'shadcn/ui',
             'Accessible, customizable component library based on Radix UI primitives. Provides a professional baseline that can be themed to match the Neon Blue x Platinum palette.'],
            ['Animation', 'Framer Motion',
             'The de facto standard for React animations in 2026. Enables smooth scroll reveals, magnetic hover effects, and staggered entrance animations that match the Modern Bold aesthetic.'],
            ['Icons', 'React Icons + Simple Icons',
             'React Icons for UI iconography, Simple Icons for tech stack logos (PyTorch, TensorFlow, React, AWS, etc.). Together they cover the full range of visual symbols a portfolio needs.'],
            ['Forms', 'React Hook Form + Zod',
             'Type-safe form handling with schema validation. Powers the contact form without requiring a backend, with Zod ensuring the data sent to Formspree is well-formed.'],
            ['MDX', 'next-mdx-remote',
             'Markdown rendering for project READMEs and any future blog content. Keeps content authoring in a portable format that survives framework changes.'],
            ['Deployment', 'GitHub Pages',
             'Free hosting, native GitHub integration, supports custom domain via CNAME. The username.github.io pattern gives a clean, professional URL out of the box.'],
        ],
        col_ratios=[0.13, 0.22, 0.65],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('4.1  Why Not Astro or Plain HTML?', styles['H2'], level=1))
    story.append(Paragraph(
        'Astro was seriously considered as the framework choice. It is SSG-first, ships zero '
        'JavaScript by default, and is arguably a better fit for a content-heavy static '
        'site than Next.js. The decision in favor of Next.js came down to three factors: '
        'the candidate\u2019s existing familiarity with the React ecosystem, the richer pool of '
        'open-source portfolio templates and components available for Next.js, and the '
        'option to later add dynamic features (server-side API routes, edge functions) '
        'without migrating frameworks. Plain HTML/CSS/JS was rejected because the candidate '
        'would lose the component model, TypeScript safety, and the rich Framer Motion '
        'animation ecosystem that the Modern Bold design language depends on.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 5. Design System
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 05', 'Design System: Neon Blue × Platinum'))

    story.append(Paragraph(
        'The design system is the single source of truth for every visual decision in the '
        'portfolio. It encodes the candidate\u2019s chosen aesthetic: a Dark Neon Blue base '
        'with Neon Silver/Platinum accents, blending the Modern Bold and Dark Sleek design '
        'languages. Every color, font, spacing unit, and motion principle below is '
        'specified concretely so that the build phase can execute without further design '
        'decisions, and so that future iterations remain visually consistent.', styles['Body']))

    story.append(add_heading('5.1  Color Palette (Dark Mode, Primary)', styles['H2'], level=1))
    story.append(Paragraph(
        'The dark mode palette is the default. It uses a deep space blue-black background '
        'to make the neon electric blue accent pop, with platinum white as the primary text '
        'color for maximum legibility. Silver tones appear as secondary highlights and icon '
        'colors, providing a cooler metallic counterpoint to the electric blue.', styles['Body']))

    story.append(Spacer(1, 4))
    story.append(styled_table(
        [
            ['Token', 'Hex', 'Usage'],
            ['bg-base', '#050816', 'Page background (deep space blue-black)'],
            ['bg-surface', '#0a0f24', 'Card backgrounds'],
            ['bg-elevated', '#131a3a', 'Hover and active states'],
            ['border', 'rgba(0, 212, 255, 0.15)', 'Subtle neon-tinted dividers'],
            ['text-primary', '#f0f4ff', 'Headlines and body (platinum white)'],
            ['text-secondary', '#a8b4d8', 'Captions and meta info'],
            ['accent-blue', '#00d4ff', 'Primary neon electric blue: CTAs, links, glows'],
            ['accent-blue-glow', 'rgba(0, 212, 255, 0.5)', 'Box-shadows and hover halos'],
            ['accent-silver', '#c8d0e0', 'Platinum silver: secondary highlights, icons'],
            ['accent-silver-glow', 'rgba(200, 208, 224, 0.4)', 'Subtle metallic glow'],
        ],
        col_ratios=[0.24, 0.30, 0.46],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('5.2  Color Palette (Light Mode, Toggle Option)', styles['H2'], level=1))
    story.append(Paragraph(
        'Light mode is provided as a toggle. It uses a soft cool white background with a '
        'deeper electric blue for contrast and a muted slate as the silver equivalent. The '
        'goal is for both modes to feel like expressions of the same brand rather than two '
        'different designs. Light mode is not the default; the dark mode is the primary '
        'expression of the portfolio\u2019s identity.', styles['Body']))

    story.append(Spacer(1, 4))
    story.append(styled_table(
        [
            ['Token', 'Hex', 'Usage'],
            ['bg-base (light)', '#f8fafc', 'Cool white page background'],
            ['bg-surface (light)', '#ffffff', 'Card backgrounds'],
            ['text-primary (light)', '#0f172a', 'Deep slate headlines and body'],
            ['accent-blue (light)', '#0099cc', 'Deeper electric blue for AA contrast'],
            ['accent-silver (light)', '#64748b', 'Muted slate replaces silver'],
        ],
        col_ratios=[0.28, 0.22, 0.50],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('5.3  Typography', styles['H2'], level=1))
    story.append(Paragraph(
        'Three typefaces carry the entire portfolio. Space Grotesk handles all display and '
        'heading text: it is geometric, modern, and has a distinctly technical feel without '
        'being as cold as a pure grotesque sans. Inter handles body copy because of its '
        'class-leading legibility at small sizes on screen. JetBrains Mono appears in code '
        'snippets and terminal-style accents, reinforcing the developer identity.', styles['Body']))

    story.append(Spacer(1, 4))
    story.append(styled_table(
        [
            ['Role', 'Family', 'Notes'],
            ['Display / Headings', 'Space Grotesk', 'Modern, geometric, technical feel. Used at 700 weight for headings.'],
            ['Body', 'Inter', 'Clean, highly readable at small sizes. Loaded at 400, 500, 600 weights.'],
            ['Monospace', 'JetBrains Mono', 'Code snippets, terminal-style accents, meta labels. Loaded at 400 and 500.'],
        ],
        col_ratios=[0.22, 0.22, 0.56],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('5.4  Motion Principles', styles['H2'], level=1))
    story.append(Paragraph(
        'Motion in the portfolio is restrained but deliberate. The guiding principle is that '
        'animation should reinforce the content\u2019s hierarchy, not call attention to itself. '
        'Page load reveals the hero elements in a staggered fade-up over 0.6 seconds. '
        'Section transitions use scroll-triggered fade-ins combined with a subtle 4% scale-up '
        'to give the page a sense of depth. Hover states apply magnetic button effects, neon '
        'glow halos on cards, and subtle 3D tilt on featured project thumbnails. All motion '
        'respects the prefers-reduced-motion media query for accessibility.', styles['Body']))

    story.append(bullet_list([
        '<b>Page load:</b> staggered fade-up of hero elements, 0.6s ease-out curve.',
        '<b>Section reveals:</b> scroll-triggered fade + 4% scale-up, triggered when 20% of the section enters viewport.',
        '<b>Hover states:</b> magnetic buttons (cursor-tracking translate), neon glow halos on cards, subtle 3D tilt on featured project thumbnails.',
        '<b>Smooth scroll:</b> native CSS scroll-behavior with anchor navigation for in-page links.',
        '<b>Accessibility:</b> prefers-reduced-motion respected; all non-essential animation disabled for users who request it.',
    ]))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 6. Site Architecture
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 06', 'Site Architecture'))

    story.append(Paragraph(
        'The site architecture follows a single-page home with scroll-anchored sections, '
        'supplemented by a project archive page and individual project detail pages. This '
        'structure is the dominant pattern for modern developer portfolios: it gives '
        'recruiters the full story in a single scroll while preserving deep-linkable pages '
        'for individual projects. The resume is available both as an inline PDF preview and '
        'a one-click download, ensuring it is reachable from any page on the site.', styles['Body']))

    story.append(add_heading('6.1  Route Map', styles['H2'], level=1))

    story.append(Paragraph(
        '<b>/</b><br/>'
        '<font color="#8b95b8">Home (single-page scroll, all core sections as anchored sub-routes)</font>',
        styles['Code']))
    story.append(Paragraph(
        '<b>/projects</b><br/>'
        '<font color="#8b95b8">Full project archive, filterable by tech stack and category</font>',
        styles['Code']))
    story.append(Paragraph(
        '<b>/projects/[slug]</b><br/>'
        '<font color="#8b95b8">Individual project deep-dive pages with full case study</font>',
        styles['Code']))
    story.append(Paragraph(
        '<b>/resume</b><br/>'
        '<font color="#8b95b8">Resume PDF download plus inline preview</font>',
        styles['Code']))

    story.append(Spacer(1, 14))
    story.append(add_heading('6.2  Section Inventory', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Section', 'Anchor', 'Content'],
            ['Hero', '#hero',
             'Animated name reveal, tagline, one-line value prop, two CTAs (View My Work, Download Resume), animated gradient background with neon particle field, social rail (GitHub, LinkedIn, Email, optionally Kaggle/Hugging Face).'],
            ['About', '#about',
             'Two to three paragraph narrative bio auto-extracted from resume and LinkedIn, quick-facts grid (location, currently learning, open to work, pronouns), optional headshot, tech philosophy pull-quote in platinum accent.'],
            ['Skills', '#skills',
             'Categorized tech stack matrix: AI/ML, Data Science, Languages, Full-Stack, Tools & Infra. Each column shows floating tech logos with proficiency indicators. Final list pulled from resume and GitHub.'],
            ['Experience', '#experience',
             'Vertical timeline with company, role, dates, location, two to three quantified bullets per role, tech stack chips used at each role. Sourced from LinkedIn or manually curated.'],
            ['Featured Projects', '#projects',
             'Three to six curated hero project cards. Each card shows thumbnail, title, one-line hook, category badge, tech stack chips, key metric, and links to live demo, code, notebook, or paper.'],
            ['Contact', '#contact',
             'Working contact form via Formspree, direct email link with mailto fallback, social rail. Optional Calendly booking link for interview scheduling.'],
            ['Project Archive', '/projects',
             'Auto-fetches pinned GitHub repos at build time via GitHub API, filter chips by category, search bar by tech stack or keyword, grid layout with hover-to-reveal README excerpts.'],
        ],
        col_ratios=[0.18, 0.12, 0.70],
    ))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 7. AI/ML-Specific Showcase Elements
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 07', 'AI/ML-Specific Showcase Elements'))

    story.append(Paragraph(
        'Because the portfolio\u2019s primary positioning is AI/ML, the project detail pages '
        'need to carry significantly more structured information than a typical Full-Stack '
        'project page would. Hiring managers in ML roles expect to see not just the result '
        'but the entire experimental context: the dataset, the model architecture, the '
        'training setup, the metrics, the experiment tracking evidence, the reproducibility '
        'story, and the lessons learned. The template below defines the mandatory structure '
        'for every AI/ML project detail page on the portfolio.', styles['Body']))

    story.append(add_heading('7.1  Mandatory Project Detail Page Structure', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Field', 'What to Include'],
            ['Problem Statement',
             'What real-world problem does this project solve? Who is the user or stakeholder? Why does this problem matter?'],
            ['Dataset',
             'Source, size, schema, preprocessing steps. If the dataset is public, link to it. If proprietary, describe its shape and any anonymization applied.'],
            ['Model Architecture',
             'Diagram plus prose description. For deep learning, include layer-by-layer breakdown. For classical ML, include feature engineering pipeline.'],
            ['Training Setup',
             'Framework (PyTorch, TensorFlow, scikit-learn), hardware (GPU/TPU), hyperparameters, training time, number of epochs, optimization algorithm.'],
            ['Metrics',
             'Accuracy, F1, precision, recall, ROC-AUC, latency, throughput. Always include the baseline for comparison so the reader can judge the magnitude of improvement.'],
            ['Experiment Tracking',
             'Optional but high-impact: screenshots or embedded dashboards from Weights & Biases, MLflow, or TensorBoard showing the experiment progression.'],
            ['Demo',
             'Live inference demo, Colab/Kaggle notebook link, or video walkthrough. The reader should be able to interact with or see the model in action within 30 seconds.'],
            ['Reproducibility',
             'requirements.txt or environment.yml, run instructions, random seed, expected runtime on commodity hardware.'],
            ['Lessons Learned',
             'What worked, what did not, what would you do differently, and what are the next steps. This section is often what distinguishes a strong candidate from a junior one.'],
        ],
        col_ratios=[0.22, 0.78],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('7.2  Data Science Project Variant', styles['H2'], level=1))
    story.append(Paragraph(
        'Data Science projects (the secondary positioning) follow a slightly different '
        'template that emphasizes the analytical narrative over the model. The structure '
        'is: business problem, data acquisition and cleaning, exploratory data analysis '
        'with at least three visualizations, methodology (statistical or ML), results with '
        'business-impact framing, and recommendations. The visualizations are embedded '
        'inline using Plotly or static PNG exports from Matplotlib, with the underlying '
        'notebook linked from a "View Notebook" button.', styles['Body']))

    story.append(Spacer(1, 6))
    story.append(add_heading('7.3  Full-Stack Project Variant', styles['H2'], level=1))
    story.append(Paragraph(
        'Full-Stack projects (the tertiary positioning) follow a structure that emphasizes '
        'system design and deployment: problem statement, system architecture diagram, '
        'tech stack table, frontend highlights (UI screenshots, component design), backend '
        'highlights (API design, database schema, performance optimizations), deployment '
        'and CI/CD pipeline, and a live demo link. The goal is to demonstrate that the '
        'candidate can ship a complete product, not just write model code.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 8. Features Checklist
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 08', 'Features Checklist'))

    story.append(Paragraph(
        'The features below are the explicit set the candidate selected during the design '
        'clarification round. Each feature is mapped to its implementation approach so that '
        'the build phase has a concrete plan for every item. Features are grouped into '
        'functional, accessibility, performance, and SEO categories for clarity.', styles['Body']))

    story.append(add_heading('8.1  Functional Features', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Feature', 'Implementation'],
            ['Dark / Light Toggle',
             'next-themes provider wrapping the app, default to dark. Toggle button in nav with system-preference fallback. LocalStorage persistence.'],
            ['Contact Form',
             'React Hook Form + Zod validation. Submission via Formspree endpoint (no backend required). Success/error states with accessible ARIA announcements.'],
            ['Resume PDF Download',
             'Versioned PDF in /public/resume/. Download button in nav, hero, and footer. Optional inline preview via react-pdf.'],
            ['Project Archive Filtering',
             'Client-side filtering by category and tech stack. Built at static export time from a JSON manifest; auto-pulls pinned GitHub repos via the GitHub REST API at build time.'],
            ['Featured Project Cards',
             'Curated list of 3-6 hero projects, each with its own MDX-driven detail page. Category badges, tech stack chips, and a key metric field are mandatory on every card.'],
        ],
        col_ratios=[0.28, 0.72],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('8.2  SEO and Metadata', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Feature', 'Implementation'],
            ['Per-Page Meta Tags',
             'Next.js Metadata API. Title, description, OG image, Twitter card per route. Default values in root layout, overridden per page.'],
            ['Open Graph Images',
             'Auto-generated via @vercel/og at build time. Each project page gets a custom OG card with the project title and metric.'],
            ['Sitemap',
             'Auto-generated sitemap.xml via Next.js built-in sitemap() function. Includes all routes and project detail pages.'],
            ['Robots.txt',
             'Static robots.txt in /public/. Allows all crawlers, points to sitemap.'],
            ['JSON-LD Person Schema',
             'Structured data in the root layout describing the candidate: name, jobTitle, sameAs (GitHub, LinkedIn), knowsAbout (skills).'],
        ],
        col_ratios=[0.28, 0.72],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('8.3  Accessibility and Performance', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Feature', 'Implementation'],
            ['WCAG AA Compliance',
             'Semantic HTML, ARIA labels on interactive elements, keyboard navigation for all features, color contrast verified at AA level for both dark and light modes.'],
            ['Reduced Motion Support',
             'All non-essential animations wrapped in a prefers-reduced-motion check. Framer Motion useReducedMotion hook applied at the layout level.'],
            ['Mobile-First Responsive',
             'Tailwind breakpoints tested at 360px, 768px, 1024px, 1440px. Mobile nav uses a slide-in drawer, all touch targets minimum 44x44px.'],
            ['Lighthouse 90+',
             'Static generation for fast first paint, lazy-loaded images with next/image, font-display: swap on all web fonts, no render-blocking third-party scripts.'],
            ['Image Optimization',
             'next/image with WebP/AVIF automatic format negotiation. Responsive srcset for thumbnails. Blur placeholder for above-the-fold images.'],
        ],
        col_ratios=[0.28, 0.72],
    ))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 9. Deployment Plan
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 09', 'Deployment Plan'))

    story.append(Paragraph(
        'Deployment to GitHub Pages follows a well-trodden path. The build is a standard '
        'Next.js static export, the repository naming convention gives a free root-level '
        'subdomain, and the GitHub Actions workflow handles automatic redeployment on '
        'every push to main. The entire pipeline is reproducible from a fresh clone in '
        'under five minutes, and the custom domain migration path (should the candidate '
        'later purchase a domain) requires zero code changes.', styles['Body']))

    story.append(add_heading('9.1  Step-by-Step Deployment', styles['H2'], level=1))

    story.append(bullet_list([
        '<b>Build locally</b> with <font name="DejaVuSans">next build</font> to produce the static export in the <font name="DejaVuSans">out/</font> directory. Verify the export completes without errors and that all routes render correctly when served locally.',
        '<b>Create the GitHub repository</b> named <font name="DejaVuSans"><your-username>.github.io</font>. This exact naming convention is required for the free root-level subdomain; any other name will result in a <font name="DejaVuSans">username.github.io/repo-name/</font> URL structure.',
        '<b>Push the contents</b> of the <font name="DejaVuSans">out/</font> directory to the main branch of the new repository. Alternatively, push the source code and use a GitHub Action to build and deploy automatically on every push.',
        '<b>Enable GitHub Pages</b> in the repository Settings → Pages → Source: main branch. The site will be live at <font name="DejaVuSans">https://<your-username>.github.io/</font> within approximately two minutes.',
        '<b>Verify the deployment</b> by visiting the URL in an incognito window, running a Lighthouse audit, and testing all interactive features (theme toggle, contact form, project filters, navigation).',
        '<b>(Future) Custom domain:</b> if the candidate later purchases a custom domain, add a <font name="DejaVuSans">CNAME</font> file to the repository root containing the domain name, and configure DNS at the registrar. No code changes are required.',
    ]))

    story.append(Spacer(1, 14))
    story.append(add_heading('9.2  GitHub Action (Optional but Recommended)', styles['H2'], level=1))
    story.append(Paragraph(
        'A GitHub Action that builds and deploys on every push to main is recommended over '
        'manual deployments. The workflow uses the official Next.js build action, exports '
        'the static output, and pushes it to a gh-pages branch that GitHub Pages serves. '
        'This pattern keeps the source code in main and the deployed artifact in gh-pages, '
        'which is cleaner than committing the build output directly to main. The action '
        'takes approximately 90 seconds to run end-to-end on a typical portfolio repository.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 10. Build Phases
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 10', 'Build Phases (Execution Order)'))

    story.append(Paragraph(
        'The build is divided into six phases, each with a clear deliverable. Phases are '
        'sequential: each phase depends on the artifacts of the previous one, and jumping '
        'ahead will produce rework. The phase boundaries are also the natural review '
        'checkpoints: at the end of each phase, the candidate can inspect the deliverable '
        'and request adjustments before the next phase begins.', styles['Body']))

    story.append(Spacer(1, 6))
    story.append(styled_table(
        [
            ['Phase', 'What Ships', 'Effort'],
            ['P1: Scaffold + Design System',
             'Next.js 16 project initialized, Tailwind configuration, design tokens (colors, typography, spacing) encoded as CSS variables, theme provider wired up, base layout with nav and footer. No real content yet.',
             'Foundation'],
            ['P2: Core Sections',
             'Hero, About, Skills, Experience sections built with placeholder content. All animations and scroll-reveal behavior wired up. Mobile responsive at this stage.',
             'Content Layer'],
            ['P3: Projects System',
             'Featured Projects section, project archive page, individual project detail pages, GitHub API integration for pinned repo auto-pull. Project MDX content for 3-6 featured projects.',
             'Showcase Layer'],
            ['P4: Contact + Resume + Extras',
             'Contact form (Formspree integration), resume download, social links, footer polish. Theme toggle, analytics, and SEO metadata wired up.',
             'Conversion Layer'],
            ['P5: Polish + SEO + Performance',
             'Per-page meta tags, OG card generation, sitemap.xml, robots.txt, JSON-LD Person schema. Lighthouse audit pass. Accessibility audit. Mobile testing at four breakpoints.',
             'Quality Layer'],
            ['P6: Deploy to GitHub Pages',
             'Static export configuration, GitHub Action for auto-deploy, go-live checklist, final verification on the live URL.',
             'Launch'],
        ],
        col_ratios=[0.22, 0.62, 0.16],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('10.1  Review Checkpoints', styles['H2'], level=1))
    story.append(Paragraph(
        'At the end of each phase, the candidate should review the deliverable and either '
        'approve progression to the next phase or request changes. The phases are designed '
        'so that changes at any phase do not invalidate the work of previous phases. For '
        'example, requesting a different hero animation in P2 does not require re-doing the '
        'design system work in P1. This keeps the iteration loop tight and predictable.', styles['Body']))

    story.append(PageBreak())

    # ─────────────────────────────────────────────────────────────────────
    # 11. What I Need From You
    # ─────────────────────────────────────────────────────────────────────
    story.extend(section_header('Section 11', 'Inputs Required Before Build'))

    story.append(Paragraph(
        'Before the build can begin, the candidate needs to provide the materials listed '
        'below. The required items are the master content source and the two profile URLs '
        'that drive automated content pulling. The optional items are high-impact additions '
        'that materially improve the portfolio but can be added later if not immediately '
        'available.', styles['Body']))

    story.append(add_heading('11.1  Required Materials', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Item', 'Format', 'Why Needed'],
            ['Resume', 'PDF or pasted text',
             'Master content source. Drives the About, Experience, Skills, and Education sections. The PDF is also embedded as the downloadable resume.'],
            ['LinkedIn Profile URL', 'URL',
             'Source for experience entries, education history, certifications, and recommendations. Cross-checks and supplements the resume.'],
            ['GitHub Profile URL', 'URL',
             'Drives the auto-pull of pinned repositories for the project archive. Also populates the GitHub activity panel and contribution graph if that section is enabled.'],
        ],
        col_ratios=[0.22, 0.18, 0.60],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('11.2  High-Impact Optional Materials', styles['H2'], level=1))

    story.append(styled_table(
        [
            ['Item', 'Why It Helps'],
            ['Target job titles and dream companies',
             'Lets the build tune the hero messaging, project ordering, and skills emphasis to match the specific roles and companies being targeted.'],
            ['Project screenshots and demo URLs',
             'For the 3-6 featured projects. If not provided, the build will pull from the project READMEs on GitHub, which is acceptable but less polished.'],
            ['Headshot photo',
             'Strictly optional. Many developer portfolios skip this in 2026, but some candidates prefer to include one in the About section. The build supports either choice.'],
            ['Email address',
             'Required for the contact form (Formspree requires a verified email) and the mailto link in the contact section.'],
            ['Analytics preference',
             'Plausible (privacy-friendly, free self-host or $9/month cloud) versus Google Analytics 4 (free, more data, less privacy-focused). The build will integrate whichever is chosen.'],
        ],
        col_ratios=[0.32, 0.68],
    ))

    story.append(Spacer(1, 14))
    story.append(add_heading('11.3  Verification Request', styles['H2'], level=1))
    story.append(Paragraph(
        'Before any code is written, the candidate is asked to verify this plan. '
        'Specifically: does this plan match the candidate\u2019s vision, are there any sections '
        'to add, remove, or reorder, are there specific projects the candidate knows they '
        'want featured, and is the candidate ready to share the resume, LinkedIn, and '
        'GitHub materials. Once verification is received and the materials are shared, the '
        'build will proceed through the six phases end-to-end and deliver a deployed '
        'portfolio at the candidate\u2019s <font name="DejaVuSans">username.github.io</font> '
        'URL.', styles['Body']))

    return story


def main():
    output_path = '/home/z/my-project/scripts/body.pdf'
    doc = TocDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=LEFT_M,
        rightMargin=RIGHT_M,
        topMargin=TOP_M,
        bottomMargin=BOTTOM_M,
        title='Professional Portfolio Build Plan',
        author='Z.ai',
        creator='Z.ai',
        subject='Comprehensive build plan for a professional web portfolio deployed on GitHub Pages',
    )
    story = build_story()
    doc.multiBuild(story, onFirstPage=on_page, onLaterPages=on_page)
    print('Body PDF generated:', output_path)


if __name__ == '__main__':
    main()
