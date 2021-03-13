import * as cdk from '@aws-cdk/core';

import AwesomeStack from '../lib/awesome-stack';

const app = new cdk.App();

/**
 * The name of the stack depends on the STAGE environment variable so we can deploy the infrastructure multiple times in parallel
 * @example
 * AwesomeStack-pr-1-awesome-branch
 * AwesomeStack-production
 */
const stackName = 'AwesomeStack-' + process.env.STAGE;

new AwesomeStack(app, stackName);