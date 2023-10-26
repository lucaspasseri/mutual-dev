import type { Metadata } from "next";
import "../globals.css";
import "./locals.css";

export const metadata: Metadata = {
	title: "Mutual Dev",
	description: "Mutual Dev - Portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
