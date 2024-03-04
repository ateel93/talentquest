function Footer() {
    return(
      <footer>
        <nav role="navigation">
          <a href="/help" className="px-1.5 hover:bg-gray-100 rounded-sm">
            Help Center
          </a>
          {/* <a href="/about" className="px-1.5 hover:bg-gray-100 rounded-sm">
            About
          </a> */}
          <a href="/contact" className="px-1.5 hover:bg-gray-100 rounded-sm">
            Contact
          </a>
        </nav>
        <h4>Copyright © 2024 TalentQuest.com. All rights reserved.</h4>
      </footer>
    );
  }
export default Footer;