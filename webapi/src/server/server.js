import express from "express"
import { router } from "../routes/index.route"
import bodyParser from "body-parser"
import { useSQLiteMockData, db } from "../db/db"

const start = async () => {
	try {
		await db.init()

		if (useSQLiteMockData) {
			const { seed } = await import("../db/seed")
			seed()
		}

		const app = express()
		app.use(bodyParser.json())

		app.use("/", router)

		const port = 3000
		app.listen(port, () => console.log(`App listening on port ${port}!`))
	} catch (error) {
		console.error("Error: Failed to start app.", error)
	}
}

start()
