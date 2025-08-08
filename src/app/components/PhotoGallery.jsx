"use client"

import { motion } from "motion/react"
import { Camera, ArrowRight } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCube, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/pagination'

export default function PhotoGallery({ onNext }) {
    const galleryItems = [
        { id: 'img-1', type: 'image', src: "/images/1.jpg" },
        { id: 'img-2', type: 'image', src: "/images/2.jpg" },
        { id: 'img-3', type: 'image', src: "/images/3.jpg" },
        { id: 'img-4', type: 'image', src: "/images/4.jpg" },
        { id: 'vid-1', type: 'video', src: "/videos/1.mp4" },
        { id: 'vid-2', type: 'video', src: "/videos/2.mp4" },
        { id: 'vid-3', type: 'video', src: "/videos/3.mp4" },
        { id: 'vid-4', type: 'video', src: "/videos/4.mp4" },
    ];

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="text-center mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="mb-8"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                    <Camera className="w-16 h-16 text-pink-400 mx-auto" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                Moments with You 
                </h1>
                <p className="text-xl text-purple-300">My Beautiful moments with You 📸</p>
            </motion.div>

            {/* Cube Gallery */}
            <div className="w-full max-w-sm mx-auto">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper h-[350px] md:h-[450px]" // adjust height as needed
                >
                    {galleryItems.map((item, index) => (
                        <SwiperSlide key={item.id}>
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={`Memory ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    controls={false}
                                    preload="metadata"
                                    alt={`Memory ${index + 1}`}
                                    className="w-full h-full object-cover rounded-xl bg-black"
                                />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%]"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <span>One Last Thing</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}
// ...existing code...
