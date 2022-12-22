var url = require('url');
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * 
 * @param {NextApiRequest} req 
 * @param {NextApiResponse} res 
 */
export default function handler(req, res) {
    let b64 = encodeURI(req.query.base64).split("%20").join("+");
    const buffer = Buffer.from(b64,"base64");

    res.setHeader('Content-Type', "image/png");
    res.setHeader("Content-Length", buffer.length);
    // res.write(buffer);
    
    res.status(200).write(buffer);
    res.end(buffer, "binary");

    // return { props: {}}
}