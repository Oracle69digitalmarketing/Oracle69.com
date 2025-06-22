"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { TrendingUp, Users, Zap, Target } from "lucide-react"

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const stats = [
    {
      icon: Users,
      value: 10000,
      suffix: "+",
      label: "Active Users",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      value: 250,
      suffix: "%",
      label: "ROI Increase",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Zap,
      value: 99.9,
      suffix: "%",
      label: "Uptime",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: Target,
      value: 85,
      suffix: "%",
      label: "Conversion Rate",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} mb-4`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <CountUpAnimation value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function CountUpAnimation({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
