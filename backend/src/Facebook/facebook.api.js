import axios from 'axios';

export const getAccountInsights = async (
  accessToken,
  accountId,
  since = '2023-02-01',
  until = '2023-02-28'
) => {
  try {
    const response = await axios({
      url: `https://graph.facebook.com/v15.0/${accountId}/insights?fields=account_id,account_name,reach,clicks,impressions,spend,cpc,ctr,conversions,frequency,actions&time_range={'since':'${since}','until':'${until}'}&access_token=${accessToken}`,
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};
