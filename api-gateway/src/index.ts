/*
this is api gateway file, here we route requests 
to different different microservices
*/


import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import { verifyToken } from "./middleware/auth.js";

const app = express();

app.use(express.json());

const PORT = 3900;

app.get("/health", async (req, res) => {
  return res.status(200).json({
    status: "ok",
    message: "Api gateway is in good health",
  });
});

app.use(
  "/api/v1/books",
  verifyToken,
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: {
      "^": "/api/books",
    },

    on: {
      proxyReq: (proxyReq, req: any, res) => {
        console.log("[Proxying]", req.method, req.originalUrl);
        if (
          req.body &&
          Object.keys(req.body).length > 0 &&
          req.headers["content-type"]?.includes("application/json")
        ) {
          const bodyData = JSON.stringify(req.body);

          // Update Content-Length
          proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
          proxyReq.setHeader("Content-Type", "application/json");

          // Write body to the proxy request stream
          proxyReq.write(bodyData);
        }
      },
    },
  })
);

app.use(
  "/api/v1/orders",
  verifyToken,
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: {
      "^": "/api/orders",
    },

    on: {
      proxyReq: (proxyReq, req: any, res) => {
        console.log("[Proxying]", req.method, req.originalUrl);
        if (
          req.body &&
          Object.keys(req.body).length > 0 &&
          req.headers["content-type"]?.includes("application/json")
        ) {
          const bodyData = JSON.stringify(req.body);

          // Update Content-Length
          proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
          proxyReq.setHeader("Content-Type", "application/json");

          // Write body to the proxy request stream
          proxyReq.write(bodyData);
        }
      },
    },
  })
);

app.use(
  "/api/v2/users",
  createProxyMiddleware({
    target: "http://localhost:3001",
    changeOrigin: true,
    pathRewrite: {
      "^": "/api/users",
    },

    on: {
      proxyReq: (proxyReq, req: any, res) => {
        console.log("[Proxying]", req.method, req.originalUrl);
        if (
          req.body &&
          Object.keys(req.body).length > 0 &&
          req.headers["content-type"]?.includes("application/json")
        ) {
          const bodyData = JSON.stringify(req.body);

          // Update Content-Length
          proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
          proxyReq.setHeader("Content-Type", "application/json");

          // Write body to the proxy request stream
          proxyReq.write(bodyData);
        }
      },
    },
  })
);

app.use(
  "/api/v1/users",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: {
      "^": "/api/users",
    },

    on: {
      proxyReq: (proxyReq, req: any, res) => {
        console.log("[Proxying]", req.method, req.originalUrl);
        if (
          req.body &&
          Object.keys(req.body).length > 0 &&
          req.headers["content-type"]?.includes("application/json")
        ) {
          const bodyData = JSON.stringify(req.body);

          // Update Content-Length
          proxyReq.setHeader("Content-Length", Buffer.byteLength(bodyData));
          proxyReq.setHeader("Content-Type", "application/json");

          // Write body to the proxy request stream
          proxyReq.write(bodyData);
        }
      },
    },
  })
);

app.listen(PORT, () => {
  console.log(PORT);
  console.log(`Api gateway express app started on http://localhost:${PORT}`);
});
