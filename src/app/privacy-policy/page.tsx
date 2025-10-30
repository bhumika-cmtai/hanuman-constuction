"use client"
import { Shield } from 'lucide-react'; // 'FileText' has been removed from this line.

export default function PrivacyPolicyPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we handle your personal information.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: October 30, 2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            {/* FIX: All quotes " are replaced with &quot; */}
            <p className='text-black mt-5 mb-8'>
              Hanuman Constructions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting the privacy of our clients and website visitors. This Privacy Policy outlines the types of personal information we collect through our website, how it is used, and the steps we take to ensure its protection.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">1. Information We Collect</h2>
            <p className='text-black mt-5 mb-8'>We may collect the following types of information:</p>
            <ul>
              <li className='text-black mt-5 mb-8'>
                <strong>Personal Information:</strong> When you fill out a contact or inquiry form, we collect information you provide, such as your name, email address, phone number, company name, and details about your project.
              </li>
              <li className='text-black mt-5 mb-8'>
                <strong>Usage Data:</strong> We may automatically collect information about how you interact with our website. This can include your IP address, browser type, pages viewed, and the duration of your visit. This data is typically anonymized and used for analytics.
              </li>
              {/* FIX: All quotes " and apostrophes ' are replaced with &quot; and &apos; */}
              <li className='text-black mt-5 mb-8'>
                <strong>Cookies:</strong> Our website may use &quot;cookies&quot; to enhance user experience. Cookies are small files placed on your device that help us analyze web traffic and improve our site&apos;s functionality. You can choose to disable cookies through your browser settings.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            <p className='text-black mt-5'>The information we collect is used for the following purposes:</p>
            <ul>
              <li className='text-black mt-5'>To respond to your inquiries, provide quotes, and communicate with you about our services.</li>
              <li className='text-black mt-5'>To understand client needs and improve our website, services, and business operations.</li>
              <li className='text-black mt-5'>To schedule site visits and manage project-related communications.</li>
              <li className='text-black mt-5'>For internal record-keeping and administrative purposes.</li>
              <li className='text-black mt-5 mb-8'>To comply with legal obligations and regulations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800">3. Information Sharing and Disclosure</h2>
            <p className='text-black mt-5 mb-8'>
              We do not sell, trade, or rent your personal identification information to others. We may share your information with trusted third-party service providers who assist us in operating our website or conducting our business (e.g., website hosting, analytics), so long as those parties agree to keep this information confidential. We may also disclose information when required by law.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">4. Data Security</h2>
            <p className='text-black mt-5 mb-8'>
              We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information stored on our site. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee its absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800">5. Third-Party Websites</h2>
            <p className='text-black mt-5 mb-8'>
              Our website may contain links to other websites (e.g., Google Maps). We are not responsible for the privacy practices or the content of these third-party sites. We encourage you to read their privacy policies.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">6. Changes to This Privacy Policy</h2>
            <p className='text-black mt-5 mb-8'>
              Hanuman Constructions has the discretion to update this privacy policy at any time. When we do, we will revise the &quot;Last Updated&quot; date at the top of this page. We encourage you to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">7. Contact Us</h2>
            <p className='text-black mt-5 mb-8'>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              <br />
              <strong>Hanuman Constructions</strong>
              <br />
              Near Ambuja Mall, Vidhansabha Road, Saddu, Raipur (C.G.)
              <br />
              Email: constructionhanuman99@gmail.com
              <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}