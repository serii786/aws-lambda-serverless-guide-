# AWS Lambda - Serverless Made Simple ⚡☁️

A practical guide to AWS Lambda for beginners. Covers concepts, architecture, trade-offs, and hands-on examples.

![AWS Lambda](banner.png) 

## 📌 What is AWS Lambda?

> Lambda runs your code when something happens, and stops when the work is done. You never manage a computer.

**Serverless Myth:** Serverless does NOT mean no servers. It means YOU don't manage them. AWS does.

## 🍳 Key Concepts - Kitchen Analogy

| Lambda Term | Kitchen Meaning | Explanation |
|---|---|---|
| Event | Order Slip | What happened? e.g., file uploaded |
| Trigger | Doorbell | Starts Lambda |
| Function | Recipe | Your code |
| Handler | Step 1 of Recipe | Entry point |
| Execution Role | Key Card | IAM permissions |
| Logs | Chef's Diary | CloudWatch Logs |
| Timeout | Egg Timer | Max run time |
| Memory | Table Size | More memory = More CPU |
| Concurrency | No. of Chefs | Parallel executions |
| Cold Start | Wearing Apron | First-time delay |
| Warm Start | Already Dressed | Reused environment |

## ⚖️ Lambda vs EC2

| EC2 (Own Car) | Lambda (Taxi) |
|---|---|
| You manage OS, scaling, patching | AWS manages everything |
| Pay by hour, even if idle | Pay only for execution time |
| Good for long, steady workloads | Good for event-driven, spiky workloads |
| Full control | Limited control |

> **Pro Tip:** Lambda is NOT always cheaper. For 24/7 heavy traffic, EC2 can be more cost-efficient.

## ✅ When to Use vs ❌ When Not To

**Use Lambda For:**
- S3 file processing (resize, scan)
- APIs with API Gateway
- Scheduled jobs (cron)
- SQS / SNS processing
- Security automation

**Avoid Lambda For:**
- Jobs > 15 minutes
- Steady heavy traffic
- Stateful apps
- Long-lived connections
- Special hardware needs

## 💻 Hands-On Examples

Check `/examples` folder:
1.  `hello-world` - Basic Lambda
2.  `s3-thumbnail` - Image resize on S3 upload
3.  `api-gateway` - Serverless API

## 🚀 Deployment

```bash
# Zip and deploy
zip function.zip index.js
aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip
