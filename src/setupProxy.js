// frontend/src/setupProxy.js
module.exports = function (app) {
  app.use((req, res, next) => {
    // Add CORS/PNA headers for the resources Office (Excel Online) fetches
    // Extend this list if you want to expose other paths (e.g., /functions.html)
    const needsCors =
      req.path === "/lib/shortcuts-ai.json" || // NOTE(rami): missing -ai, after fixing, I still see 404 errors for that file
      req.path === "/functions.html" ||
      req.path.startsWith("/lib/");

    if (needsCors) {
      // EXACT origin is safest; you can also echo req.headers.origin if you prefer
      res.setHeader("Access-Control-Allow-Origin", "https://excel.officeapps.live.com");
      res.setHeader("Vary", "Origin");
      res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
      res.setHeader("Access-Control-Allow-Headers", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      // Required for Private Network Access (public site -> localhost)
      res.setHeader("Access-Control-Allow-Private-Network", "true");
    }

    // Answer PNA/CORS preflights
    if (req.method === "OPTIONS") {
      return res.sendStatus(204);
    }

    next();
  });
};
