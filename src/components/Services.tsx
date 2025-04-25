import { Code, Figma, Server } from 'lucide-react'
import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <section className="py-24">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto text-white">
          <h2 className="heading-lg">Our Services</h2>
          <p className="mt-4 text-lg">
            End-to-end digital solutions for businesses of all sizes
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <ServiceCard 
            icon={Code} 
            heading={'Web Development'} 
            description={`Custom web applications built with modern frameworks and technologies.
            From simple websites to complex web platforms.`} 
            workList={['React & Next.js', 'Progressive Web Apps', 'E-commerce Solutions']} 
          />

          {/* Service Card 2 */}
          <ServiceCard 
            icon={Figma} 
            heading={'UI/UX Design'}
            description={`User-centered design solutions that enhance user experience and drive engagement.`}
            workList={['User Research', 'Interactive Prototypes', 'Design Systems']}
          />
          
          {/* Service Card 3 */}
          <ServiceCard
            icon={Server}
            heading={'Mobile Development'}
            description={`Native and cross-platform mobile applications for iOS and Android.`}
            workList={['React Native', 'Native iOS & Android', 'App Store Optimization']}
          />
          
        </div>
      </div>
    </section>
  )
}

export default Services