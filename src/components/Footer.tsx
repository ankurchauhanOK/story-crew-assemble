
const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg gradient-violet flex items-center justify-center">
                <span className="text-white font-bold text-sm">SC</span>
              </div>
              <span className="font-bold text-xl">StoryCrew</span>
            </div>
            <p className="text-muted-foreground text-sm">
              A creator's platform to find your perfect team — no money, just magic.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Explore Projects
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Find Creators
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Post Project
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Smart Match
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Discord
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Guidelines
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Success Stories
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Creator Spotlight
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                FAQs
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            🛡️ Made with ❤️ for creators. Not for sale.
          </p>
          <p className="text-sm text-muted-foreground mt-4 md:mt-0">
            © 2024 StoryCrew. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
