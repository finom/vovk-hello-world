import { initVovk } from 'vovk';

import HelloController from '../../../modules/hello/HelloController';

const controllers = { HelloController };
const workers = { };

export type Controllers = typeof controllers;
export type Workers = typeof workers;

export const { GET, POST, PUT, DELETE } = initVovk({ controllers, workers });
