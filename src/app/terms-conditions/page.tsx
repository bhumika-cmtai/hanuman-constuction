"use client"
import { FileText } from 'lucide-react';

export default function TermsAndConditionsPage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <FileText className="h-16 w-16 text-orange-600 mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using our website.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last Updated: October 30, 2025</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-800">1. Agreement to Terms</h2>
            <p>
              Welcome to the Hanuman Constructions website. By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">2. Use of the Website</h2>
            <p>
              This website is intended to provide information about our construction services. You agree to use this site for lawful purposes only. You are prohibited from using the site in any way that could damage, disable, overburden, or impair the site or interfere with any other party&apos;s use and enjoyment of the site.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">3. Intellectual Property</h2>
            <p>
              All content included on this site, such as text, graphics, logos, images, and software, is the property of Hanuman Constructions or its content suppliers and is protected by Indian and international copyright laws. Unauthorized use, reproduction, or distribution of any material from this site is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">4. Information and Quotes</h2>
            <p>
              The information provided on this website regarding our services is for general informational purposes only. It does not constitute a formal offer. Any quotes or estimates provided through our online forms are based on the information you provide and are subject to change after a detailed assessment. A formal contract will be provided for all official engagements.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">5. Limitation of Liability</h2>
            <p>
              This website and its content are provided &quot;as is.&quot; Hanuman Constructions makes no warranties, expressed or implied, and hereby disclaims all warranties. In no event shall Hanuman Constructions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800">6. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Hanuman Constructions, its officers, directors, employees, and agents from and against all losses, expenses, damages, and costs, including reasonable attorneys&apos; fees, resulting from any violation of these terms and conditions by you.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts of Raipur, Chhattisgarh.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800">8. Changes to These Terms</h2>
            <p>
              We reserve the right to modify these terms and conditions at any time. We will post the revised terms on the website and update the &quot;Last Updated&quot; date. Your continued use of the site after any such changes constitutes your acceptance of the new terms.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800">9. Contact Us</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
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