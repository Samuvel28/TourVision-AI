import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-background to-muted">
        {/* Hero Section */}
        <section className="px-4 py-20 md:py-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 text-balance">
                Smart Pilgrim Platform for Tamil Nadu Temples
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
                Real-time crowd predictions, hassle-free darshan bookings, and personalized travel planning powered by AI
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/temples"
                  className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Browse Temples
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
                >
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Why Choose YatrAI?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'AI Crowd Predictions',
                  description: 'Get accurate footfall estimates 21 days in advance with real-time crowd level alerts',
                  icon: '📊'
                },
                {
                  title: 'Easy Darshan Booking',
                  description: 'Reserve your darshan slots with just a few taps. Know exactly when to visit.',
                  icon: '🙏'
                },
                {
                  title: 'Hotel & Travel',
                  description: 'Book nearby hotels, plan your itinerary, and manage your entire pilgrimage journey.',
                  icon: '🏨'
                },
                {
                  title: 'Real-Time Alerts',
                  description: 'Receive push notifications about crowd levels and darshan availability.',
                  icon: '🔔'
                },
                {
                  title: 'Temple Planning',
                  description: 'For temple staff: AI-powered resource planning for optimal crowd management.',
                  icon: '📋'
                },
                {
                  title: 'Tamil Panchangam',
                  description: 'Auspicious days and times based on lunar calendar for your visit.',
                  icon: '🌙'
                }
              ].map((feature, idx) => (
                <div key={idx} className="p-6 bg-muted rounded-lg hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                  <p className="text-foreground/70">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Temples Section */}
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Featured Temples
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Meenakshi Amman Temple', location: 'Madurai', footfall: '15,000+' },
                { name: 'Chidambaram Nataraja', location: 'Chidambaram', footfall: '12,000+' },
                { name: 'Tirupati Venkateswara', location: 'Tirupati', footfall: '50,000+' },
                { name: 'Kanyakumari Devi', location: 'Kanyakumari', footfall: '8,000+' },
                { name: 'Rameswaram Ramanathaswamy', location: 'Rameswaram', footfall: '10,000+' },
                { name: 'Thanjavur Brihadeshwara', location: 'Thanjavur', footfall: '5,000+' }
              ].map((temple, idx) => (
                <Link key={idx} href={`/temples/${temple.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="p-6 bg-white border-2 border-muted rounded-lg hover:border-accent transition-colors cursor-pointer">
                    <h3 className="text-lg font-semibold text-primary mb-2">{temple.name}</h3>
                    <p className="text-sm text-foreground/70 mb-3">{temple.location}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-accent">Daily Footfall</span>
                      <span className="font-bold text-primary">{temple.footfall}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/temples"
                className="px-8 py-3 bg-accent text-primary rounded-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                View All Temples
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 md:py-24 bg-primary text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Pilgrimage?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of pilgrims who are experiencing smarter, stress-free temple visits with YatrAI
            </p>
            <Link
              href="/auth/signup"
              className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-muted transition-colors"
            >
              Get Started Free
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
