const colorConsole = require("./colorConsole.function");
const emitError = (res, code, message, data) => {
    colorConsole("Red", "", "Dim", "Error: Sent to client | STATUS = " + code + " | MESSAGE = " + message);
    res.status(code).send(
        {
            error:{message, data}
        }
    )
}

module.exports = emitError;