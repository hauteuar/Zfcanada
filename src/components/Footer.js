function Footer() {
    return (
        <footer style={{ background: '#333', color: '#fff', textAlign: 'center', padding: '20px', fontSize: '14px' }}>
            © {new Date().getFullYear()} ZF Canada. All rights reserved.
        </footer>
    );
}

export default Footer;
