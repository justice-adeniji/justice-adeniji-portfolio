import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, ArrowLeft } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

const projectDetails = {
  1: {
      name: "Real Time Chat App",
      summary: "A Flutter-based real-time chat app with Firebase backend and user authentication, enabling secure sign-up/login, instant messaging, and synced conversations across devices.",
      description: "This project enables instant, secure communication between users with a modern chat interface. Built with Flutter for a smooth cross-platform experience, it integrates Firebase Authentication for user security and Cloud Firestore for real-time message syncing. State management is handled by Provider for clean and scalable architecture.",
      techStack: ["Dart", "Flutter", "Firebase Auth", "Cloud Firestore", "Provider"],
      features: [
        "Real-time one-on-one messaging",
        "User authentication (sign-up/login)",
        "Cross-device message syncing",
        "Clean and responsive chat UI"
      ],
      challenges: [
        "Ensuring instant message delivery with no lag",
        "Handling authentication edge cases",
        "Managing state efficiently for performance"
      ],
      images: [
        "/project-images/chatapp/chat-screen.jpg",
        "/project-images/chatapp/login-screen.jpg",
        "/project-images/chatapp/signup-screen.jpg"
      ],
      builtFor: "Built to provide fast, reliable chat experiences with seamless cross-device syncing.",
      demoLink: "#",
      githubLink: "https://github.com/justice-adeniji/chat-app"
    },

    2: {
        name: "Weather App",
        summary: "A React-based weather application that fetches and displays current weather conditions for any location worldwide.",
        description: "This app provides instant access to real-time weather data anywhere in the world. Built with React and powered by the OpenWeather API, users can search for a city or place to instantly see temperature, weather description, and other conditions in a clean, responsive interface.",
        techStack: ["JavaScript", "React", "OpenWeather API", "CSS"],
        features: [
          "Instant weather search by city or location",
          "Displays temperature, weather type, and humidity",
          "Responsive and clean user interface",
          "API integration for real-time weather data"
        ],
        challenges: [
          "Optimizing API calls for fast response times",
          "Handling incorrect or misspelled location inputs",
          "Ensuring mobile responsiveness"
        ],
        images: [
          "/project-images/weather-app/home-screen.jpg",
          "/project-images/weather-app/search-demo.jpg"
        ],
        builtFor: "Built to give anyone instant access to current weather conditions anywhere in the world.",
        demoLink: "#",
        githubLink: "https://github.com/justice-adeniji/react-weather-app"
      },

    3: {
        name: "Real-time GPS Area Tracker",
        summary: "A Flutter-based mobile app that displays live satellite imagery, tracks movement paths, and calculates the area covered using spherical geometry.",
        description: "This app uses GPS tracking to monitor and display a user's movement in real-time over satellite imagery. It calculates the exact area covered using spherical geometry, making it perfect for surveyors, athletes, and outdoor explorers. The UI features a live map with an overlay showing area measurements in meters or kilometers.",
        techStack: ["Flutter", "flutter_map", "ArcGIS World Imagery Tiles", "geolocator", "dart:math", "Material Design"],
        features: [
          "Real-time GPS tracking",
          "Satellite imagery display",
          "Area calculation using spherical geometry",
          "Seamless map zoom and panning"
        ],
        challenges: [
          "Accurately calculating area with spherical geometry",
          "Maintaining location accuracy in low-signal areas",
          "Optimizing map performance with large data"
        ],
        images: [
          "/project-images/area-tracker/live-map.jpg",
          "/project-images/area-tracker/area-measurement.jpg"
        ],
        builtFor: "Built to help surveyors, athletes, and outdoor explorers visualize their movement in real-time and measure the area they’ve covered.",
        demoLink: "#",
        githubLink: "https://github.com/justice-adeniji/area-tracker"
      }




}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projectDetails[parseInt(params.id) as keyof typeof projectDetails]
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to portfolio
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl text-gray-600 mb-6">{project.summary}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-4">
              <Button asChild>
                {project.demoLink != "#" && (
                  <Link href={project.demoLink} className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </Link>)}
              </Button>
                
              
              <Button variant="outline" asChild>
                <Link href={project.githubLink} className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Project Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Challenges & Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Project Gallery</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((image, index) => (
                    <div key={index} className="aspect-video overflow-hidden rounded-lg border">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.name} screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
