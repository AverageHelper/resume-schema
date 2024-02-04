import type { ResumeSchema } from './resume.d.ts';
import ZSchema = require('z-schema');
import schema = require('./schema.json');

// Generated schema interface types
export type * from "./resume.d.ts";

type ValidateCallback = (error: unknown, result?: { valid: boolean }) => unknown;

type ZSchemaCallback = (error: unknown, valid: boolean) => unknown;

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
    const callbackWrapper: ZSchemaCallback = function (err, valid) {
      if (err) {
        // Invalid schema!
        callback(err);
      } else {
        // Valid schema?
        callback(null, { valid: valid });
      }
    }

    new ZSchema({}).validate(resumeJson, schema, callbackWrapper);
  } else {
    // Promise mode
    return new Promise((resolve, reject) => {
      const callbackWrapper: ZSchemaCallback = function (err, valid) {
        if (err) {
          // Invalid schema!
          reject(err);
        } else if (!valid) {
          // Should be impossible
          reject(new TypeError('z-schema returned `valid: false` with no error'));
        } else {
          // Valid schema!
          resolve();
        }
      }

      new ZSchema({}).validate(resumeJson, schema, callbackWrapper);
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

export { schema };
