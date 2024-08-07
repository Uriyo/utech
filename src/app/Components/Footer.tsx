import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-400 py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-wrap justify-between mb-10">
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <Link href="/" className="text-white text-2xl font-bold">
              <Image src="/images/FooterLogo.png" alt="Uteach Logo" width={100} height={50} />
            </Link>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Product</h4>
            <ul className='text-[#E2E8F0]'>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/overview" className="hover:text-white">Overview</Link></li>
              <li><Link href="/browse" className="hover:text-white">Browse</Link></li>
              <li><Link href="/accessibility" className="hover:text-white">Accessibility <span className="bg-[#F3E8FF] text-black rounded-full px-2 py-1 text-xs ml-2">BETA</span></Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Solutions</h4>
            <ul className='text-[#E2E8F0]'>
              <li><Link href="/brainstorming" className="hover:text-white">Brainstorming</Link></li>
              <li><Link href="/ideation" className="hover:text-white">Ideation</Link></li>
              <li><Link href="/wireframing" className="hover:text-white">Wireframing</Link></li>
              <li><Link href="/research" className="hover:text-white">Research</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Resources</h4>
            <ul className='text-[#E2E8F0]'>
              <li><Link href="/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/tutorials" className="hover:text-white">Tutorials</Link></li>
              <li><Link href="/faqs" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Support</h4>
            <ul className='text-[#E2E8F0]'>
              <li><Link href="/contact-us" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/developers" className="hover:text-white">Developers</Link></li>
              <li><Link href="/documentation" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/integrations" className="hover:text-white">Integrations</Link></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/6 mb-6 lg:mb-0">
            <h4 className="text-white text-lg font-bold mb-4">Company</h4>
            <ul className='text-[#E2E8F0]'>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/press" className="hover:text-white">Press</Link></li>
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/request-demo" className="hover:text-white">Request Demo <span>&rarr;</span></Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm text-[#E2E8F0]">&copy; uteach @ 2023. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <div className='mt-2 lg:mt-3 flex lg:flex-row justify-between text-[#E2E8F0]'>
            <Link href="/terms" className="hover:text-white px-4">Terms</Link>
            <Link href="/privacy" className="hover:text-white px-4">Privacy</Link>
            <Link href="/contact" className="hidden lg:block hover:text-white px-4">Contact</Link>
            </div>
            <Link href="#" className="hover:text-white flex items-center">
              <Image src="/images/world.png" alt="Language" width={24} height={48} className="mr-2" />
              EN
            </Link>
            <Link href="#" className="hover:text-white flex items-center text-[#E2E8F0]">
            <Image src="/images/euro.png" alt="Info" width={24} height={48} className="mr-2" />
                EUR
            </Link>
            <Link href="#" className="hover:text-white flex items-center text-[#E2E8F0]">
              <Image src="/images/Link.png" alt="Info" width={24} height={48} className="mr-2" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
