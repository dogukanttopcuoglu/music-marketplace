import Image from "next/image"
import Link from "next/link"
import { Search, Play, Heart, ShoppingCart, ChevronRight, Star, Music, Users, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center">
        <div
          className="absolute inset-0 z-0 bg-gradient-to-r from-black to-transparent"
          style={{
            
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">YOUR FIRST HIT STARTS HERE</h1>
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for beats, producers, or genres"
                className="w-full h-14 pl-12 pr-4 rounded-md bg-white text-black text-lg"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 h-12 bg-primary hover:bg-primary/90">
                Search
              </Button>
            </div>
            <div className="flex items-center mt-4 text-sm text-gray-400">
              <span>What's trending right now:</span>
              <div className="flex gap-2 ml-2">
                <Badge variant="outline" className="hover:bg-primary/20 cursor-pointer">
                  Hip Hop
                </Badge>
                <Badge variant="outline" className="hover:bg-primary/20 cursor-pointer">
                  Trap
                </Badge>
                <Badge variant="outline" className="hover:bg-primary/20 cursor-pointer">
                  R&B
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Tracks */}
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Trending tracks</h2>
            <Link href="#" className="text-primary flex items-center hover:underline">
              See more <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <TrackCard key={i} />
            ))}
          </div>
        </div>
      </section>
      /*

      
      {/* Kickstart Career */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Kickstart your music career today</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <FeatureItem
                icon={<ShoppingCart className="h-6 w-6 text-primary" />}
                title="Simple purchasing experience"
                description="Buy beats instantly with our secure checkout system. Download high-quality files immediately after purchase."
              />
              <FeatureItem
                icon={<Music className="h-6 w-6 text-primary" />}
                title="Simple licensing options"
                description="Clear licensing terms that protect both producers and artists. Know exactly what you're getting."
              />
              <FeatureItem
                icon={<Users className="h-6 w-6 text-primary" />}
                title="A community that understands you"
                description="Connect with thousands of producers and artists. Collaborate, share feedback, and grow together."
              />
              <Button size="lg" className="mt-4">
                Join now
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Studio session" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-2">YES, THAT BEAT WAS BOUGHT ON BEATMARKET</h2>
          <p className="text-gray-400 mb-8">Millions of artists have found their perfect beats on our marketplace.</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-zinc-900 rounded-lg overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Track ${i + 1}`}
                    alt={`Track ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Genres */}
      <section className="py-16 bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Popular genres</h2>
            <Link href="#" className="text-primary flex items-center hover:underline">
              See more <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Hip Hop", "Trap", "R&B", "Pop", "Drill", "Reggae"].map((genre, i) => (
              <Link
                href="#"
                key={i}
                className="bg-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-700 transition-colors"
              >
                <div className="aspect-square bg-zinc-700 rounded-lg mb-2 flex items-center justify-center">
                  <Music className="h-10 w-10 text-gray-400" />
                </div>
                <span>{genre}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-2">WHAT MAKES BEATMARKET SO GREAT?</h2>
          <p className="text-gray-400 text-center mb-12">Don't just hear from us. Hear from our community.</p>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              image="/placeholder.svg?height=300&width=300"
              quote="BeatMarket helped me find the perfect sound for my project. The producers here are top-notch."
              author="Artist Name"
            />
            <TestimonialCard
              image="/placeholder.svg?height=300&width=300"
              quote="I've sold more beats in my first month on BeatMarket than I did in a year on other platforms."
              author="Producer Name"
            />
            <TestimonialCard
              image="/placeholder.svg?height=300&width=300"
              quote="The licensing is clear and fair. I know exactly what I'm getting when I purchase a beat."
              author="Label Executive"
            />
          </div>
        </div>
      </section>

      {/* Studio Promo */}
      <section className="py-16 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-bold">BEATMARKET STUDIO</span>
            <Badge className="bg-yellow-500 text-black">NEW</Badge>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Your music business in one place</h2>
              <div className="space-y-6">
                <FeatureItem
                  icon={<BarChart3 className="h-6 w-6 text-primary" />}
                  title="Manage your business"
                  description="Track sales, analyze performance, and manage your catalog all in one place."
                />
                <FeatureItem
                  icon={<Star className="h-6 w-6 text-primary" />}
                  title="Track performance"
                  description="Get detailed analytics on your beats, including plays, downloads, and revenue."
                />
                <FeatureItem
                  icon={<Users className="h-6 w-6 text-primary" />}
                  title="Grow your audience"
                  description="Connect with fans and build your following with powerful marketing tools."
                />
                <Button size="lg" className="mt-4">
                  Try it free
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="BeatMarket Studio Dashboard"
                width={600}
                height={500}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      

      {/* Footer */}
      <footer className="py-12 bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div>
              <h3 className="font-bold mb-4">Get Started</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Browse Beats
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Sell Beats
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Report an Issue
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Licensing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    YouTube
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} BeatMarket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function TrackCard() {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden group">
      <div className="aspect-square relative">
        <Image src="/placeholder.svg?height=200&width=200" alt="Track cover" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>
      <div className="p-3">
        <h3 className="font-medium truncate">Track Title</h3>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-400 text-sm">Producer</span>
          <span className="font-bold text-primary">$29.99</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Play className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureItem({ icon, title, description }:FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">{icon}</div>
      <div>
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  )
}


interface TestimonialCardProps {
  image?: string;
  quote: string;
  author: string;
}
function TestimonialCard({ image, quote, author }: TestimonialCardProps) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
      <div className="aspect-video relative">
        <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
      </div>
      <div className="p-6">
        <p className="mb-4 text-gray-300">"{quote}"</p>
        <p className="font-bold">- {author}</p>
      </div>
    </div>
  )
}

