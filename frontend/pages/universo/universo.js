import { verifyToken } from "../../utils/verify-token.js"
import { getName } from "../../utils/get-name.js"
import { logout } from "../../utils/logout.js"

const url = "../login/login.html"

verifyToken(url)
getName()
logout()