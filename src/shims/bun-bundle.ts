// Shim for Bun's build-time feature flag system
// In the real build, `feature()` is evaluated at compile time for dead-code elimination.
// Here we provide runtime values.

const ENABLED_FLAGS = new Set([
  'BG_SESSIONS',
  'BRIDGE_MODE',
  'VOICE_MODE',
  'BUDDY',
  'FORK_SUBAGENT',
  'TRANSCRIPT_CLASSIFIER',
  'BASH_CLASSIFIER',
  'TREE_SITTER_BASH_SHADOW',
  'TEAMMEM',
  'MCP_SKILLS',
  'EXPERIMENTAL_SKILL_SEARCH',
  'CACHED_MICROCOMPACT',
  'WEB_BROWSER_TOOL',
  'MONITOR_TOOL',
  'AUTO_THEME',
  'HISTORY_SNIP',
  'WORKFLOW_SCRIPTS',
  'CONNECTOR_TEXT',
  'TOKEN_BUDGET',
  'AGENT_MEMORY_SNAPSHOT',
  'VERIFICATION_AGENT',
  'UPLOAD_USER_SETTINGS',
  'CCR_REMOTE_SETUP',
  'CCR_MIRROR',
  'CCR_AUTO_CONNECT',
  'MEMORY_SHAPE_TELEMETRY',
  'COMPUTER_USE',
  'MCP_TOOLS',
  'PLUGINS',
  'SKILLS',
  'AUTO_MODE',
  'PLAN_MODE',
  'TEAMS',
  'WORKTREES',
  'DAEMON_BG',
  'CHUNKED_MCP',
  'CODE_EDITOR_TOOLS',
  'CODE_EDITOR_PERMISSIONS',
  'SCHEDULED_TASKS',
  'BRIEF_MODE',
  'PROGRESS_SUMMARIES',
  'BUDGET_CONTINUATION',
])

export function feature(flag: string): boolean {
  return ENABLED_FLAGS.has(flag)
}
