function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">ChatBot Solutions</h3>
                        <p className="text-sm">
                            Empowering businesses with intelligent chatbot solutions that deliver 24/7 customer engagement.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#features" className="hover:text-white">Features</a>
                            </li>
                            <li>
                                <a href="#pricing" className="hover:text-white">Pricing</a>
                            </li>
                            <li>
                                <a href="#about-us" className="hover:text-white">About Us</a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-white">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.073 3.766 9.255 8.632 9.875v-6.988h-2.608V12h2.608v-2.175c0-2.583 1.543-4.007 3.905-4.007 1.131 0 2.312.202 2.312.202v2.536h-1.303c-1.285 0-1.683.798-1.683 1.613V12h2.864l-.458 2.887h-2.406v6.988C18.234 21.255 22 17.073 22 12z" />
                                </svg>
                            </a>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 19c8.837 0 13.675-7.326 13.675-13.675 0-.209 0-.42-.015-.63A9.779 9.779 0 0024 3.557a9.583 9.583 0 01-2.828.78A4.933 4.933 0 0023.337.364a9.846 9.846 0 01-3.127 1.184 4.922 4.922 0 00-8.384 4.48A13.978 13.978 0 011.671.898a4.92 4.92 0 001.527 6.573A4.902 4.902 0 01.96 6.82v.062a4.918 4.918 0 003.946 4.827 4.897 4.897 0 01-2.224.084 4.922 4.922 0 004.6 3.417A9.868 9.868 0 010 18.406a13.936 13.936 0 007.548 2.209" />
                                </svg>
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M19.917 3H4.083A1.086 1.086 0 003 4.083V19.92A1.085 1.085 0 004.083 21h15.834A1.084 1.084 0 0021 19.917V4.083A1.084 1.084 0 0019.917 3zM8.645 18.319H5.737V10.5h2.908v7.819zM7.191 9.371a1.692 1.692 0 01-1.696-1.696 1.69 1.69 0 111.696 1.696zM18.28 18.319h-2.908v-4.012c0-.961-.018-2.195-1.336-2.195-1.337 0-1.543 1.043-1.543 2.122v4.085H9.585V10.5h2.792v1.065h.039c.387-.733 1.333-1.504 2.744-1.504 2.936 0 3.476 1.932 3.476 4.44v3.818z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gray-700 my-6"></div>

                {/* Copyright */}
                <div className="text-center text-sm">
                    &copy; {new Date().getFullYear()} ChatBot Solutions. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
