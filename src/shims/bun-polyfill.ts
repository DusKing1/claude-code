// Bun API polyfill for Node.js runtime
import { createHash } from 'crypto'

if (typeof (globalThis as any).Bun === 'undefined') {
  ;(globalThis as any).Bun = {
    hash: (input: string): bigint => {
      const h = createHash('sha256').update(input).digest()
      return BigInt('0x' + h.toString('hex').slice(0, 8))
    },
    env: process.env,
    spawn: undefined,
    serve: undefined,
    listen: undefined,
    embeddedFiles: [],
    // Minimal stubs for properties that may be checked
    argv: process.argv,
    main: undefined,
  }
}
