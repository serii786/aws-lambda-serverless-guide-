exports.handler = async (event) => {
    const bucket = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;
    console.log(`New file in ${bucket}: ${key}`);
    return { status: "Processed" };
};
