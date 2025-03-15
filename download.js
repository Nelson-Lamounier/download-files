// Import the S3 client and command from AWS SDK v3
const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
// Import the getSignedUrl function from the s3-request-presigner package
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

// Set up the S3 client
const s3Client = new S3Client({ region: "eu-west-1" });

exports.handler = async () => {
  try {
    // Define the parameters for the GetObjectCommand.
    const params = {
      Bucket: "your-bucket-name",
      Key: "path/to/your/file",
      ResponseContentDisposition: "attachment; filename=filename",
    };

    // Create the GetObject command using the updated parameters
    const command = new GetObjectCommand(params);

    // Generate a pre-signed URL that expires in 60 seconds.
    // Notice: We call getSignedUrl directly (not as a method on s3Client)
    const url = await getSignedUrl(s3Client, command, { expiresIn: 60 });
    console.log("Generated Pre-Signed URL:", url);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    };
  } catch (error) {
    console.error("Error generating signed URL:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};