# Security Policy

## Reporting a Vulnerability

Do not disclose a suspected vulnerability, exploit details, secret, or affected personal information in a public GitHub issue, pull request, discussion, Discord channel, or social-media post.

Use GitHub's private vulnerability reporting feature for this repository if it is enabled. If it is not available, join the [project Discord server](https://discord.gg/JVvHf5cXhs) and send a private direct message to a server moderator asking for a secure reporting route. Do not send working exploit code, credentials, secrets, or personal data in the first Discord message.

A useful report includes:

- the affected project-controlled URL, file, version, or component;
- a clear description of the issue and its likely impact;
- minimal, non-destructive steps needed to reproduce it;
- any conditions required for exploitation;
- whether sensitive data or a secret may have been exposed; and
- a safe way to contact you for follow-up.

The project will assess reports on a best-effort basis and may ask for clarification. It does not promise a particular response time, bounty, payment, public credit, or disclosure date.

## Scope

This policy covers security issues in project-controlled code and configuration published in this repository, including:

- the static website and its project-authored scripts;
- repository tools and schemas;
- project deployment configuration committed to the repository; and
- accidental publication of project-controlled credentials, tokens, or other secrets.

GitHub, Discord, the hosting provider, browsers, extensions, networks, and other third-party services are outside the project's security control. Report vulnerabilities in those services through the provider's own security program. A problem in third-party infrastructure may still be reported privately when it creates a direct risk to this project, but this policy does not authorize testing that infrastructure.

Claims about the reported event, errors in research reasoning, disputed interpretations, content corrections, and Code of Conduct concerns are not software vulnerabilities. Use the repository's correction process or community reporting route for those issues.

## Good-Faith Research Rules

Security research under this policy must be careful, proportionate, and limited to what is necessary to demonstrate a plausible issue. Researchers must:

1. avoid privacy violations, service disruption, denial of service, spam, social engineering, physical intrusion, or attempts to access another person's account;
2. use only accounts, content, and data they own or have explicit permission to test;
3. stop immediately if they encounter personal data, credentials, private communications, or access beyond what is necessary to confirm the issue;
4. not modify, delete, retain, transfer, or publicly expose data that does not belong to them;
5. not establish persistence, move laterally, or use a finding to test unrelated systems;
6. give the project a reasonable opportunity to investigate before public disclosure; and
7. comply with applicable law and the terms of third-party platforms.

The project supports good-faith research that follows these rules and does not intend to pursue punitive action for accidental, promptly reported, and responsibly handled findings. This is a statement of project intent, not legal immunity, a waiver of third-party rights, or authorization to test systems the project does not control.

## Coordinated Disclosure

Keep vulnerability details private while the project assesses and, where possible, addresses the issue. Any publication timing and level of detail should be coordinated with the project and should avoid exposing users, credentials, personal data, or an unpatched system.

If a report concerns an actively exploited issue or immediate risk, say so in the private report. The project may restrict affected functionality or rotate exposed secrets while investigating.
