'use client'

import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import IndustrySection from '../components/industries/IndustrySection'
import ContactForm from '../components/home/ContactForm'

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        {/* Hero Section with SVG Wave Background */}
        <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
          {/* SVG Wave Background */}
          <div className="absolute inset-0 overflow-hidden">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Wave 1 - Light Blue */}
              <path
                fill="rgba(147, 197, 253, 0.15)"
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              {/* Wave 2 - Purple */}
              <path
                fill="rgba(196, 181, 253, 0.1)"
                d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
              {/* Wave 3 - Lightest */}
              <path
                fill="rgba(191, 219, 254, 0.08)"
                d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,154.7C672,149,768,171,864,181.3C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>

          {/* Decorative Gradient Orbs */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                Ahana System Industry-Specific Solutions,{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Backed by Expertise
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
                Discover solutions designed to address the unique challenges and opportunities in your industry
              </p>
            </div>
          </div>
        </section>

        {/* Banking & Finance */}
        <IndustrySection
          id="banking"
          title="Banking & Finance"
          description="The BFSI sector is evolving rapidly, with opportunities to strengthen data integration across products and regions, improve accuracy and consistency in processes, and enhance system performance for faster policy and claims management. There is growing scope to streamline audits, compliance, and reconciliation while ensuring greater visibility into operations and security. At the same time, optimizing sales preparation and customer engagement remains essential for driving consistent conversions."
          image="/images/industries/banking.png"
          offerings={[
            {
              id: 'branch-operation',
              title: 'Branch Operation Digital Registry',
              description: 'Branch Operation Digital Registry- The solution automates and streamlines the branch operation digital registry process, ensuring accuracy, compliance, and efficiency. It intelligently excludes write-offs and securitized accounts while maintaining comprehensive records of all branch operations and transactions.',
              fullDescription: 'Branch Operation Digital Registry provides a comprehensive digital transformation solution for branch operations. The system automates record-keeping, ensures regulatory compliance, and provides real-time visibility into all branch activities. With advanced features like automated reconciliation, audit trails, and intelligent data management, it helps financial institutions maintain accurate and secure operational records while improving efficiency and reducing manual errors.'
            },
            {
              id: 'robotic-automation',
              title: 'Robotic Process Automation',
              description: 'Automate repetitive banking processes to improve efficiency and reduce operational costs while maintaining accuracy and compliance.',
              fullDescription: 'Our Robotic Process Automation solution transforms banking operations by automating routine tasks such as data entry, account reconciliation, report generation, and compliance checks. The system uses intelligent bots that work 24/7, processing transactions faster and more accurately than manual methods. This allows your staff to focus on high-value activities while reducing errors and operational costs.'
            },
            {
              id: 'npa-provisioning',
              title: 'NPA Provisioning & Restructuring',
              description: 'NPA Provisioning and Restructuring- The solution automates and streamlines the NPA (Non-Performing Asset) provisioning and restructuring process, ensuring accuracy, compliance, and efficiency.',
              fullDescription: 'NPA Provisioning & Restructuring solution provides end-to-end automation for managing non-performing assets. It intelligently handles the entire lifecycle from identification to resolution, ensuring compliance with regulatory requirements. The system provides real-time analytics, automated reporting, and intelligent decision support to help financial institutions manage their asset quality effectively while minimizing losses and maintaining regulatory compliance.'
            },
            {
              id: 'bulk-search',
              title: 'Bulk Search',
              description: 'Perform high-volume searches across multiple databases and systems simultaneously with advanced filtering and reporting capabilities.',
              fullDescription: 'Bulk Search solution enables financial institutions to perform complex searches across vast amounts of data quickly and efficiently. The system supports multiple search criteria, advanced filtering, and can process thousands of queries simultaneously. It provides detailed reports, export capabilities, and integration with existing systems, making it ideal for compliance checks, customer verification, and data analysis tasks.'
            },
            {
              id: 'loan-default',
              title: 'Loan Default Prediction App',
              description: 'Leverage AI and machine learning to predict loan defaults before they occur, enabling proactive risk management and better lending decisions.',
              fullDescription: 'Our Loan Default Prediction App uses advanced machine learning algorithms to analyze borrower behavior, financial patterns, and market conditions to predict the likelihood of loan defaults. The system provides early warning signals, risk scores, and actionable insights that help lenders make informed decisions, adjust lending strategies, and implement preventive measures to minimize default rates and protect their portfolio.'
            },
            {
              id: 'data-warehouse',
              title: 'Enterprise Data Warehouse Optimization',
              description: 'Optimize your data warehouse infrastructure for better performance, scalability, and cost-efficiency while ensuring data quality and accessibility.',
              fullDescription: 'Enterprise Data Warehouse Optimization solution transforms your data infrastructure into a high-performance, scalable system. We implement best practices for data modeling, indexing, partitioning, and query optimization. The solution includes automated data quality checks, performance monitoring, and intelligent caching strategies that significantly reduce query times and operational costs while improving data accessibility and reliability.'
            },
            {
              id: 'sales-buddy',
              title: 'Sales Buddy',
              description: 'Empower your sales team with an intelligent assistant that provides real-time insights, customer information, and sales support.',
              fullDescription: 'Sales Buddy is an AI-powered sales assistant that helps banking professionals close deals faster and more effectively. It provides instant access to customer information, product details, competitive analysis, and personalized recommendations. The system tracks sales activities, automates follow-ups, and provides predictive analytics to identify the best opportunities. With mobile access and real-time updates, your sales team can work more efficiently and deliver better customer experiences.'
            }
          ]}
        />

        {/* Insurance */}
        <IndustrySection
          id="insurance"
          title="Insurance"
          description="We offer a wide range of insurance solutions designed to protect what matters most. Our comprehensive coverage options include life insurance for financial security, health insurance for medical expenses, property insurance to safeguard your assets, and vehicle insurance for peace of mind on the road. With flexible plans and dedicated support, we ensure you and your loved ones are protected against life's uncertainties."
          image="/images/industries/insurance.png"
          offerings={[
            {
              id: 'claims-automation',
              title: 'Claims Processing Automation',
              description: 'Streamline claims processing with intelligent automation that reduces processing time, improves accuracy, and enhances customer satisfaction.',
              fullDescription: 'Claims Processing Automation revolutionizes the insurance claims workflow by automating document verification, damage assessment, fraud detection, and approval processes. The system uses AI and machine learning to analyze claims data, identify patterns, and make intelligent decisions. It integrates with existing systems, provides real-time status updates to customers, and significantly reduces the time from claim submission to settlement while maintaining high accuracy and compliance standards.'
            },
            {
              id: 'underwriting-ai',
              title: 'AI-Powered Underwriting',
              description: 'Enhance underwriting decisions with AI-driven risk assessment and automated policy recommendations for faster, more accurate results.',
              fullDescription: 'AI-Powered Underwriting transforms the insurance underwriting process by leveraging machine learning algorithms to assess risk more accurately and efficiently. The system analyzes vast amounts of data including medical records, financial information, and behavioral patterns to provide comprehensive risk profiles. It automates routine underwriting decisions, flags complex cases for human review, and provides intelligent recommendations that help underwriters make better decisions faster while maintaining consistent quality and compliance.'
            },
            {
              id: 'policy-management',
              title: 'Policy Management System',
              description: 'Comprehensive policy lifecycle management from issuance to renewal with automated workflows and customer self-service capabilities.',
              fullDescription: 'Policy Management System provides end-to-end management of insurance policies throughout their lifecycle. The solution automates policy issuance, modifications, renewals, and cancellations while ensuring compliance with regulatory requirements. It includes customer portals for self-service, automated premium calculations, billing integration, and comprehensive reporting. The system improves operational efficiency, reduces errors, and enhances customer experience with real-time policy information and seamless processing.'
            }
          ]}
        />

        {/* Manufacturing */}
        <IndustrySection
          id="manufacturing"
          title="Manufacturing"
          description="Manufacturing is rapidly evolving with opportunities to leverage data-driven insights for optimizing production processes, improving supply chain efficiency, and enhancing quality control. There is growing scope to implement predictive maintenance, reduce downtime, and streamline operations through intelligent automation. At the same time, ensuring real-time visibility across the production floor and maintaining compliance with industry standards remains essential for driving operational excellence."
          image="/images/industries/manufacturing.png"
          offerings={[
            {
              id: 'production-optimization',
              title: 'Production Line Optimization',
              description: 'Optimize manufacturing processes with real-time monitoring, predictive analytics, and intelligent automation for maximum efficiency.',
              fullDescription: 'Production Line Optimization solution uses IoT sensors, real-time data analytics, and AI to monitor and optimize every aspect of your manufacturing process. The system identifies bottlenecks, predicts equipment failures, optimizes resource allocation, and provides actionable insights to improve throughput and reduce waste. With comprehensive dashboards and automated alerts, managers can make data-driven decisions that enhance productivity and profitability.'
            },
            {
              id: 'quality-control',
              title: 'AI-Based Quality Control',
              description: 'Implement computer vision and AI to detect defects, ensure quality standards, and reduce waste in manufacturing processes.',
              fullDescription: 'AI-Based Quality Control revolutionizes manufacturing quality assurance by using computer vision and machine learning to inspect products with superhuman accuracy and speed. The system can detect even the smallest defects, classify quality issues, and provide real-time feedback to production lines. It learns from historical data to improve detection accuracy over time, reduces false positives, and provides comprehensive quality reports that help identify root causes and implement corrective actions.'
            },
            {
              id: 'supply-chain',
              title: 'Supply Chain Intelligence',
              description: 'Gain end-to-end visibility and control over your supply chain with predictive analytics and automated optimization.',
              fullDescription: 'Supply Chain Intelligence provides comprehensive visibility and control over your entire supply chain ecosystem. The solution uses advanced analytics to forecast demand, optimize inventory levels, identify potential disruptions, and recommend optimal sourcing strategies. It integrates with suppliers, logistics providers, and internal systems to provide real-time tracking, automated alerts, and intelligent recommendations that reduce costs, improve delivery times, and enhance supply chain resilience.'
            }
          ]}
        />

        {/* Logistics */}
        <IndustrySection
          id="logistics"
          title="Logistics"
          description="Logistics is a rapidly evolving sector with opportunities to enhance route optimization, improve delivery accuracy, and strengthen real-time tracking capabilities. There is growing scope to streamline warehouse operations, reduce transportation costs, and improve customer satisfaction through better visibility and communication. At the same time, ensuring compliance with regulations and maintaining operational efficiency remains essential for driving business growth."
          image="/images/industries/logistics.png"
          offerings={[
            {
              id: 'route-optimization',
              title: 'Smart Route Optimization',
              description: 'Optimize delivery routes in real-time using AI and traffic data to reduce fuel costs and improve delivery times.',
              fullDescription: 'Smart Route Optimization uses advanced algorithms and real-time data to calculate the most efficient delivery routes. The system considers factors like traffic conditions, delivery windows, vehicle capacity, driver schedules, and customer priorities to generate optimal routes that minimize costs and maximize efficiency. It adapts dynamically to changing conditions, provides turn-by-turn navigation, and offers comprehensive analytics to continuously improve logistics operations.'
            },
            {
              id: 'fleet-management',
              title: 'Fleet Management System',
              description: 'Comprehensive fleet tracking, maintenance scheduling, and driver management for optimal fleet performance.',
              fullDescription: 'Fleet Management System provides complete visibility and control over your vehicle fleet. The solution includes GPS tracking, fuel monitoring, maintenance scheduling, driver behavior analysis, and compliance management. It helps reduce operational costs through predictive maintenance, optimize vehicle utilization, improve driver safety, and ensure regulatory compliance. With mobile apps and real-time alerts, fleet managers can respond quickly to issues and make data-driven decisions.'
            },
            {
              id: 'warehouse-automation',
              title: 'Warehouse Automation',
              description: 'Automate warehouse operations with intelligent systems for inventory management, picking, packing, and shipping.',
              fullDescription: 'Warehouse Automation solution transforms warehouse operations through intelligent automation and robotics. The system optimizes inventory placement, automates picking and packing processes, manages order fulfillment, and integrates with shipping carriers. It uses AI to predict demand, optimize storage layouts, and reduce order processing time. With real-time inventory tracking, automated replenishment, and comprehensive analytics, the solution improves accuracy, reduces labor costs, and enhances customer satisfaction.'
            }
          ]}
        />

        {/* Automotive */}
        <IndustrySection
          id="automotive"
          title="Automotive"
          description="The automotive industry is undergoing massive transformation with opportunities to leverage connected vehicle data, enhance customer experiences, and optimize manufacturing processes. There is growing scope to implement predictive maintenance, improve dealer operations, and streamline supply chain management. At the same time, ensuring quality standards and adapting to electric and autonomous vehicle technologies remains essential for staying competitive."
          image="/images/industries/automotive.png"
          offerings={[
            {
              id: 'connected-vehicles',
              title: 'Connected Vehicle Platform',
              description: 'Enable connected vehicle services with real-time data collection, remote diagnostics, and over-the-air updates.',
              fullDescription: 'Connected Vehicle Platform provides a comprehensive solution for managing connected vehicle services. The system collects and analyzes vehicle data in real-time, enables remote diagnostics and troubleshooting, supports over-the-air software updates, and provides predictive maintenance alerts. It enhances customer experience through mobile apps, improves vehicle performance through data-driven insights, and creates new revenue opportunities through connected services and subscription models.'
            },
            {
              id: 'dealer-management',
              title: 'Dealer Management System',
              description: 'Comprehensive dealer operations management including inventory, sales, service, and customer relationship management.',
              fullDescription: 'Dealer Management System streamlines all aspects of automotive dealership operations. The solution manages vehicle inventory, sales processes, financing, service scheduling, parts management, and customer relationships. It provides real-time visibility into operations, automates routine tasks, integrates with manufacturer systems, and offers comprehensive analytics. With mobile access and customer portals, the system improves efficiency, enhances customer satisfaction, and drives profitability.'
            },
            {
              id: 'predictive-maintenance',
              title: 'Predictive Maintenance Analytics',
              description: 'Use AI and vehicle data to predict maintenance needs before failures occur, improving reliability and customer satisfaction.',
              fullDescription: 'Predictive Maintenance Analytics leverages vehicle sensor data, historical maintenance records, and machine learning to predict when components are likely to fail. The system provides early warnings to vehicle owners and service centers, recommends optimal maintenance schedules, and helps prevent unexpected breakdowns. It improves vehicle reliability, reduces maintenance costs, enhances customer satisfaction, and creates opportunities for proactive service engagement.'
            }
          ]}
        />

        {/* Contact Form */}
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
