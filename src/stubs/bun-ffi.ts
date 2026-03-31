// Stub for bun:ffi - foreign function interface
export function dlopen(): any { return {} }
export function CFunc(): any { return () => {} }
export function ptr(): any { return null }
export const FFIType = {
  void: 0,
  bool: 1,
  u8: 2,
  i8: 3,
  u16: 4,
  i16: 5,
  u32: 6,
  i32: 7,
  u64: 8,
  i64: 9,
  f32: 10,
  f64: 11,
  ptr: 12,
} as const
export default {} as any
