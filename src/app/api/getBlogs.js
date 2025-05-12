export default async function handler(req, res) {
    const GITHUB_REPO = 'your-username/your-repo';
    const FILE_PATH = 'data/blogs.json';
    const BRANCH = 'main';
  
    try {
      const result = await fetch(`https://api.github.com/repos/${GITHUB_REPO}/contents/${FILE_PATH}?ref=${BRANCH}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3.raw',
        },
      });
  
      const data = await result.json();
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      res.status(500).json({ error: 'Failed to load blogs' });
    }
  }
  