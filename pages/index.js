var url = require('url');

export async function getServerSideProps({req, res, context, query}) {
  let b64 = url.parse(req.url).query.replace("base64=","");
  const buffer = Buffer.from(b64,"base64");
  res.setHeader('Content-Type', "image/png")
  res.setHeader("Content-Length", buffer.length)
  res.write(buffer)
  res.end(buffer, "binary");
  return { props: {}} //これがなくても動くのですが、errorが出るためこれを追加しています。
}
export default function Home() {
  
}
