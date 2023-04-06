import config from '../../config.js';
import { accounts } from '../../utils/utils.js';
import { getAccountInsights } from './facebook.api.js';

const accessToken = config.FB_API_TOKEN;

export class facebookCtr {
  static async getAccountInsightsFn(req, res) {
    const AccountInsights = accounts.map(async (account) => {
      const { since, until } = req.query;

      const data = await getAccountInsights(
        accessToken,
        account.id,
        since,
        until
      );

      return data.data[0];
    });

    Promise.all(AccountInsights)
      .then((results) => {
        res.status(200).json({ info: results });
      })
      .catch((error) => {
        console.error(error);
        res.status(400).json(error);
      });
  }

  static async getTest(req, res) {
    res.status(200).json({ greeting: 'Hello World!' });
  }
}
