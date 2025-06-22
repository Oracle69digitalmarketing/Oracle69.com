"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, RotateCcw, CheckCircle, AlertCircle, TrendingUp, Users, Target } from "lucide-react"

export default function InteractiveDemo() {
  const [activeDemo, setActiveDemo] = useState("seo")
  const [isRunning, setIsRunning] = useState(false)
  const [progress, setProgress] = useState(0)
  const [demoResults, setDemoResults] = useState<any>(null)

  const demos = {
    seo: {
      title: "SEO Audit Tool",
      description: "Enter a website URL to get instant SEO analysis",
      placeholder: "https://example.com",
      buttonText: "Run SEO Audit",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600",
    },
    funnel: {
      title: "AI Funnel Builder",
      description: "Describe your business to generate a custom funnel",
      placeholder: "E.g., Online fitness coaching business",
      buttonText: "Generate Funnel",
      icon: Target,
      color: "from-purple-500 to-purple-600",
    },
    leads: {
      title: "Lead Generator",
      description: "Create a lead magnet for your target audience",
      placeholder: "E.g., Small business owners",
      buttonText: "Create Lead Magnet",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
  }

  const runDemo = async () => {
    setIsRunning(true)
    setProgress(0)
    setDemoResults(null)

    // Simulate demo progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsRunning(false)
          // Show demo results
          setDemoResults({
            score: Math.floor(Math.random() * 30) + 70,
            issues: Math.floor(Math.random() * 5) + 2,
            improvements: Math.floor(Math.random() * 8) + 5,
            traffic: "+" + Math.floor(Math.random() * 50) + 25 + "%",
          })
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)
  }

  const resetDemo = () => {
    setProgress(0)
    setDemoResults(null)
    setIsRunning(false)
  }

  return (
    <section id="demo" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
            Live Demo
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">See Our Tools in Action</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of our AI tools with live, interactive demos. No signup required - just enter your
            information and watch the magic happen.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Demo Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(demos).map(([key, demo]) => (
              <Button
                key={key}
                variant={activeDemo === key ? "default" : "outline"}
                onClick={() => {
                  setActiveDemo(key)
                  resetDemo()
                }}
                className={`${
                  activeDemo === key
                    ? `bg-gradient-to-r ${demo.color} text-white`
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <demo.icon className="w-4 h-4 mr-2" />
                {demo.title}
              </Button>
            ))}
          </div>

          {/* Demo Interface */}
          <Card className="border-0 shadow-2xl">
            <CardHeader className="text-center">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} mb-4`}
              >
                {(() => {
                  const IconComponent = demos[activeDemo as keyof typeof demos].icon
                  return <IconComponent className="w-8 h-8 text-white" />
                })()}
              </div>
              <CardTitle className="text-2xl font-bold">{demos[activeDemo as keyof typeof demos].title}</CardTitle>
              <CardDescription className="text-lg">
                {demos[activeDemo as keyof typeof demos].description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Input Section */}
              <div className="flex gap-4">
                <Input
                  placeholder={demos[activeDemo as keyof typeof demos].placeholder}
                  className="flex-1 h-12 text-lg"
                  disabled={isRunning}
                />
                <Button
                  onClick={runDemo}
                  disabled={isRunning}
                  className={`bg-gradient-to-r ${demos[activeDemo as keyof typeof demos].color} hover:opacity-90 text-white px-8 h-12`}
                >
                  {isRunning ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Running...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      {demos[activeDemo as keyof typeof demos].buttonText}
                    </>
                  )}
                </Button>
              </div>

              {/* Progress Bar */}
              <AnimatePresence>
                {(isRunning || progress > 0) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Analysis Progress</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Demo Results */}
              <AnimatePresence>
                {demoResults && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200"
                  >
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">Analysis Complete!</h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">{demoResults.score}</div>
                        <div className="text-sm text-gray-600">SEO Score</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600">{demoResults.issues}</div>
                        <div className="text-sm text-gray-600">Issues Found</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">{demoResults.improvements}</div>
                        <div className="text-sm text-gray-600">Improvements</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-600">{demoResults.traffic}</div>
                        <div className="text-sm text-gray-600">Traffic Boost</div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button className="flex-1 bg-gradient-to-r from-green-600 to-blue-600 text-white">
                        Get Full Report
                      </Button>
                      <Button variant="outline" onClick={resetDemo}>
                        <RotateCcw className="w-4 h-4 mr-2" />
                        Try Again
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Usage Limit Notice */}
              {!demoResults && !isRunning && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Demo Limitation:</strong> This is a limited preview. Sign up for free to access full
                    features and unlimited usage.
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
