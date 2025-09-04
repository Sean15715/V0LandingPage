"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Shield, Search, Users, Target, Trophy, Globe, Zap, CheckCircle, AlertCircle } from "lucide-react"
import { ScrollAnimations } from "@/components/scroll-animations"
import { useContactForm } from "@/hooks/useContactForm"
import Image from "next/image"

export default function BravoZoomLanding() {
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    setFormData,
    handleSubmit,
    handleFallbackSubmit,
  } = useContactForm();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollAnimations />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section bg-white">
        <div className="absolute inset-0 opacity-60">
          {/* US-China outline background image */}
          <div
            className="w-full h-full bg-center bg-no-repeat bg-contain hero-map-outline"
            style={{
              backgroundImage: "url('/hero-us-china-outline.png')",
              backgroundSize: "88%",
              backgroundPosition: "center",
              filter: "brightness(0.9) contrast(1.25)",
            }}
          />
          <div className="absolute inset-0">
            {/* US Location Marker */}
            <div className="absolute top-1/2 left-[15%] w-4 h-4 bg-primary rounded-full animate-ping opacity-80 shadow-lg shadow-primary/30" />
            <div className="absolute top-1/2 left-[15%] w-8 h-8 bg-primary/30 rounded-full animate-pulse shadow-lg shadow-primary/20" />

            {/* China Location Marker */}
            <div
              className="absolute top-1/2 right-[15%] w-4 h-4 bg-primary rounded-full animate-ping opacity-80 shadow-lg shadow-primary/30"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute top-1/2 right-[15%] w-8 h-8 bg-primary/30 rounded-full animate-pulse shadow-lg shadow-primary/20"
              style={{ animationDelay: "0.5s" }}
            />

            {/* Connection arc between US and China */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 15 50 Q 50 30 85 50"
                stroke="rgb(37 99 235)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                opacity="0.9"
                filter="drop-shadow(0 0 6px rgba(37, 99, 235, 0.4))"
              />
            </svg>

            {/* Additional location markers with updated colors */}
            <div
              className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-70 shadow-lg shadow-blue-400/30"
              style={{
                top: "42%",
                left: "30%",
                animationDelay: "1s",
              }}
            />
            <div
              className="absolute w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-60 shadow-lg shadow-blue-300/30"
              style={{
                top: "35%",
                left: "50%",
                animationDelay: "2s",
              }}
            />
            <div
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-ping opacity-80 shadow-lg shadow-blue-500/30"
              style={{
                top: "40%",
                left: "70%",
                animationDelay: "3s",
              }}
            />
          </div>
        </div>

        {/* Subtle background pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-black mb-6 text-balance animate-fade-in-up">
              The Unfair Hiring Advantage is in{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                China
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in-up hero-subtitle"
              style={{ animationDelay: "0.2s" }}
            >
              Unlock access to China's 9 million+ elite engineering minds—the talent that built titans like TikTok,
              Alibaba, and Deepseek.
            </p>

            {/* Social Proof */}
            <div className="mb-12 animate-fade-in-up hero-trusted-section" style={{ animationDelay: "0.4s" }}>
              <p className="text-sm text-foreground mb-4 uppercase tracking-wider font-semibold">TRUSTED BY FOUNDERS FROM</p>
              <div className="flex justify-center items-center gap-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
                {/* Capital Today Logo - Larger */}
                <div className="flex items-center justify-center w-40 h-16 company-logo">
                  <Image src="/capital-today-logo.png" alt="Capital Today" width={160} height={64} className="object-contain opacity-90" />
                </div>
                
                {/* Bessemer Venture Partners Logo */}
                <div className="flex items-center justify-center w-36 h-14 company-logo">
                  <Image src="/bessemer-venture-partners-logo.png" alt="Bessemer Venture Partners" width={144} height={56} className="object-contain opacity-90" />
                </div>
                
                {/* a16z Logo */}
                <div className="flex items-center justify-center w-36 h-14 company-logo">
                  <Image src="/a16z-logo.png" alt="a16z" width={144} height={56} className="object-contain opacity-90" />
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Build My Team Now
            </Button>
          </div>
        </div>
      </section>

      {/* Why Bravo Zoom Section */}
      <section className="py-20 px-6 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Unfair Advantage for Scaling Your Team</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl card-reveal"
              style={{ animationDelay: "0.1s" }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Brain className="w-12 h-12 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hire Better, More Capital-Efficiently</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Don't choose between quality and cost. Our deep network in China gives you access to elite,
                  senior-level engineers—the caliber you'd find in Silicon Valley—at a fraction of the fully-loaded
                  cost. Build a world-class team and make your venture capital go further.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl card-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Zap className="w-12 h-12 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">Reclaim Your Founder Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Stop wasting months on a slow hiring process. We handle the entire top-of-funnel, from sourcing
                  hundreds of candidates to conducting rigorous technical vetting. You only spend your time on the final
                  step: interviewing the top 2-3 pre-vetted finalists.
                </p>
              </CardContent>
            </Card>

            <Card
              className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl card-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <Shield className="w-12 h-12 text-primary group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-4">Hire Globally, With Local Simplicity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cross-border hiring is complex. We make it simple. Our optional EOR service handles all the tricky
                  payroll, legal, and compliance logistics. So you can enjoy the peace of mind that everything is
                  handled compliantly.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Talent Section */}
      <section className="py-20 px-6 bg-gray-50 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Access the Top 2% of Global Engineering Talent</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our candidates are seasoned professionals from world-class technology companies. We rigorously vet for
              technical excellence, problem-solving ability, and remote communication skills.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Profile Card 1 */}
            <Card
              className="bg-white border-gray-200 hover:border-primary/50 transition-all duration-500 group hover:scale-105 hover:shadow-xl card-reveal relative"
              style={{ animationDelay: "0.1s" }}
            >
              {/* OUR SPECIALTY Badge */}
              <div className="absolute -top-3 -left-3 z-10">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-lg transform rotate-3">
                  <span className="text-sm font-bold tracking-wide">OUR SPECIALTY</span>
                </div>
              </div>
              
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Senior Full-Stack Engineer</h3>
                  <p className="text-primary font-semibold">8 Years Experience</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Core Skills:</h4>
                  <p className="text-sm text-muted-foreground">
                    TypeScript, React, Next.js, PostgreSQL, High-Concurrency Systems
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-semibold">Prev. Employer:</span>
                    <p className="text-sm text-muted-foreground">
                      Senior Engineer at Alibaba Cloud (阿里云)
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Key Achievement:</span>
                    <p className="text-sm text-muted-foreground">
                      Led frontend and API development for real-time analytics dashboard used by thousands of enterprise
                      customers
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Typical US Salary:</span>
                    <span className="font-semibold">$180,000+ USD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bravo Zoom Target:</span>
                    <span className="font-semibold text-primary">~$95,000 USD</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Now
                </Button>
              </CardContent>
            </Card>

            {/* Profile Card 2 */}
            <Card
              className="bg-white border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-500 card-reveal"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Senior AI/ML Engineer</h3>
                  <p className="text-primary font-semibold">6 Years Experience</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Core Skills:</h4>
                  <p className="text-sm text-muted-foreground">
                    Python, PyTorch, LLM Fine-Tuning, Recommendation Systems, AWS
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-semibold">Prev. Employer:</span>
                    <p className="text-sm text-muted-foreground">
                      Senior Algorithm Engineer at Bytedance - TikTok (字节跳动)
                    </p>
                  </div>
                  <div>
                    <span className="font-semibold">Key Achievement:</span>
                    <p className="text-sm text-muted-foreground">
                      Developed recommendation algorithm for Douyin (TikTok) resulting in 5% increase in user engagement
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Typical US Salary:</span>
                    <span className="font-semibold">$200,000+ USD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bravo Zoom Target:</span>
                    <span className="font-semibold text-primary">~$110,000 USD</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Now
                </Button>
              </CardContent>
            </Card>

            {/* Profile Card 3 */}
            <Card
              className="bg-white border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-500 card-reveal"
              style={{ animationDelay: "0.3s" }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">Tech Lead / Engineering Manager</h3>
                  <p className="text-primary font-semibold">10+ Years Experience</p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Core Skills:</h4>
                  <p className="text-sm text-muted-foreground">
                    Team Leadership, System Architecture, Go, Low-Latency Systems, Global Infrastructure
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  <div>
                    <span className="font-semibold">Prev. Employer:</span>
                    <p className="text-sm text-muted-foreground">Principal Engineer at Tencent (腾讯) - WeChat Pay</p>
                  </div>
                  <div>
                    <span className="font-semibold">Key Achievement:</span>
                    <p className="text-sm text-muted-foreground">
                      Led team of 12 engineers for core payment processing gateway, handling billions of transactions per
                      year
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Typical US Salary:</span>
                    <span className="font-semibold">$220,000+ USD</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Bravo Zoom Target:</span>
                    <span className="font-semibold text-primary">~$130,000 USD</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300"
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Hire Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 px-6 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vetting Process: A Holistic Approach</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              We believe a great hire is more than just a resume. Our four-step process finds engineers with the right
              technical skills, problem-solving mindset, communication abilities, and motivation to thrive on your team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className="text-center process-step group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Search className="w-8 h-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold group-hover:scale-125 group-hover:shadow-lg transition-all duration-300">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Beyond the Obvious
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                We don't just search on LinkedIn. We leverage our deep, on-the-ground network within the Chinese tech
                ecosystem—targeting talent from world-class companies like Bytedance, Alibaba, and Tencent.
              </p>
            </div>

            <div
              className="text-center process-step group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Users className="w-8 h-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold group-hover:scale-125 group-hover:shadow-lg transition-all duration-300">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Vetting for Cultural Alignment
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                We conduct thorough screening interviews to assess communication skills, professional motivations, and
                cultural fit for a high-growth US startup environment.
              </p>
            </div>

            <div
              className="text-center process-step group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Target className="w-8 h-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold group-hover:scale-125 group-hover:shadow-lg transition-all duration-300">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                The Rigorous Vetting Funnel
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                Multi-stage technical evaluation including real-world take-home assignments and live technical screens
                to prove foundational problem-solving ability.
              </p>
            </div>

            <div
              className="text-center process-step group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/40 group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300">
                  <Trophy className="w-8 h-8 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                </div>
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mx-auto text-white font-bold group-hover:scale-125 group-hover:shadow-lg transition-all duration-300">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                Only the Top 2%
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                You will only meet the top 2-3 elite finalists who have passed every stage of our process and can start
                delivering value from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-6 bg-gray-50 scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Models for a Modern Partnership</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-500 card-reveal">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Search className="w-12 h-12 text-primary mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300" />
                  <h3 className="text-2xl font-bold">Finder's Fee Recruitment</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Our core service. For a one-time placement fee, we run our full, end-to-end vetting process to find you the perfect candidate. This is ideal for companies that have their own method for international payroll but need a specialist to find elite talent.
                </p>
                <Button 
                  className="w-full hover:scale-105 transition-transform duration-300"
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:scale-105 hover:shadow-xl transition-all duration-500 card-reveal">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Globe className="w-12 h-12 text-primary mb-4 hover:scale-110 hover:rotate-3 transition-all duration-300" />
                  <h3 className="text-2xl font-bold">"Keeper" EOR & Payroll</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Need a simple way to compliantly employ your new hire in China? Our optional 'Keeper' service handles all the complex cross-border payroll and legal logistics for a simple monthly fee. You get one invoice; we handle the rest.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full bg-transparent hover:scale-105 transition-transform duration-300"
                  onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Add-On Service
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Talent is Global. Opportunity Should Be Too.</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Bravo Zoom's mission is to build the bridge between the world's most ambitious founders and the elite,
            untapped engineering talent in China. We exist to help you build a world-class team, faster and smarter than
            you thought possible. We are not just finding engineers; we're building the future of work.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="consultation" className="py-20 px-6 scroll-reveal">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Team?</h2>
            <p className="text-xl text-muted-foreground">
              Let's find your next great engineer. Schedule a no-obligation, 15-minute consultation to discuss your needs.
            </p>
          </div>

          <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-500 card-reveal">
            <CardContent className="p-8">
              {/* Success Message */}
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">Thank you for your interest!</p>
                    <p className="text-green-600 text-sm">Check your email for our Calendly link to schedule your consultation.</p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input 
                      placeholder="John Doe" 
                      className="focus:scale-105 transition-transform duration-300" 
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Company Name</label>
                    <Input 
                      placeholder="Acme Inc." 
                      className="focus:scale-105 transition-transform duration-300" 
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Work Email</label>
                  <Input 
                    type="email" 
                    placeholder="john@acme.com" 
                    className="focus:scale-105 transition-transform duration-300" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Brief Message (Optional)</label>
                  <Textarea 
                    placeholder="Tell us about your hiring needs..." 
                    rows={4} 
                    className="focus:scale-105 transition-transform duration-300" 
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <div className="space-y-3">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full text-lg py-6 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      "Schedule My Consultation"
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold">Bravo Zoom</h3>
            <p className="text-muted-foreground mt-2">Connecting World-Class Companies with World-Class Talent.</p>
          </div>
          <p className="text-sm text-muted-foreground">© 2025 Bravo Zoom. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
