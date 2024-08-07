# JSON Resume Schema

[![GitHub Releases](https://badgen.net/github/tag/AverageHelper/resume-schema)](https://github.com/AverageHelper/resume-schema/releases)
[![NPM Release](https://badgen.net/npm/v/@averagehelper/resume-schema)](https://www.npmjs.com/package/@averagehelper/resume-schema)
<!-- [![Latest Status](https://github.com/AverageHelper/resume-schema/workflows/Latest/badge.svg)](https://github.com/AverageHelper/resume-schema/actions) -->
<!-- [![Release Status](https://github.com/AverageHelper/resume-schema/workflows/Release/badge.svg)](https://github.com/AverageHelper/resume-schema/actions) -->

Standard, Specification, Schema

> [!NOTE]
> This is a fork of [jsonresume/resume-schema](https://github.com/jsonresume/resume-schema). Learn more at [jsonresume.org](https://jsonresume.org).

My goals for this project:
- [x] Add a `basics.pronouns` field
- [x] Basic TypeScript declarations around exported structures
- [x] Generate a TypeScript interface from the JSON schema, to make generic theme templates easier to construct
- [x] Port to TypeScript
- [x] Add a `Promise`-compatible interface for `validate`
- [ ] Clean up and update the changelog, perhaps using the [keep a changelog](https://keepachangelog.com) standard
- [ ] Simplify unit tests. Surely there's a way to generate each valid/invalid test case from the existing well-labeled valid/invalid test fixtures!
- [ ] Build both legacy CJS and modern ESM bundles
- [ ] Switch to tab indentation [for accessibility](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/)
- [ ] A real actual website! Need to work out whether one is even necessary, and what domain name to use. We have [jsonresume.average.name](https://jsonresume.average.name) for now, and that simply redirects here.

I might add more as ideas come to me. I plan to open upstream pull requests once in a while. I'm not sure all of my changes will make it upstream, but a gal can try!

A read-only mirror exists at [my git forge](https://git.average.name/AverageHelper/resume-schema).

### Getting started

```sh
npm install @averagehelper/resume-schema
```

### Usage

Basic:

```js
import fs from "node:fs";
import resumeSchema from "@averagehelper/resume-schema";
const resume = JSON.parse(fs.readFileSync("resume.json", "utf8"));

try {
  await resumeSchema.validate(resume);
  console.log("Resume validated successfully!");
} catch (error) {
  console.error("The resume was invalid:", error);
}
```

Simplified:

```js
const fs = require("node:fs");
const resumeSchema = require("@averagehelper/resume-schema");
const resume = JSON.parse(fs.readFileSync("resume.json", "utf8"));

const resumeObject = await resumeSchema.validated(resume); // throws if invalid
```

Callback:

```js
const fs = require("node:fs");
const resumeSchema = require("@averagehelper/resume-schema");
const resume = JSON.parse(fs.readFileSync("resume.json", "utf8"));

resumeSchema.validate(resume, function (err, result) {
  if (err) {
    console.error("The resume was invalid:", error);
  } else {
    console.log("Resume validated successfully:", result);
  }
});
```

ESM:

```js
import fs from "node:fs";
import { validated } from "@averagehelper/resume-schema";
const resume = JSON.parse(fs.readFileSync("resume.json", "utf8"));

const resumeObject = await validated(resume); // throws if invalid
```

TypeScript:

```ts
import fs from "node:fs";
import type { ResumeSchema } from "@averagehelper/resume-schema";
import { validated } from "@averagehelper/resume-schema";
const resume = JSON.parse(fs.readFileSync("resume.json", "utf8"));

const resumeObject: ResumeSchema = await validated(resume); // throws if invalid
```

The JSON Resume schema is available from:

```js
import { schema } from "@averagehelper/resume-schema";
```

### Contribute

We encourage anyone who's interested in participating in the formation of this standard to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of
this scheme, report it as a bug. Specifically, if a patch or minor version is
released and breaks backward compatibility, that version should be immediately
yanked and/or a new version should be immediately released that restores
compatibility. Any change that breaks the public API will only be introduced at
a major-version release. As a result of this policy, you can (and should)
specify any dependency on JSON Resume Schema by using the Pessimistic Version
Constraint with two digits of precision.

We use automatic semver system.

Pull requests titles should be formatted as such

```
"fix: added something" - will bump the patch version
"feat: added something" - will bump the minor version
```

`major` version bumps will be few and far between for this schema.

### Job Description Schema

A draft schema for job descriptions is available in this project as well. It is not yet finalized, but we encourage you to check it out and provide feedback. See `job-schema.json` and `sample.job.json`.

The JSON Job schema is available from:

```js
require("@averagehelper/resume-schema").jobSchema;
```

### Other resume standards

- [HR-XML](https://schemas.liquid-technologies.com/HR-XML/2007-04-15/)
- [Europass](http://europass.cedefop.europa.eu/about-europass)
