/**
 * EmailJS Configuration and Setup Guide
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://www.emailjs.com/ and create a free account
 * 2. Create a new service (Gmail recommended)
 * 3. Create an email template
 * 4. Get your Public Key from Account settings
 * 5. Replace the values below with your actual EmailJS credentials
 */

// EmailJS Configuration
window.EMAILJS_CONFIG = {
    SERVICE_ID: 'service_bl6564d', // Replace with your EmailJS service ID
    TEMPLATE_ID: 'template_p0rr47j', // Replace with your EmailJS template ID
    PUBLIC_KEY: 'NRnkx8iarU3JfBheF' // Replace with your EmailJS public key
};

/**
 * EmailJS Template Variables (use these in your EmailJS template):
 * 
 * {{to_email}} - Recipient email (fetruzie2@gmail.com)
 * {{from_name}} - Sender name
 * {{from_email}} - Sender email
 * {{message}} - Message content
 * {{timestamp}} - When the message was sent
 * {{fingerprint}} - Browser fingerprint (for tracking)
 * 
 * Example EmailJS Template:
 * 
 * Subject: New Contact Form Message from {{from_name}}
 * 
 * Body:
 * You have received a new message from your website contact form.
 * 
 * Name: {{from_name}}
 * Email: {{from_email}}
 * Time: {{timestamp}}
 * Tracking ID: {{fingerprint}}
 * 
 * Message:
 * {{message}}
 * 
 * ---
 * This message was sent from your website contact form with anti-spam protection.
 */

// Load EmailJS library
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
        if (window.EMAILJS_CONFIG.PUBLIC_KEY !== 'xxxxxxxxxxxxxxx') {
            emailjs.init(window.EMAILJS_CONFIG.PUBLIC_KEY);
        } else {
            console.warn('Please configure EmailJS credentials in emailjs-config.js');
        }
    };
    script.onerror = function() {
        console.error('Failed to load EmailJS library');
    };
    document.head.appendChild(script);
})();