export default function Contact() {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-8">
                        Get In Touch
                    </h2>
                    <p className="text-xl mb-12 text-gray-300">
                        Ready to find your dream property? Contact us today for a consultation.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="text-3xl mb-4">📞</div>
                            <h3 className="text-xl font-semibold mb-2">Phone</h3>
                            <p className="text-gray-300">+1 (555) 123-4567</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-4">📧</div>
                            <h3 className="text-xl font-semibold mb-2">Email</h3>
                            <p className="text-gray-300">info@groundedestates.com</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl mb-4">📍</div>
                            <h3 className="text-xl font-semibold mb-2">Address</h3>
                            <p className="text-gray-300">123 Real Estate Ave<br />City, State 12345</p>
                        </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition duration-300">
                        Schedule Consultation
                    </button>
                </div>
            </div>
        </section>
    )
} 