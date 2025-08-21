"use client"
import { useRef } from "react"
import emailjs from "emailjs-com"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, FileText, ExternalLink, ArrowRight } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      name: "Real Time Chat App",
      summary: "A Flutter-based real-time chat app with Firebase backend and user authentication, enabling secure sign-up/login, instant messaging, and synced conversations across devices.",
      techStack: ["Dart", "Flutter", "Firebase Auth", "Cloud Firestore", "Provider"],
      image: "/project-images/chatapp/chatapp-logo.jpg?height=300&width=500&text=AI+Code+Assistant",
      demoLink: "#",
      githubLink: "https://github.com/justice-adeniji/chat-app",
      story: "Built to provide fast, reliable chat experiences with seamless cross-device syncing."
    },
    {
      id: 2,
      name: "Weather App",
      summary: "A React-based weather application that fetches and displays current weather conditions for any location worldwide. Users can simply type the name of a city or place to instantly see temperature, weather description, and other key details in a clean, responsive UI.",
      techStack: ["JavaScript", "React", "OpenWeather API", "CSS"],
      image: "/project-images/weather-app/weather.svg?height=300&width=500&text=Weather+App",
      demoLink: "#",
      githubLink: "https://github.com/justice-adeniji/react-weather-app",
      story: "Built to give anyone instant access to current weather conditions anywhere in the world."
    },
    {
      id: 3,
      name: "Real-time GPS Area Tracker",
      summary: "A Flutter-based mobile application that displays live satellite imagery, tracks the user's movement path, and calculates the exact area covered using spherical geometry. Includes a clean overlay showing area measurements in meters or kilometers with seamless map zoom and panning.",
      techStack: ["Flutter", "flutter_map", "ArcGIS World Imagery Tiles", "geolocator", "dart:math", "Material Design"],
      image: "/project-images/area-tracker/area-tracker-logo.png?height=300&width=500&text=GPS+Tracker",
      demoLink: "#",
      githubLink: "https://github.com/justice-adeniji/area-tracker",
      story: "Built to help surveyors, athletes, and outdoor explorers visualize their movement in real-time and measure the area they’ve covered."
    }
  


    
  ]

  const techStack = {
    languages: ["JavaScript", "Python", "TypeScript", "Java", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Flutter", "Flask", "Spring Boot"],
    tools: ["Git", "Github", "Android Studio", "VS Code", "IntelliJ IDEA", "PosgreSQL", "Vercel", "Figma", "Canva"],
    learning: ["AI", "Docker"]
  }

  const formRef = useRef<HTMLFormElement>(null)

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault()

  if (!formRef.current) return

  emailjs.sendForm(
    "service_mhascfh",    
    "template_xi44l8n",   
    formRef.current,
    "x8aCXVZNMZ0YsoA3q"     
  ).then(
    () => {
      alert("✅ Message sent!")
      formRef.current?.reset()
    },
    (error) => {
      alert("❌ Failed to send: " + error.text)
    }
  )
}


  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                Justice <span className="text-gray-600">Adeniji</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl">
                AI Engineer & Machine Learning Expert
              </p>
              <p className="text-lg text-gray-500 max-w-2xl">
                Fullstack Developer passionate about building intelligent solutions that solve real-world problems.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://linkedin.com/in/justice-adeniji" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="mailto:justice.adeniji@email.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="tel:+234 802 262 1675" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Phone
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="https://github.com/justice-adeniji" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link href="/resume.pdf" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Resume
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-200">
              <Image
                src="/placeholder.svg?height=320&width=320&text=Justice+Adeniji"
                alt="Justice Adeniji"
                width={320}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in AI, machine learning, and fullstack development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg bg-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      {project.demoLink != "#" && (
                          <Link href={project.demoLink} className="flex items-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </Link>
                        )
                      }
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <Link href={project.githubLink} className="flex items-center gap-1">
                        <Github className="w-3 h-3" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" variant="ghost" asChild>
                      <Link href={`/projects/${project.id}`} className="flex items-center gap-1">
                        Details
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500 italic">
                    {project.story}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                I'm Justice Adeniji, a second-year Software Engineering student at Veritas University with a passion for artificial intelligence and machine learning. I specialize in building intelligent systems that bridge the gap between complex algorithms and user-friendly applications.
              </p>
              <p>
                What drives me is the belief that technology should be simple, performant, and accessible to everyone. I love creating solutions that not only solve problems but also provide exceptional user experiences. Whether it's developing AI-powered applications or building robust fullstack systems, I focus on clean code, scalable architecture, and meaningful impact.
              </p>
              <p>
                I'm always eager to learn new technologies and collaborate on exciting projects. Currently open to internships and collaborative opportunities where I can contribute my skills while continuing to grow as a developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-600 text-lg">Technologies I work with</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Languages</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.languages.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Frameworks & Libraries</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.frameworks.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center">Tools & Platforms</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.tools.map((tech) => (
                  <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-center text-gray-600">Currently Learning</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.learning.map((tech) => (
                  <Badge key={tech} className="px-4 py-2 text-sm bg-gray-200 text-gray-700 hover:bg-gray-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-gray-600 text-lg">
              Interested in collaborating or have a project in mind? I'd love to hear from you.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="text-center p-6">
                <Mail className="w-8 h-8 mx-auto mb-4 text-gray-600" />
                <h3 className="font-semibold mb-2">Email</h3>
                <Link href="mailto:justiceadeniji@email.com" className="text-gray-600 hover:text-gray-900">
                  justiceadeniji@email.com
                </Link>
              </Card>
              
              <Card className="text-center p-6">
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-gray-600" />
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <Link href="https://www.linkedin.com/in/justice-adeniji/" className="text-gray-600 hover:text-gray-900">
                  Connect with me
                </Link>
              </Card>
            </div>
            
            <Card className="p-8">
              <CardHeader className="text-center pb-6">
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
<form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Justice Adeniji</h3>
            <p className="text-gray-400 mb-6">AI Engineer • Machine Learning Expert • Fullstack Developer</p>
            <div className="flex justify-center gap-6">
              <Link href="https://github.com/justice-adeniji" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="https://linkedin.com/in/justice-adeniji" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="mailto:justiceadeniji@email.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
              <Link href="tel:+234 802 262 1675"  className="text-gray-400 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400 text-sm">
              <p>&copy; 2025 Justice Adeniji. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
