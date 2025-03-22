import { Button } from "../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Mail, Github, Linkedin, Code, Award, BookOpen, Briefcase, GraduationCap, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-primary mb-4">
              <img src="/placeholder.svg?height=128&width=128" alt="Karthick Raja" className="object-cover" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Karthick Raja E</h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">Data Analytics & Machine Learning Enthusiast</p>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Link href="mailto:e.karthickraja2004@gmail.com">
                <Button variant="outline" size="sm" className="gap-1">
                  <Mail className="h-4 w-4" />
                  Email
                </Button>
              </Link>
              <Link href="https://github.com/Karthickraja018" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/KarthickRaja" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://leetcode.com/Karthick004" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Code className="h-4 w-4" />
                  LeetCode
                </Button>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <Button className="gap-2">
                View Resume
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16" id="about">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              Motivated Data Analytics & Machine Learning student with a strong foundation in Python, SQL, machine
              learning concepts, and data visualization. Passionate about leveraging data-driven insights to solve
              real-world problems and drive innovation.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Areas of Interest</h3>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm py-1">
                  Artificial Intelligence
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  Machine Learning
                </Badge>
                <Badge variant="secondary" className="text-sm py-1">
                  Data Analytics
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 md:py-16 bg-muted/50" id="skills">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Python</Badge>
                  <Badge>C</Badge>
                  <Badge>Java</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>MySQL</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>GitHub</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frameworks & Libraries</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Flask</Badge>
                  <Badge>Streamlit</Badge>
                  <Badge>Pandas</Badge>
                  <Badge>NumPy</Badge>
                  <Badge>Matplotlib</Badge>
                  <Badge>Postman</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>MS Excel</Badge>
                  <Badge>VS Code</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>Adaptability</Badge>
                  <Badge>Time Management</Badge>
                  <Badge>Team Collaboration</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Experience Section */}
      <section className="py-12 md:py-16" id="education-experience">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="education" className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="education" className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Education
                </TabsTrigger>
                <TabsTrigger value="experience" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Experience
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="education">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Bachelor of Technology in AI & ML</CardTitle>
                        <CardDescription>SNS College of Technology</CardDescription>
                      </div>
                      <Badge variant="outline">2022-2026</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>CGPA: 8.7 (4th semester)</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>Higher Secondary Education</CardTitle>
                        <CardDescription>DSM Higher Secondary School</CardDescription>
                      </div>
                      <Badge variant="outline">2019-2022</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Percentage: 89%</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>SSLC (10th Grade)</CardTitle>
                        <CardDescription>DSM Higher Secondary School</CardDescription>
                      </div>
                      <Badge variant="outline">2019</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>Percentage: 89%</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="experience">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Machine Learning Intern</CardTitle>
                      <CardDescription>Cognifyz Technology</CardDescription>
                    </div>
                    <Badge variant="outline">Mar 2024 - Apr 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Assisted in building and optimizing machine learning models for real-world applications.</li>
                    <li>Preprocessed large datasets, enhancing data quality and feature selection.</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 md:py-16 bg-muted/50" id="projects">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Data Visualization AI</CardTitle>
                <CardDescription>Nov 2024 - Dec 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">Generative AI</Badge>
                    <Badge variant="outline">Streamlit</Badge>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Developed an AI-powered tool for generating interactive and insightful data visualizations.</li>
                    <li>
                      Integrated Pandas, Matplotlib, and Streamlit to enhance user experience and real-time analysis.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Virtual Mouse using Gestures</CardTitle>
                <CardDescription>April 2024 - May 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">OpenCV</Badge>
                    <Badge variant="outline">Mediapipe</Badge>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>Designed a gesture-based virtual mouse using OpenCV.</li>
                    <li>Implemented hand-tracking algorithms to enable touch-free computer interaction.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="flex flex-col h-full">
              <CardHeader>
                <CardTitle>Jarvis-Inspired Virtual Assistant</CardTitle>
                <CardDescription>February 2024</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Python</Badge>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li>
                      Created a desktop assistant for voice command-based automation and real-time information
                      retrieval.
                    </li>
                    <li>Integrated speech recognition and AI-based automation features.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 md:py-16" id="certifications">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <BookOpen className="h-6 w-6" />
              Certifications
            </div>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">DBMS Course</CardTitle>
                  <CardDescription>Infosys Springboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">May 2024</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Computer Vision Course</CardTitle>
                  <CardDescription>NPTEL</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">July-October 2024</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Machine Learning Course</CardTitle>
                  <CardDescription>Infosys Springboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">July 2024</Badge>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Generative AI Introduction</CardTitle>
                  <CardDescription>Skillible</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline">July-August 2024</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-12 md:py-16" id="contact">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <p>e.karthickraja2004@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://linkedin.com/in/KarthickRaja" className="hover:underline" target="_blank">
                      linkedin.com/in/KarthickRaja
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://github.com/Karthickraja018" className="hover:underline" target="_blank">
                      github.com/Karthickraja018
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-muted-foreground" />
                    <Link href="https://leetcode.com/Karthick004" className="hover:underline" target="_blank">
                      leetcode.com/Karthick004
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 md:py-8 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-4">
              <Link href="mailto:e.karthickraja2004@gmail.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="https://github.com/Karthickraja018" target="_blank">
                <Github className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/KarthickRaja" target="_blank">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Karthick Raja E. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}

