// Errors middleware
const errorHandler = (err, req, res, next) => {
    res.status(500);
    res.json({ message: "Server error !" });
    console.log(err)
};
export default errorHandler;