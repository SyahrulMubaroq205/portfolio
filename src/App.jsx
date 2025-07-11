import AOS from "aos";
import { Atom, Download, X, Menu, Github, Mail, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';

export default function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const projects = [
        {
            subtitle: "2025",
            title: "Movies App",
            description:
                "Website yang menampilkan daftar film. Menggunakan API eksternal untuk mendapatkan data film.",
            image: "/images/movies.png",
            link: "https://frontend-semester4-5sfa.vercel.app/",
        },
        {
            subtitle: "2025",
            title: "Covid-19 App",
            description:
                "Website yang menampilkan informasi Global dan Indonesia tentang Covid-19 Menggunakan API eksternal untuk mendapatkan data Covid-19.",
            image: "/images/covid.png",
            link: "https://frontend-semester4-uas-covid.vercel.app/",
        },
        {
            subtitle: "2025",
            title: "Website Profil SMK AL-JAZARI",
            description:
                "Website profil sekolah yang menampilkan informasi tentang SMK AL-JAZARI, visi misi, dan program unggulan.",
            image: "/images/smk_aljazari.png",
            link: "https://sekolah-smk-aljazari.vercel.app/",
        },
        {
            subtitle: "2024",
            title: "News API",
            description:
                "REST API untuk manajemen berita dengan pencarian berdasarkan kategori dan fitur CRUD lengkap.",
            image: "/images/crud_api.png",
            link: "https://github.com/SyahrulMubaroq205/UAS_Backend_Semester_3.git",
        },
        {
            subtitle: "2024",
            title: "Netcheap",
            description:
                "Website platform layanan langganan Netflix murah yang menawarkan akses streaming dengan harga terjangkau mulai dari 20.000 Rupiah ",
            image: "/images/netcheap.png",
            link: "https://netcheap-syahrulmubaroq205s-projects.vercel.app/",
        },
        {
            subtitle: "2024",
            title: "UI/UX Design Website Peminatan TI",
            description:
                "Desain landing page interaktif untuk peminatan TI dengan navigasi terstruktur dan user-friendly.",
            image: "/images/figma_peminatan_ti.png",
            link: "https://www.figma.com/proto/7ZVLALc6qDBmn92ycPOfcT/Project-Website-Peminatan-TI?page-id=287%3A73&node-id=580-113&viewport=3044%2C587%2C0.11&t=Bj9dqfcUGnuXcjLf-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=287%3A152",
        },
        {
            subtitle: "2024",
            title: "Website Faskes",
            description:
                "Sistem informasi layanan medis yang memuat informasi dokter, galeri, dan kontrol data lewat dashboard.",
            image: "/images/faskes.png",
            link: "https://github.com/SyahrulMubaroq205/Project-uas-semester2.git",
        },
    ];

    const tools = [
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
    ];

    const ToolscontainerVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const ToolsitemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };

    const projectContainerVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                when: "beforeChildren",
                staggerChildren: 0.15,
            },
        },
    };

    const projectItemVariants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 },
    };


    useEffect(() => {
        AOS.init({
            duration: 800, // durasi animasi
            once: true     // hanya sekali saat scroll
        });
    }, []);

    return (
        <div className="font-poppins container mx-auto sm:px-8 md:px-12 lg:px-16 xl:px-24">
            {/* Navbar */}
            <nav className="grid grid-cols-3 items-center bg-white rounded-lg px-4 lg:px-[42px] py-4 shadow-sm fixed top-0 left-0 right-0 z-50 backdrop-blur-md">
                {/* Background Gradient Blur */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600 via-purple-300 to-cyan-400 blur-2xl opacity-40 rounded-3xl -z-10 animate-pulse"></div>

                {/* Kiri: Logo */}
                <div>
                    <a href="#" className="text-xl font-bold hover:text-gray-600 whitespace-nowrap">
                        Syahrul Portfolio
                    </a>
                </div>

                {/* Tengah: Ikon */}
                <div className="flex justify-center">
                    <Atom className="hidden md:block hover:scale-105 transition-transform duration-300" size={24} />
                </div>

                {/* Kanan: Desktop Nav / Mobile Button */}
                <div className="flex justify-end items-center">
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-6 font-semibold">
                        <li><a href="#" className="hover:text-gray-600">Home</a></li>
                        <li><a href="#about" className="hover:text-gray-600">About</a></li>
                        <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
                    </ul>

                    {/* Mobile Toggle */}
                    <button className="md:hidden" onClick={toggleMenu}>
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg z-40 md:hidden">
                        <ul className="flex flex-col items-center gap-4 py-4 font-semibold">
                            <li><a href="#" className="hover:text-gray-600">Home</a></li>
                            <li><a href="#about" className="hover:text-gray-600">About</a></li>
                            <li><a href="#projects" className="hover:text-gray-600">Projects</a></li>
                        </ul>
                    </div>
                )}
            </nav>

            {/* Hero */}
            <div className="w-full flex items-center justify-center px-4 pt-28 pb-20">
                <motion.div
                    className="max-w-6xl w-full relative bg-blue-800 rounded-3xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {/* Background Image */}
                    <img
                        src="/images/background-porto.png"
                        alt="Background"
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-80 z-0"
                    />

                    {/* Text Content */}
                    <motion.div
                        layout
                        className="relative z-10 flex flex-col md:flex-row items-center xl:gap-20 place-items-center justify-center p-8 md:p-16 md:gap-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <img
                            src="/images/poto-portfolio.jpg"
                            alt="Portfolio"
                            className="rounded-3xl w-[250px] h-[250px] object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                        />

                        <motion.div
                            className="text-white space-y-2 max-w-xl"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                        >
                            <h3 className="text-lg font-semibold">Hello I'M</h3>
                            <h1 className="text-2xl font-bold">Syahrul Mubaroq</h1>
                            <TypeAnimation
                                sequence={[
                                    'Fullstack Developer',
                                    2000,
                                    'Informatics Student',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                className="text-sm leading-relaxed text-justify block mb-4"
                                repeat={Infinity}
                            />
                            <a
                                href="/CV_Syahrul_Mubaroq.pdf"
                                download
                                className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
                            >
                                <Download size={18} />
                                Download CV
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>


            {/* About Me */}
            <div id="about" className="w-full flex items-center justify-center px-4 pb-20">
                <motion.div
                    className="max-w-6xl w-full grid md:grid-cols-2 gap-10 rounded-3xl p-8 md:p-16 shadow-xl bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 backdrop-blur-md text-white border border-white/10"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Kolom Kiri */}
                    <motion.div
                        className=""
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
                        <p className="text-white mb-6 text-justify">
                            Saya adalah seorang <span className="font-semibold">Fullstack Developer</span> dan mahasiswa aktif <span className="font-semibold">Teknik Informatika</span> di STT Terpadu Nurul Fikri. Fokus saya adalah membangun website modern yang efisien dan ramah pengguna, baik di sisi <span className="font-semibold">frontend</span> maupun <span className="font-semibold">backend</span>. Saya sangat antusias dalam <span className="font-semibold">mempelajari teknologi baru</span>.
                        </p>

                        <div className="mb-4">
                            <h3 className="text-xl font-semibold mb-1 flex items-center gap-2">
                                <span>📘</span> Background
                            </h3>
                            <p className="text-white/90 text-justify">
                                Saya lulusan SMK dengan jurusan Teknik Komputer dan Jaringan, saya kini melanjutkan studi S1 di bidang Teknik Informatika. Selama proses belajar, saya aktif mengikuti workshop, dan membangun berbagai proyek pengembangan web.
                            </p>
                        </div>
                    </motion.div>

                    {/* Kolom Kanan */}
                    <motion.div
                        className="grid md:grid-cols-1 gap-10"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Education */}
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <span>🏫</span> Pendidikan
                            </h3>
                            <div className="space-y-4 text-white/90">
                                <div className="flex items-start gap-3">
                                    <span className="text-white/60">📍</span>
                                    <div>
                                        <div className="font-bold">S1 - Teknik Informatika</div>
                                        <div className="text-sm text-white/70">STT Terpadu Nurul Fikri</div>
                                        <div className="text-sm italic">2023 - Sekarang</div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <span className="text-white/60">📍</span>
                                    <div>
                                        <div className="font-bold">Teknik Komputer & Jaringan</div>
                                        <div className="text-sm text-white/70">SMK AL-JAZARI</div>
                                        <div className="text-sm italic">2020 - 2023</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                                <span>✨</span> Soft Skills
                            </h3>
                            <ul className="grid grid-cols-2 gap-x-6 text-white/90 list-[✅] list-inside">
                                <li>Pemecahan Masalah</li>
                                <li>Komunikasi & Kerja Tim</li>
                                <li>Manajemen Waktu</li>
                                <li>Adaptif & Proaktif</li>
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            </div>


            {/* Tools and Skills */}
            <div className="w-full flex items-center justify-center px-4 pb-20">
                <motion.div
                    className="max-w-6xl w-full rounded-3xl p-8 md:p-16 shadow-xl bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 backdrop-blur-md border border-white/10"
                    variants={ToolscontainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Glow layer di belakang card */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-900 via-blue-600 to-indigo-500 blur-2xl opacity-30 rounded-3xl -z-10"></div>
                    <h2 className="text-2xl font-bold mb-10 text-center text-white">
                        Tools and Skills
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {tools.map((item, index, array) => (
                            <motion.div
                                key={index}
                                variants={ToolsitemVariants}
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
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* My Project */}
            <div id="projects" className="w-full flex items-center justify-center px-4 pb-20">
                <motion.div
                    className="max-w-6xl w-full rounded-3xl p-8 md:p-16 shadow-xl bg-gradient-to-br from-blue-900 via-blue-600 to-indigo-500 backdrop-blur-md border border-white/10"
                    variants={projectContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-white">My Projects</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={projectItemVariants}
                                className="bg-white/10 text-white rounded-3xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 backdrop-blur-md md:backdrop-blur-md backdrop-blur-noneborder border-white/10"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6 space-y-2">
                                    <p className="text-white text-sm">{project.subtitle}</p>
                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                    <p className="text-sm text-white/80">{project.description}</p>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-white text-blue-700 font-semibold px-4 py-2 mt-4 rounded-lg shadow hover:bg-gray-100 transition"
                                    >
                                        View Project
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <footer className="w-full flex items-center justify-center px-4 mt-[-24px]">
                <div className="text-center space-y-6 max-w-6xl w-full rounded-3xl p-8 md:p-16 shadow-xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 backdrop-blur-md border border-white/10">
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-blue-300 text-base sm:text-lg">
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

            <div className="h-2 bg-white"></div>

        </div >
    );
}
