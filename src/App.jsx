import { Atom, Download, X, Menu, Target } from "lucide-react";
import { useState } from "react";

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const projects = [
        {
            title: "Movies App",
            description:
                "Tentang aplikasi yang menampilkan daftar film dengan fitur pencarian dan detail. Menggunakan API eksternal untuk mendapatkan data film.",
            image: "/images/movies.png",
            link: "https://frontend-semester4-5sfa.vercel.app/",
        },
        {
            title: "Covid-19 App",
            description:
                "Aplikasi yang menampilkan informasi Global dan Indonesia tentang Covid-19 dengan fitur pencarian dan grafik. Menggunakan API eksternal untuk mendapatkan data Covid-19.",
            image: "/images/covid.png",
            link: "https://frontend-semester4-uas-covid.vercel.app/",
        },
        {
            title: "Website Profil SMK AL-JAZARI",
            description:
                "Website profil sekolah yang menampilkan informasi tentang SMK AL-JAZARI, visi misi, dan program unggulan.",
            image: "/images/smk_aljazari.png",
            link: "https://sekolah-smk-aljazari.vercel.app/",
        },
    ];

    return (
        <div className="font-poppins container mx-auto sm:px-8 md:px-12 lg:px-16 xl:px-24">
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-white  rounded-lg px-6 py-4 shadow-xl fixed top-0 left-0 right-0 z-50">
                <div className="text-xl font-bold">My Portfolio</div>

                <div className="hidden md:block">
                    <Atom size={24} />
                </div>

                <ul className="hidden md:flex gap-6 font-semibold">
                    <li><a href="#about" className="hover:text-gray-600">About</a></li>
                    <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
                    <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
                </ul>

                <button className="md:hidden" onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg z-40 md:hidden">
                        <ul className="flex flex-col items-center gap-4 py-4 font-semibold">
                            <li><a href="#about" className="hover:text-gray-600">About</a></li>
                            <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
                            <li><a href="#contact" className="hover:text-gray-600">Contact</a></li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Hero */}
            <div id="about" className="w-full flex items-center justify-center px-4 pt-28 pb-20">
                <div className="relative w-full max-w-6xl bg-blue-800 rounded-3xl overflow-hidden shadow-xl">
                    {/* Background Image */}
                    <img
                        src="/images/background-porto.png"
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
                    />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center xl:gap-20 p-8 md:p-16 md:gap-8">
                        {/* Left - Image */}
                        <img
                            src="/images/poto-portfolio.jpg"
                            alt="Portfolio"
                            className="rounded-3xl w-[250px] h-[250px] object-cover shadow-lg hover:scale-105 active:scale-105 touch-manipulation transition-transform duration-300"
                        />

                        {/* Right - Text */}
                        <div className="text-white space-y-4 max-w-xl md:text-left ">
                            <h1 className="text-2xl font-bold md:text-center xl:text-left">I'm Syahrul Mubaroq</h1>
                            <p className="text-sm leading-relaxed md:text-justify">
                                Mahasiswa tahun kedua Teknik Informatika dengan fokus pada pengembangan perangkat lunak berbasis web menggunakan PHP dan framework Laravel.
                                Memiliki pengalaman dalam membangun aplikasi dengan arsitektur MVC, manajemen database menggunakan MySQL, dan implementasi RESTful API.
                                Menguasai fitur-fitur Laravel seperti Eloquent ORM, Blade templating, authentication, dan authorization.
                                Berpengalaman dalam penggunaan version control Git dan berkolaborasi dalam proyek tim.
                            </p>
                            <a
                                href="/CV_Syahrul_Mubaroq.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
                            >
                                <Download size={18} />
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tools and Skills */}
            <div className="w-full flex items-center justify-center px-4 pb-20">
                <div className="max-w-6xl w-full rounded-3xl p-8 md:p-16 shadow-xl bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 backdrop-blur-md border border-white/10">

                    {/* Glow layer di belakang card */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-900 via-blue-600 to-indigo-500 blur-xl opacity-30 rounded-3xl -z-10"></div>
                    <h2 className="text-2xl font-bold mb-10 text-center text-white">Tools and Skills</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {[
                            { label: "HTML", src: "https://skillicons.dev/icons?i=html" },
                            { label: "CSS", src: "https://skillicons.dev/icons?i=css" },
                            { label: "JavaScript", src: "https://skillicons.dev/icons?i=javascript" },
                            { label: "React", src: "https://skillicons.dev/icons?i=react" },
                            { label: "Node.JS", src: "https://skillicons.dev/icons?i=nodejs" },
                            { label: "Laravel", src: "https://skillicons.dev/icons?i=laravel" },
                            { label: "Htmx", src: "https://skillicons.dev/icons?i=htmx" },
                            { label: "MySQL", src: "https://skillicons.dev/icons?i=mysql" },
                            { label: "Tailwind CSS", src: "https://skillicons.dev/icons?i=tailwindcss" },
                            { label: "Vite", src: "https://skillicons.dev/icons?i=vite" },
                        ].map((item, index, array) => (
                            <div
                                key={index}
                                className={`flex flex-col items-center ${index === array.length - 1 && array.length % 2 !== 0
                                    ? "col-span-2 justify-center"
                                    : ""
                                    }`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full max-w-[140px] aspect-[3/1] object-contain mb-2"
                                />
                                <span className="text-white">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* My Project */}
            <div id="projects" className="w-full px-24">
                <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 "
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-700 mb-4 text-sm">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Lihat Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <footer id="contact" className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-10 mt-16 rounded-xl">
                <div className="container mx-auto px-4 text-center space-y-6">
                    <h2 className="text-xl font-semibold">Terima kasih telah mengunjungi portofolio saya 🙏</h2>

                    <div className="flex justify-center gap-6 text-blue-300 text-lg">
                        <a
                            href="https://github.com/SyahrulMubaroq205?tab=overview&from=2025-07-01&to=2025-07-11"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <i className="fab fa-github"></i> GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/syahrul-mubaroq-a100322a9/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                    </div>

                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} <span className="font-medium">Syahrul Mubaroq</span>. All rights reserved.
                    </p>
                </div>
            </footer>

            <div className="h-8 bg-white"></div>

        </div>
    );
}
