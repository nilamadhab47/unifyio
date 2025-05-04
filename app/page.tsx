"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const modules = [
  {
    title: "Recruitment",
    description: "AI-powered hiring needs forecasting, job management, and interview scheduling.",
    features: [
      "Forecasting Hiring Needs",
      "Centralized Job Management",
      "Automated Interview Scheduling",
      "Feedback Analysis",
      "Recruitment Analytics",
    ],
  },
  {
    title: "Employee Lifecycle",
    description: "Comprehensive employee journey management from onboarding to exit.",
    features: [
      "Employee Records Management",
      "Streamlined Onboarding",
      "Promotions & Transfers",
      "Grievance Management",
      "Exit Feedback",
    ],
  },
  {
    title: "Shifts & Attendance",
    description: "Smart attendance tracking with geolocation and biometric integrations.",
    features: [
      "Flexible Shift Configuration",
      "Geolocation Check-In/Out",
      "Biometric Integrations",
      "Real-Time Payroll Sync",
      "Data-Driven Reporting",
    ],
  },
  {
    title: "Leave Management",
    description: "Dynamic leave policy configuration and efficient approval workflows.",
    features: [
      "Dynamic Policy Configuration",
      "Streamlined Requests & Approvals",
      "Integrated Leave Calendar",
      "Payroll Integration",
      "Actionable Insights",
    ],
  },
  {
    title: "Expense Management",
    description: "Optimize expense claims with multi-level approvals and accounting integration.",
    features: [
      "Easy Submission",
      "Multi-Level Approvals",
      "Seamless Accounting Integration",
      "Expense Analytics",
      "AI Optimization",
    ],
  },
  {
    title: "Performance Management",
    description: "Enhance productivity with structured appraisals and real-time feedback.",
    features: [
      "Custom Appraisal Templates",
      "360-Degree Feedback",
      "Insightful Reporting",
      "AI Recommendations",
    ],
  },
  {
    title: "Payroll Management",
    description: "Streamline salary processing with sophisticated structures and compliance.",
    features: [
      "Customizable Salary Structures",
      "Efficient Bulk Processing",
      "Multi-Currency Support",
      "Timesheet Integration",
      "Precision Algorithms",
    ],
  },
  {
    title: "Payroll Tax & Reports",
    description: "Automate tax compliance and generate actionable insights.",
    features: [
      "Configurable Tax Slabs",
      "Simplified Declarations",
      "Accurate Tax Computations",
      "Compliance Reporting",
      "AI Analytics",
    ],
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleJoinWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Joining waitlist with email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <header className="w-full border-b border-border/40 backdrop-blur-sm bg-background/80 fixed z-10">
        <div className="container mx-auto flex justify-between items-center py-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-300 text-transparent bg-clip-text [text-shadow:0_0_20px_rgba(139,92,246,0.2)]"
          >
            Unifyio
          </motion.h1>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm text-foreground/80 hover:text-foreground">Features</a>
            <a href="#modules" className="text-sm text-foreground/80 hover:text-foreground">Modules</a>
            <a href="#about" className="text-sm text-foreground/80 hover:text-foreground">About</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                  Join Waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join the Unifyio waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to access our all-in-one business management platform
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {submitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Thanks for joining!
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-sm"
          >
            <nav className="container mx-auto py-4 flex flex-col space-y-4">
              <a href="#features" className="text-sm text-foreground/80 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#modules" className="text-sm text-foreground/80 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>Modules</a>
              <a href="#about" className="text-sm text-foreground/80 hover:text-foreground" onClick={() => setMobileMenuOpen(false)}>About</a>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="default" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                    Join Waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join the Unifyio waitlist</DialogTitle>
                    <DialogDescription>
                      Be the first to access our all-in-one business management platform
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-4">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Button type="submit" className="w-full">
                      {submitted ? (
                        <>
                          <Check className="mr-2 h-4 w-4" /> Thanks for joining!
                        </>
                      ) : (
                        "Join Waitlist"
                      )}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-300 text-transparent bg-clip-text [text-shadow:0_0_30px_rgba(139,92,246,0.25)]"
          >
            All Your Business Tools,<br/> One Seamless Platform
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/80 mb-8"
          >
            Unifyio eliminates the need for multiple software tools by providing a unified, scalable business management platform.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join the Unifyio waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to access our all-in-one business management platform
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {submitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Thanks for joining!
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 md:px-6 bg-foreground/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Unifyio?</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Our comprehensive platform delivers everything your business needs to streamline operations and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Cost Efficiency</h3>
              <p className="text-foreground/70">
                Eliminate the need for multiple tools and software subscriptions with our all-in-one solution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Seamless Integration</h3>
              <p className="text-foreground/70">
                With one unified interface, teams can collaborate, track, and manage without switching between applications.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Scalability</h3>
              <p className="text-foreground/70">
                Built to grow with your organization, supporting high-demand operations for businesses of all sizes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-lg border border-border/40 bg-card/30 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-3">Future-Proof</h3>
              <p className="text-foreground/70">
                Our roadmap includes cutting-edge AI features to ensure Unifyio stays ahead of industry trends.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Modules</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Unifyio offers a complete suite of functionality to manage every aspect of your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border/40 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <CardHeader>
                    <CardTitle>{module.title}</CardTitle>
                    <CardDescription>{module.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="mr-2 h-4 w-4 text-green-500 shrink-0 mt-1" />
                          <span className="text-sm text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 px-4 md:px-6 bg-foreground/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Powerful Mobile Experience</h2>
              <p className="text-foreground/70 mb-6">
                Take your business on the go with our feature-rich mobile application. Access key HR functions, track attendance, manage leave requests, and stay updated in real-time.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <span>Geolocation-based attendance tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <span>Mobile leave management and approvals</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <span>Real-time expense submission and tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-green-500 shrink-0 mt-1" />
                  <span>Instant notifications and updates</span>
                </li>
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="w-64 h-[500px] rounded-3xl border-8 border-foreground/20 bg-background/50 shadow-2xl relative">
                <div className="absolute inset-2 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-cyan-900/30 rounded-2xl flex items-center justify-center">
                  <p className="text-center text-foreground/50 text-sm">
                    Mobile app preview<br/>coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="about" className="py-20 px-4 md:px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to transform your business operations?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-foreground/70 mb-10 text-lg"
          >
            Join our waitlist today and be among the first to experience the future of business management.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700">
                  Join Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Join the Unifyio waitlist</DialogTitle>
                  <DialogDescription>
                    Be the first to access our all-in-one business management platform
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleJoinWaitlist} className="flex flex-col gap-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full">
                    {submitted ? (
                      <>
                        <Check className="mr-2 h-4 w-4" /> Thanks for joining!
                      </>
                    ) : (
                      "Join Waitlist"
                    )}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-6 border-t border-border/40">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-xl font-bold bg-gradient-to-r from-violet-500 via-blue-400 to-cyan-300 text-transparent bg-clip-text [text-shadow:0_0_20px_rgba(139,92,246,0.2)]">
                Unifyio
              </p>
              <p className="text-sm text-foreground/60 mt-1">
                All Your Business Tools, One Seamless Platform
              </p>
            </div>
            <div className="flex gap-8">
              <a href="#features" className="text-sm text-foreground/70 hover:text-foreground">Features</a>
              <a href="#modules" className="text-sm text-foreground/70 hover:text-foreground">Modules</a>
              <a href="#about" className="text-sm text-foreground/70 hover:text-foreground">About</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/20 text-center text-sm text-foreground/60">
            © {new Date().getFullYear()} Unifyio. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
