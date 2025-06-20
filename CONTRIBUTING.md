# 🤝 Contributing to IEEE RAS MUJ - Pixel Palettes Website

Thank you for your interest in contributing to the IEEE RAS MUJ Pixel Palettes website! This document provides comprehensive guidelines for contributing to this project.

## 🌟 Welcome Contributors

We welcome contributions from the IEEE RAS MUJ community, students, faculty, and the broader open-source community. Whether you're fixing bugs, adding features, improving documentation, or enhancing the user experience, your contributions are valuable and appreciated.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Contribution Workflow](#contribution-workflow)
- [Coding Standards](#coding-standards)
- [Testing Guidelines](#testing-guidelines)
- [Documentation Guidelines](#documentation-guidelines)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Community Guidelines](#community-guidelines)

## 🤝 Code of Conduct

### Our Pledge

We are committed to creating a welcoming and inclusive environment for all contributors, regardless of background, experience level, or identity. We pledge to:

- Use welcoming and inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

### Expected Behavior

- **Be Respectful**: Treat all contributors with respect and kindness
- **Be Collaborative**: Work together to solve problems and improve the project
- **Be Constructive**: Provide helpful feedback and suggestions
- **Be Patient**: Remember that everyone has different skill levels and backgrounds
- **Be Professional**: Maintain a professional tone in all communications

### Unacceptable Behavior

- Harassment, discrimination, or offensive comments
- Personal attacks or trolling
- Spam or irrelevant content
- Sharing private information without permission
- Any behavior that would be inappropriate in a professional setting

## 🚀 Getting Started

### Prerequisites

Before contributing, ensure you have:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (or yarn/pnpm)
- **Git**: For version control
- **Code Editor**: VS Code recommended with extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript Importer
  - Prettier - Code formatter
  - ESLint

### Understanding the Project

1. **Read the Documentation**: Start with the [README.md](README.md) and [docs/development-context.md](docs/development-context.md)
2. **Explore the Codebase**: Familiarize yourself with the project structure
3. **Run the Project Locally**: Follow the setup instructions to get the project running
4. **Check Open Issues**: Look at existing issues to understand current needs

## 🛠️ Development Setup

### 1. Fork and Clone

```bash
# Fork the repository on GitHub, then clone your fork
git clone https://github.com/your-username/pixel-palettes.git
cd pixel-palettes

# Add the original repository as upstream
git remote add upstream https://github.com/original-username/pixel-palettes.git
```

### 2. Install Dependencies

```bash
# Install project dependencies
npm install

# Verify installation
npm run type-check
npm run lint
```

### 3. Environment Setup

```bash
# Copy environment template
cp .env.example .env.local

# Edit .env.local with your configuration
# Most development work can be done with default values
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev

# Open http://localhost:3000 in your browser
```

### 5. Verify Setup

```bash
# Run all checks to ensure everything is working
npm run lint          # Check code quality
npm run type-check    # Verify TypeScript types
npm run build         # Test production build
```

## 🔄 Contribution Workflow

### 1. Choose What to Work On

**For Beginners**:
- Look for issues labeled `good first issue`
- Documentation improvements
- Small bug fixes
- UI/UX enhancements

**For Experienced Contributors**:
- Feature implementations
- Performance optimizations
- Accessibility improvements
- Complex bug fixes

### 2. Create a Feature Branch

```bash
# Sync with upstream
git checkout main
git pull upstream main

# Create a new feature branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
# or
git checkout -b docs/documentation-update
```

### 3. Make Your Changes

- **Small Commits**: Make small, focused commits with clear messages
- **Test Frequently**: Test your changes as you develop
- **Follow Standards**: Adhere to the coding standards outlined below
- **Document Changes**: Update documentation if needed

### 4. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add responsive navigation menu

- Implement collapsible mobile navigation
- Add smooth animations for menu transitions
- Ensure accessibility with keyboard navigation
- Update tests for new navigation component

Closes #123"
```

### 5. Push and Create Pull Request

```bash
# Push your feature branch
git push origin feature/your-feature-name

# Create a pull request on GitHub
# Fill out the PR template with detailed information
```

## 📝 Coding Standards

### TypeScript Guidelines

```typescript
// ✅ Good: Proper typing and documentation
/**
 * Component for displaying event information
 * @param event - Event data object
 * @param isHighlighted - Whether to highlight this event
 */
interface EventCardProps {
  event: {
    id: string;
    title: string;
    date: Date;
    description: string;
  };
  isHighlighted?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, isHighlighted = false }) => {
  // Component implementation
};

// ❌ Avoid: Any types and missing documentation
const EventCard = ({ event, isHighlighted }: any) => {
  // Implementation
};
```

### React Component Guidelines

```typescript
// ✅ Good: Functional component with proper structure
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ComponentProps {
  title: string;
  onAction?: () => void;
}

export default function Component({ title, onAction }: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Side effects
  }, []);

  const handleClick = () => {
    if (onAction) {
      onAction();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-card p-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <button onClick={handleClick} className="btn-primary">
        Action
      </button>
    </motion.div>
  );
}
```

### CSS/Tailwind Guidelines

```css
/* ✅ Good: Organized, mobile-first responsive design */
.component {
  @apply 
    /* Layout */
    flex flex-col space-y-4
    /* Responsive */
    w-full md:w-1/2 lg:w-1/3
    /* Styling */
    bg-white/5 backdrop-blur-md
    border border-white/10 rounded-lg
    /* Typography */
    text-white font-mono-pixel
    /* Interactions */
    hover:scale-105 transition-all duration-300;
}

/* ❌ Avoid: Arbitrary values and desktop-first design */
.component {
  @apply w-[347px] h-[234px] bg-[#ff0000];
}
```

### File Naming Conventions

```
components/
├── ui/
│   ├── Button.tsx           # PascalCase for components
│   ├── Input.tsx
│   └── Modal.tsx
├── layout/
│   ├── Navigation.tsx
│   └── Footer.tsx
└── features/
    ├── EventCard.tsx
    └── SponsorLogo.tsx

utils/
├── animations.ts            # camelCase for utilities
├── formatters.ts
└── validators.ts

types/
├── events.ts               # camelCase for type files
├── sponsors.ts
└── common.ts
```

### Import Organization

```typescript
// ✅ Good: Organized imports
// 1. React and Next.js imports
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// 2. Third-party libraries
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

// 3. Internal utilities and types
import { formatDate } from '@/utils/formatters';
import type { Event } from '@/types/events';

// 4. Internal components
import Button from '@/components/ui/Button';
import EventCard from '@/components/features/EventCard';
```

## 🧪 Testing Guidelines

### Manual Testing Checklist

Before submitting a pull request, test your changes across:

**Browsers**:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**Devices**:
- [ ] Desktop (1920x1080)
- [ ] Tablet (768x1024)
- [ ] Mobile (375x667)
- [ ] Large Mobile (414x896)

**Accessibility**:
- [ ] Keyboard navigation works
- [ ] Screen reader compatibility
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators are visible

**Performance**:
- [ ] Page loads in under 3 seconds
- [ ] Animations are smooth (60fps)
- [ ] No console errors or warnings
- [ ] Lighthouse score remains 90+

### Testing Commands

```bash
# Lint code for quality issues
npm run lint

# Check TypeScript types
npm run type-check

# Build project to catch build errors
npm run build

# Run Lighthouse performance tests
npm run lighthouse

# Format code with Prettier
npm run format
```

## 📚 Documentation Guidelines

### Code Documentation

```typescript
/**
 * Calculates the time remaining until an event starts
 * 
 * @param eventDate - The date and time when the event starts
 * @param currentDate - The current date and time (defaults to now)
 * @returns Object containing days, hours, minutes, and seconds remaining
 * 
 * @example
 * ```typescript
 * const timeLeft = calculateTimeRemaining(new Date('2024-06-15T10:00:00'));
 * console.log(timeLeft); // { days: 5, hours: 14, minutes: 30, seconds: 45 }
 * ```
 */
function calculateTimeRemaining(
  eventDate: Date,
  currentDate: Date = new Date()
): TimeRemaining {
  // Implementation
}
```

### Component Documentation

```typescript
/**
 * EventCard Component
 * 
 * Displays event information in a card format with hover animations
 * and responsive design. Supports both upcoming and past events.
 * 
 * @component
 * @example
 * ```tsx
 * <EventCard
 *   event={{
 *     id: "1",
 *     title: "Pixel Palettes Hackathon",
 *     date: new Date("2024-06-15"),
 *     description: "24-hour AI hackathon"
 *   }}
 *   variant="featured"
 *   onRegister={() => console.log('Register clicked')}
 * />
 * ```
 */
interface EventCardProps {
  /** Event data object containing all event information */
  event: Event;
  /** Visual variant of the card (default, featured, compact) */
  variant?: 'default' | 'featured' | 'compact';
  /** Callback function when register button is clicked */
  onRegister?: () => void;
}
```

### README Updates

When adding new features, update the README.md:

1. **Features Section**: Add new functionality to the features list
2. **Installation**: Update if new dependencies are added
3. **Configuration**: Document new environment variables
4. **Usage**: Provide examples for new features

## 🔍 Pull Request Process

### Before Submitting

1. **Self-Review**: Review your own code for obvious issues
2. **Test Thoroughly**: Ensure all functionality works as expected
3. **Update Documentation**: Add or update relevant documentation
4. **Check Performance**: Verify no performance regressions
5. **Accessibility Check**: Ensure accessibility standards are met

### Pull Request Template

When creating a pull request, include:

```markdown
## Description
Brief description of what this PR does and why.

## Type of Change
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Accessibility improvement

## Changes Made
- Detailed list of changes
- Include any breaking changes
- Mention any new dependencies

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Accessibility tested
- [ ] Performance tested
- [ ] No console errors

## Screenshots (if applicable)
Include before/after screenshots for UI changes

## Additional Notes
Any additional information reviewers should know
```

### Review Process

1. **Automated Checks**: Ensure all CI checks pass
2. **Code Review**: Address feedback from reviewers
3. **Testing**: Reviewers will test functionality
4. **Approval**: Get approval from maintainers
5. **Merge**: Maintainers will merge the PR

## 🐛 Issue Reporting

### Before Creating an Issue

1. **Search Existing Issues**: Check if the issue already exists
2. **Reproduce the Bug**: Ensure the issue is reproducible
3. **Gather Information**: Collect relevant details about the issue

### Bug Report Template

```markdown
## Bug Description
A clear and concise description of what the bug is.

## Steps to Reproduce
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## Expected Behavior
A clear description of what you expected to happen.

## Actual Behavior
A clear description of what actually happened.

## Environment
- Browser: [e.g., Chrome 91.0]
- Device: [e.g., iPhone 12, Desktop]
- Screen Size: [e.g., 1920x1080, 375x667]
- Operating System: [e.g., macOS, Windows 10]

## Screenshots
If applicable, add screenshots to help explain your problem.

## Additional Context
Add any other context about the problem here.
```

### Feature Request Template

```markdown
## Feature Description
A clear and concise description of the feature you'd like to see.

## Problem Statement
Describe the problem this feature would solve.

## Proposed Solution
Describe how you envision this feature working.

## Alternatives Considered
Describe any alternative solutions you've considered.

## Additional Context
Add any other context, mockups, or examples about the feature request.
```

## 👥 Community Guidelines

### Communication Channels

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Technical discussions and Q&A
- **Email**: ieee.ras@muj.manipal.edu for general inquiries
- **Pull Request Comments**: Code-specific discussions

### Getting Help

**For Technical Issues**:
1. Check existing documentation
2. Search closed issues and discussions
3. Create a new issue with detailed information

**For General Questions**:
1. Use GitHub Discussions
2. Email the IEEE RAS MUJ team
3. Ask in pull request comments if related to specific code

### Recognition

We appreciate all contributions and will recognize contributors:

- **Contributors List**: Added to README.md
- **Release Notes**: Mentioned in significant releases
- **Social Media**: Featured on IEEE RAS MUJ social channels
- **Certificates**: Digital certificates for significant contributions

## 🏆 Contribution Levels

### First-Time Contributors
- Documentation improvements
- Small bug fixes
- UI/UX enhancements
- Translation work (future)

### Regular Contributors
- Feature implementations
- Performance optimizations
- Accessibility improvements
- Code reviews

### Core Contributors
- Architecture decisions
- Release management
- Mentoring new contributors
- Community management

## 📞 Contact Information

### Project Maintainers
- **IEEE RAS MUJ Team**: ieee.ras@muj.manipal.edu
- **Technical Lead**: [GitHub: @technical-lead]
- **Project Manager**: [GitHub: @project-manager]

### Support Channels
- **Technical Issues**: Create GitHub Issue
- **General Questions**: GitHub Discussions
- **Security Issues**: Email ieee.ras@muj.manipal.edu with "SECURITY" in subject
- **Partnership Inquiries**: Email with "PARTNERSHIP" in subject

---

Thank you for contributing to the IEEE RAS MUJ Pixel Palettes website! Your contributions help make this project better for everyone in the community. 🚀

**Happy Coding!** 💻✨
