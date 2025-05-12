export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
  
    const { content, sha } = req.body;
    const GITHUB_REPO = 'your-username/your-repo';
    const FILE_PATH = 'data/blogs.json';
    const BRANCH = 'main';
  
    const encodedContent = Buffer.from(JSON.stringify(content, null, 2)).toString('base64');
  
    try {
      const response = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: 'Update blogs.json via UI',
          content: encodedContent,
          sha,
          branch: BRANCH,
        }),
      });
  
      const data = await response.json();
      res.status(200).json({ success: true, data });
    } catch (error) {
      res.status(500).json({ error: 'Failed to update blogs' });
    }
  }
  