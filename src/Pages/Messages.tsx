import Header from "@/components/FindJob/Header/Header"
import MessagingPage from "@/components/Messages/MessagingPage"

const Messages = () => {
    return (
        <main className="font-serif">
            <nav className="sticky top-0 z-[50]">
                <Header />
            </nav>

            <MessagingPage />
        </main>
    )
}

export default Messages