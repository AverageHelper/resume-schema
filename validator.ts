import ZSchema = require('z-schema');
import schema = require('./schema.json');

// Generated schema interface types
export type * from "./resume.d.ts";

/**
 * Asynchronously validates a given object against the JsonResume schema.
 *
 * @param resumeJson The object to validate.
 * @param callback A function that is called with the validation result.
 */
export function validate(resumeJson: object, callback: (error: unknown, result?: { valid: boolean }) => unknown): void {
  const callbackWrapper = function(err: unknown, valid: boolean) {
    if(err) {
      callback(err)
    } else {
      callback(null, {valid: valid});
    }
  }

  new ZSchema({}).validate(resumeJson, schema, callbackWrapper);
}

export { schema };
