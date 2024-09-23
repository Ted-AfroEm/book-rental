import BookRentLogo from "../../assets/icons/book-rent-logo";
import MenuIcon from "../../assets/icons/menu";
import DashoardIcon from "../../assets/icons/dashboard-icon";
// import dashboard from "../../assets/icons/"

export default function Dashboard() {
    return (
        <>
            <div className="min-h-screen bg-blue-50">
                <div className="flex justify-start gap-4 px-4 py-8">
                    <aside className="w-[17.4375rem] flex-shrink-0 rounded-2xl bg-[#171B36]">
                        {/* Sidebar content goes here */}
                        <div className="px-6 py-4">
                            <div className="mb-10">
                                <span className="flex gap-4">
                                    <span>
                                        <MenuIcon />
                                    </span>
                                    <span>
                                        <BookRentLogo />
                                    </span>
                                </span>
                            </div>

                            <div className="my-5">
                                <div className="bg-gray-100/50 h-[0.03125rem]"></div>
                            </div>
                            <div className="mb-2">
                                <div className="px-4 py-2 bg-sky-400 text-white rounded-md">
                                    <span className="flex gap-4">
                                        <span>
                                            <DashoardIcon />
                                        </span>
                                        <span>Dashboard</span>
                                    </span>
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="px-4 py-2 text-white/75 rounded-md">
                                    <span className="flex gap-4">
                                        <span>
                                            <DashoardIcon />
                                        </span>
                                        <span>Books</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="flex-1">
                        <header className="h-[4.1875rem] flex-shrink-0 rounded-2xl bg-white flex items-center">
                            <div className="pl-12">
                                <span className="text-black font-bold text-2xl leading-6 font-inter">
                                    Admin
                                </span>
                                <span className="text-black/50 font-light text-2xl leading-6 font-inter ml-2">
                                    / Dashboard
                                </span>
                            </div>
                        </header>
                        <main>
                            <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                {/* Your content */}
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
