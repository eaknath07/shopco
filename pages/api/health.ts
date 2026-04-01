import { NextApiRequest, NextApiResponse } from 'next';

/*export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(200).json({ live: true, success: "running" });
    }
}*/

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // 👇 change this before each deployment
    const deploymentName = "Deployment-A";  
    const timestamp = new Date().toISOString();

    return res.status(200).json({
      live: true,
      success: "running",
      deployment: deploymentName,
      checkedAt: timestamp
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
