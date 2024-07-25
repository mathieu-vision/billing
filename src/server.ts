import express, { Request, Response } from 'express';
import cors from 'cors';
import billingSubscriptionRoutes from './routes/billing.subscription.routes';
import billingSubscriptionSyncRoutes from './routes/billing.subscription.sync.routes';

export const getServerApp = async (): Promise<express.Application> => {
  const app = express();

  app.use(cors({ origin: true, credentials: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/api', billingSubscriptionRoutes);
  app.use('/api', billingSubscriptionSyncRoutes);
  app.get('/health', (req: Request, res: Response) => {
    return res.status(200).send('OK');
  });

  return app;
};
