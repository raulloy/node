import { Router } from 'express';
import { facebookCtr } from './facebook.ctrl.js';

export const accountInsights = Router();

accountInsights
  .get('/api/account-insights', facebookCtr.getAccountInsightsFn)
  .get('/api/test', facebookCtr.getTest);
