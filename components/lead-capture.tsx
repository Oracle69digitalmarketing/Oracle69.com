"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Gift, Download, CheckCircle, Mail, User, Building, ArrowRight, Sparkles } from "lucide-react"

export default function LeadCapture() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    agreeToTerms: false,
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-0 shadow-2xl bg-white">
              <CardContent className="p-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Oracle69! 🎉</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your free marketing toolkit is being prepared. Check your email for instant access to exclusive tools,
                  templates, and AI-powered insights.
                </p>

                <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">What&apos;s included in your toolkit:</h3>
                  <ul className="text-left space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      AI-powered SEO audit template
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Lead generation funnel blueprint
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Social media automation guide
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      Exclusive access to beta features
                    </li>
                  </ul>
                </div>

                <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 text-lg">
                  Start Your Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 border-0">
            <Gift className="w-3 h-3 mr-1" />
            Free Marketing Toolkit
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">Get Your Free AI Marketing Toolkit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 10,000+ marketers who are already using our AI-powered tools to grow their business. Get instant access
            to exclusive templates, guides, and tools.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Templates</h3>
                  <p className="text-gray-600">
                    Ready-to-use templates for funnels, landing pages, and email campaigns optimized by our AI
                    algorithms.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Access</h3>
                  <p className="text-gray-600">
                    Download everything immediately after signup. No waiting, no complicated onboarding process.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    These tools have helped our users increase conversions by an average of 250% within the first month.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-2xl bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-gray-900">Get Started Free</CardTitle>
                  <CardDescription className="text-gray-600">
                    No credit card required. Instant access to all tools.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="pl-12 h-12 text-lg"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          placeholder="Your email address"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-12 h-12 text-lg"
                          required
                        />
                      </div>

                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          placeholder="Company name (optional)"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="pl-12 h-12 text-lg"
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                        className="mt-1"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                        I agree to receive marketing emails and understand I can unsubscribe at any time. By signing up,
                        I accept the{" "}
                        <a href="#" className="text-green-600 hover:underline">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="text-green-600 hover:underline">
                          Privacy Policy
                        </a>
                        .
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={!formData.agreeToTerms || isSubmitting}
                      className="w-full h-12 text-lg bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Creating Your Account...
                        </>
                      ) : (
                        <>
                          Get My Free Toolkit
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-6 text-center text-sm text-gray-500">
                    Join 10,000+ marketers already using Oracle69
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
