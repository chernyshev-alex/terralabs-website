'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
  CheckCircle2,
  Brain,
  Database,
  Code
} from 'lucide-react'

export default function CompanyWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setResult(null)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '83887f7e-2399-4d76-b221-f705f7908cf3',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: 'Terra Labs Website'
        })
      })

      const json = await response.json()

      if (response.status === 200) {
        setResult('Thank you! Your message has been sent successfully.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setResult(json.message || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error)
      setResult('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    {
      icon: Brain,
      title: 'AI/RAG Solutions',
      description: 'Advanced AI and Retrieval-Augmented Generation services to build intelligent systems that combine knowledge retrieval with generative AI capabilities.',
      features: ['LLM Integration', 'RAG Implementation', 'Custom AI Solutions']
    },
    {
      icon: Database,
      title: 'Big Data',
      description: 'Comprehensive big data solutions including data engineering, analytics, and processing to transform raw data into actionable insights.',
      features: ['Data Engineering', 'Analytics Pipeline', 'Real-time Processing']
    },
    {
      icon: Code,
      title: 'Go & Java Development',
      description: 'High-performance backend development using Go and Java for scalable, reliable, and maintainable enterprise applications.',
      features: ['Microservices', 'API Development', 'Performance Optimization']
    }
  ]



  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' }
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <img
                src="/terralabs-website/logo.jpg"
                alt="Terra Labs Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">Terra Labs</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </button>
              <Button onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
              <ThemeToggle />
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-sm font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-sm font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-sm font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-sm font-medium">
                Contact
              </button>
              <Button className="w-full" onClick={() => scrollToSection('contact')}>
                Get Started
              </Button>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="text-sm">
              Welcome to Terra Labs
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Transform Your Business with
              <span className="block text-primary">AI, Big Data & Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in AI/RAG solutions, Big Data analytics, and high-performance Go/Java development to power your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="gap-2">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary">About Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Building the Future of Business
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A dedicated professional committed to delivering exceptional results through AI/RAG, Big Data, and Go/Java expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To empower businesses with innovative solutions that drive growth, efficiency, and sustainable success in the digital age.
                  </p>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Client-focused approach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Innovation-driven solutions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Sustainable growth strategies</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    To be the global leader in business consulting and digital transformation, setting industry standards for excellence and innovation.
                  </p>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Global impact and reach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Industry leadership</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm">Continuous innovation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary">Our Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Cutting-Edge Technology Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We specialize in AI/RAG, Big Data, and high-performance Go/Java development to power your digital transformation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="secondary">Contact Us</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Start a Conversation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                    {result && (
                      <p className={`text-center text-sm ${result.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                        {result}
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">chernyshev.alexander@gmail.com</div>
                      </div>
                    </div> */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">Phone</div>
                        <div className="text-sm text-muted-foreground">+48 535 086 714</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium">Address</div>
                        <div className="text-sm text-muted-foreground">
                          Krakow, Kapelanka 110
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      <Button variant="outline" size="icon" aria-label="LinkedIn">
                        <Linkedin className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="Twitter">
                        <Twitter className="w-5 h-5" />
                      </Button>
                      <Button variant="outline" size="icon" aria-label="GitHub">
                        <Github className="w-5 h-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img
                  src="/terralabs-website/logo.jpg"
                  alt="Terra Labs Logo"
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">Terra Labs</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Transforming businesses through innovation and excellence since 2009.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => scrollToSection('home')} className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-primary transition-colors">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>AI/RAG Solutions</li>
                <li>Big Data</li>
                <li>Go & Java Development</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <Button variant="outline" size="icon" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="Twitter">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Terra Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
