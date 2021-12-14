import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface TestConstructOneProps {
  // Define construct properties here
}

export const HELLO = "hello";

export class TestConstructOne extends Construct {
  constructor(scope: Construct, id: string, _: TestConstructOneProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'TestConstructOneQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
