import Link from "next/link"
export default function FirstPost() {
    return (
        <>
            <h1>First page</h1>
            <Link href="/">
                <h2>Return to home</h2>
            </Link>

        </>)
}