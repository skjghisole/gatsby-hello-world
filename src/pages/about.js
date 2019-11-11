import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

export default () => (
	<div style={{ color: `teal` }}>
		<Link to="/contact/">Contact</Link>
		<Link to="/">Home</Link>
		<Header headerText="About Gatsby" />
		<p>Such wow. Very React.</p>
	</div>
)
