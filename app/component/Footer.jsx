import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
        <h1>Follow Us</h1>
      <div className="footer-content">
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <Image src="/img/icons8-x-50.png" alt="Twitter" width={24} height={24} className="invert-img" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <Image src="/img/download-1.png" alt="Instagram" width={24} height={24} className="invert-img" />
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Image src="/img/download.png" alt="Facebook" width={24} height={24} className="invert-img" />
          </a>
        </div>
                <p>© 2025 Pizza Heaven. All rights reserved.</p>
      </div>
    </footer>
  );
}
