export function Footer() {
    return (
        <footer className="bg-navy-900 border-t border-navy-700 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold text-white">
                        v<span className="text-teal-400">CRO</span>
                    </span>
                    <p className="text-slate-400 text-sm mt-2">
                        © {new Date().getFullYear()} Virtual Cyber Risk Office. All rights reserved.
                    </p>
                </div>
                <div className="flex space-x-6">
                    <a href="https://www.linkedin.com/in/berkalgan/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors">
                        LinkedIn
                    </a>
                    <a href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}
