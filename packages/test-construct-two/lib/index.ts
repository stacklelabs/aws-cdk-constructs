import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface TestConstructTwoProps {
  // Define construct properties here
}

export class TestConstructTwo extends Construct {

  constructor(scope: Construct, id: string, _: TestConstructTwoProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'TestConstructTwoQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
