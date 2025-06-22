"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Target, Brain, BarChart3, MessageCircle, Globe, ArrowRight, Play } from "lucide-react"

export default function ToolsShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredTool, setHoveredTool] = useState<number | null>(null)

  const tools = [
    {
      icon: Brain,
      title: "AI Funnel Builder",
      description: "Create high-converting sales funnels with AI-powered optimization and A/B testing.",
      features: ["Drag & Drop Builder", "AI Optimization", "Real-time Analytics"],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      demo: "funnel-demo",
    },
    {
      icon: Target,
      title: "Lead Generation Engine",
      description: "Capture and nurture leads with intelligent forms and automated follow-ups.",
      features: ["Smart Forms", "Auto Follow-up", "Lead Scoring"],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      demo: "lead-demo",
    },
    {
      icon: BarChart3,
      title: "SEO Audit Tool",
      description: "Comprehensive SEO analysis with actionable insights and recommendations.",
      features: ["Site Analysis", "Keyword Research", "Competitor Insights"],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      demo: "seo-demo",
    },
    {
      icon: MessageCircle,
      title: "Quiz Generator",
      description: "Engage visitors with interactive quizzes that convert into qualified leads.",
      features: ["Interactive Quizzes", "Lead Qualification", "Custom Branding"],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      demo: "quiz-demo",
    },
    {
      icon: Globe,
      title: "Website Generator",
      description: "Build professional websites in minutes with AI-powered design and content.",
      features: ["AI Design", "Content Generation", "Mobile Responsive"],
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      demo: "website-demo",
    },
    {
      icon: Zap,
      title: "Automation Hub",
      description: "Connect all your tools and automate workflows with intelligent triggers.",
      features: ["Workflow Builder", "Smart Triggers", "Multi-platform"],
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      demo: "automation-demo",
    },
  ]

  return (
    <section id="tools" className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-0">
            Interactive Tools
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Experience Our AI-Powered Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Try our complete suite of marketing tools right in your browser. No downloads, no commitments - just
            powerful AI working for your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredTool(index)}
              onHoverEnd={() => setHoveredTool(null)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${tool.color}`}></div>
                <CardHeader className="pb-4">
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r ${tool.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <tool.icon className={`w-7 h-7 bg-gradient-to-r ${tool.color} bg-clip-text text-transparent`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300">
                    {tool.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {tool.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={hoveredTool === index ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${tool.color} mr-3`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex gap-2">
                    <Button
                      className={`flex-1 bg-gradient-to-r ${tool.color} hover:opacity-90 text-white group/btn`}
                      size="sm"
                    >
                      <Play className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Try Demo
                    </Button>
                    <Button variant="outline" size="sm" className="bg-white hover:bg-gray-50">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg group"
          >
            Explore All Tools
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
