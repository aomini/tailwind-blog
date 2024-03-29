import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <body className="bg-white text-black dark:bg-gray-900 dark:text-white" >
                    <Main />
                    <NextScript />

                </body>
            </Html>
        );
    } s
}

export default MyDocument;

