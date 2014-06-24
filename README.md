schema
======
[![Build Status](https://api.travis-ci.org/jsonresume/resume-schema.svg)](http://travis-ci.org/jsonresume/resume-schema)
Standard, Specification, Schema


### Getting Started

```
npm install --save resume-schema
```

To use

```
var resumeSchema  = require('resume-schema');
resumeSchema.validate({name: "Thomas"});
```

More likely

```

var resumeSchema  = require('resume-schema');
var resumeObject = JSON.parse(fs.readFileSync('resume.json', 'utf8'));
resumeSchema.validate(resumeObject);
```