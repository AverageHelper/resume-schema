import type schemaJson from "./schema.json";

/**
 * Asynchronously validates a given object against the JsonResume schema.
 *
 * @param resumeJson The object to validate.
 * @param callback A function that is called with the validation result.
 */
export function validate(resumeJson: object, callback: (error: unknown, result: { valid: boolean }) => unknown): void;

export const schema: typeof schemaJson;

// Generated schema interface types
export type * from "./resume.d.ts";
