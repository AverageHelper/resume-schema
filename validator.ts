import type { ResumeSchema } from './resume.d.ts';
import jobSchema = require('./job-schema.json');
import schema = require('./schema.json');
import jsonschema = require('jsonschema');
const Validator = jsonschema.Validator;

// Generated schema interface types
export type * from "./resume.d.ts";

type ValidateCallback = (error: unknown, valid: boolean) => unknown;

/**
 * Asynchronously validates a given object against the JsonResume schema.
 *
 * @param resumeJson The object to validate.
 *
 * @throws an error if the object is invalid against the JsonResume schema.
 * @returns A promise that resolves if the validation is successful.
 */
export async function validate(resumeJson: object): Promise<void>;

/**
 * Asynchronously validates a given object against the JsonResume schema.
 *
 * @param resumeJson The object to validate.
 * @param callback A function that is called with the validation result.
 */
export function validate(resumeJson: object, callback: ValidateCallback): void;

export function validate(resumeJson: object, callback?: ValidateCallback): void | Promise<void> {
  if (callback) {
    // Callback mode
    const v = new Validator();
    const validation = v.validate(resumeJson, schema);

    if (!validation.valid) {
      // Invalid schema!
      callback(validation.errors, false);
      return;
    }

    // Valid schema!
    callback(null, true);
  } else {
    // Promise mode
    return new Promise((resolve, reject) => {
      const v = new Validator();
      const validation = v.validate(resumeJson, schema);

      if (!validation.valid) {
        // Invalid schema!
        reject(validation.errors);
        return;
      }

      // Valid schema!
      resolve();
    });
  }
}

/**
 * Validates and returns résumé data from the given object.
 *
 * @param resumeJson The object to validate.
 * @throws an error if the object is invalid against the JsonResume schema.
 * @returns A promise that resolves with the validated data.
 */
export async function validated(resumeJson: object): Promise<ResumeSchema> {
  await validate(resumeJson); // throws if invalid
  return resumeJson;
}

export { schema, jobSchema };
