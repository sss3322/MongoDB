const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    // Check if Authorization header exists and contains a Bearer token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            // Extract the token from the Authorization header
            token = req.headers.authorization.split(" ")[1];

            // Verify the token using the JWT_SECRET
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // If verification succeeds, attach the decoded payload to the request object
            req.user = decoded;

            // Proceed to the next middleware or route handler
            next();
        } catch (error) {
            // If verification fails, send a 401 Unauthorized response
            res.status(401).send("Unauthorized: Invalid Token");
        }
    } else {
        // If Authorization header is missing or invalid, send a 401 Unauthorized response
        res.status(401).send("Unauthorized: Missing or Invalid Token");
    }
};

module.exports = protect;
