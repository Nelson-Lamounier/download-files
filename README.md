# Download Resume from S3 - AWS Lambda Function

This project contains an AWS Lambda function written in Node.js (using AWS SDK for JavaScript v3) that generates a pre-signed URL for a PDF file stored in an S3 bucket. The generated URL allows secure and time-limited access to download the resume.

## Overview

The Lambda function:
- Instantiates an S3 client in the `eu-west-1` region.
- Uses the `GetObjectCommand` from `@aws-sdk/client-s3` and the `getSignedUrl` function from `@aws-sdk/s3-request-presigner` to generate a pre-signed URL.
- Returns the URL in a JSON response along with appropriate CORS headers.

## Prerequisites

- **Node.js:** Version 22.x or above.
- **AWS Account:** With proper permissions to create and invoke Lambda functions and access S3.
- **AWS CLI:** Installed and configured with credentials.
- **S3 Bucket:** An S3 bucket named `your-bucket-name` containing the file at `path/to/YourFile`.
- **IAM Permissions:** The Lambda function's execution role must have permission to perform `s3:GetObject` on the bucket.

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>