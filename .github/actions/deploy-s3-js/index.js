const core = require('@actions/core');
// const github = require('@actions/github'); this gives context data, not needed here
const exec = require('@actions/exec');

function run() {
    const bucket = core.getInput("bucket", {
        required: true
    });
    const bucketRegion = core.getInput("bucket-region", {
        required: true
    });
    const distFolder = core.getInput("dist-folder", {
        required: true
    });

    // Upload files to S3 bucket
    exec.exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`);
}

run();