# Labs - Command-Line Terminal Website

An ultra-minimalist, black-themed website for a disruptive technology lab inspired by terminal interfaces. Focuses on content over visual elements with a distinctive command-line aesthetic.

## Core Vision

This website embodies the "move fast, break things" philosophy through a stripped-down, terminal-like design that prioritizes content and performance. The command-line interface aesthetic reinforces the backend-focused approach of the lab.

## Design Specifications

- **Primary Color**: Black (#000000) background
- **Text**: Terminal-style monospace text in white (#FFFFFF) and light gray (#CCCCCC)
- **Typography**: JetBrains Mono (monospace terminal font)
- **Accent**: Terminal green (#00FF00) for commands and highlights
- **Layout**: Single-column with command prompt section headers
- **Animations**: Blinking cursor effect
- **Terminal Elements**: Command prompts, file paths, and shell-inspired styling
- **Logo**: Minimalist logo with terminal-styled text

## Technical Details

- **HTML/CSS only**: No JavaScript dependencies
- **External Fonts**: JetBrains Mono from Google Fonts
- **Page Size**: Under 100KB total
- **Accessibility**: Screen reader compatible
- **Print-Friendly**: Optimized for printing with adjusted styles
- **Terminal UI**: Command line prompts, shell notation, and cursor effects

## Terminal Design Elements

- **Section Headers**: Styled as shell commands (`cat`, `ls`, `whois`)
- **Navigation**: Uses `./` prefix resembling executable commands
- **Projects**: Listed with command-line output formatting
- **Cursor**: Blinking terminal cursor effect
- **Prefix Symbols**: Unix-like command prefixes (`$`, `#`, `~`, `>`)

## Project Structure

```
labs/
├── index.html        # Main HTML file
├── css/
│   └── styles.css    # Terminal-styled CSS
├── images/
│   └── logo.png      # Your custom logo
├── robots.txt        # Search engine directives
└── README.md         # This file
```

## Logo Usage

The site is configured to use a PNG logo with terminal-green styling:

1. Add your `logo.png` to the `images/` directory
2. Ensure your logo works well on a black terminal-like background
3. For best results, use a simple monochrome logo (the CSS will apply a terminal-green filter)
4. Recommended size: 40px height, with appropriate width to maintain aspect ratio

## Content Sections

1. **Header**: Terminal prompt with logo and navigation commands
2. **About**: Displayed as `cat about.txt` command output
3. **Lab Concept**: Styled as `cat lab-concept.md` output
4. **Projects**: Displayed as `ls -la projects/` command listing
5. **Token Economics**: Formatted as `cat token-economics.sh` script output
6. **Contact**: Shown as `whois labs` command response

## Performance

The website is designed to load in under 1 second with a total page size under 100KB, aiming for a perfect Lighthouse performance score.

## Deployment

Simply upload all files to your web server. No build process or dependencies required.

---

© Labs 2023 | process complete [exit code: 0] 