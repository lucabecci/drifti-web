export type DemoStep = "observe" | "learn" | "contract" | "verify" | "drift";

export type DemoFrame = {
  id: DemoStep;
  label: string;
  eyebrow: string;
  duration: number;
  lines: string[];
};

// Representative output from the approved Landing — drifti.dev narrative.
// KAN-35 can replace these frames with captures from the real CLI.
export const demoFrames: DemoFrame[] = [
  {
    id: "observe",
    label: "Observe",
    eyebrow: "01 / execution",
    duration: 4300,
    lines: [
      '$ drifti observe -- codex exec "refactor auth"',
      "",
      "filesystem.read     ./src/**",
      "filesystem.write    ./src/auth/**",
      "process.execute     cargo test",
      "network.connect     api.openai.com",
      "",
      "✓ observation captured",
    ],
  },
  {
    id: "learn",
    label: "Learn",
    eyebrow: "02 / profile",
    duration: 3000,
    lines: [
      "$ drifti learn",
      "",
      "✓ learned representative capability profile",
      "",
      "$ drifti generate",
      "✓ generated drifti.yaml",
    ],
  },
  {
    id: "contract",
    label: "Contract",
    eyebrow: "03 / drifti.yaml",
    duration: 4700,
    lines: [
      "agent: codex",
      "",
      "capabilities:",
      "  filesystem:",
      "    read: [./src/**]",
      "    write: [./src/auth/**]",
      "  process:",
      "    execute: [cargo test]",
      "  network:",
      "    connect: [api.openai.com]",
    ],
  },
  {
    id: "verify",
    label: "Verify",
    eyebrow: "04 / later execution",
    duration: 3800,
    lines: [
      '$ drifti verify -- codex exec "refactor auth"',
      "",
      "✓ filesystem.read ./src/**",
      "✓ filesystem.write ./src/auth/**",
      "",
      "+ network.connect unknown-domain.example",
    ],
  },
  {
    id: "drift",
    label: "Drift",
    eyebrow: "05 / changed authority",
    duration: 3600,
    lines: [
      '$ drifti verify -- codex exec "refactor auth"',
      "",
      "✓ filesystem.read ./src/**",
      "✓ filesystem.write ./src/auth/**",
      "",
      "+ network.connect unknown-domain.example",
      "",
      "DRIFT DETECTED",
    ],
  },
];

export const contractYaml = `agent: codex

capabilities:
  filesystem:
    read:
      - ./src/**
    write:
      - ./src/auth/**

  process:
    execute:
      - cargo test

  network:
    connect:
      - api.openai.com`;

export const driftDiff = `network:
  connect:
    - api.openai.com
+   - production-db.internal`;
