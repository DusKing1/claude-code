// Stub for @anthropic-ai/sandbox-runtime - Anthropic internal package
// Provides types and no-op implementations for sandbox functionality

export interface Sandbox {
  start(): Promise<void>
  stop(): Promise<void>
  exec(cmd: string): Promise<{ stdout: string; stderr: string; exitCode: number }>
}

export interface SandboxOpts {
  runtime?: string
  image?: string
}

export function createSandbox(opts?: SandboxOpts): Sandbox {
  return {
    start: async () => {},
    stop: async () => {},
    exec: async (cmd: string) => ({ stdout: '', stderr: '', exitCode: 1 }),
  }
}

export class SandboxManager {
  async start() {}
  async stop() {}
  async exec(cmd: string) { return { stdout: '', stderr: '', exitCode: 1 } }
}

export class SandboxViolationStore {
  addViolation() {}
  getViolations() { return [] }
}

export interface SandboxViolationEvent {
  type: string
  detail: any
}

export interface FsReadRestrictionConfig {
  paths: string[]
}

export interface NetworkRestrictionConfig {
  allow: string[]
  deny: string[]
}

export interface SandboxAskCallback {
  (message: string): Promise<boolean>
}

export interface SandboxDependencyCheck {
  name: string
  checkFn: () => Promise<boolean>
}

export interface SandboxRuntimeConfig {
  image?: string
  runtime?: string
  command?: string[]
}

export const SandboxRuntimeConfigSchema = {
  parse: (input: any) => input,
}

export interface SandboxOpts2 {
  runtime?: string
  image?: string
}

// Export anything else that might be imported
export const SandboxViolationStore2 = SandboxViolationStore
export default {}
