import React from 'react'
import "./service.css"

export default function Service() {
    return (
        <>
            <div className="services" id="services">
                <h2 className="services-title">OUR SERVICES</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">📸</div>
                        <h3>Wedding Photography</h3>
                        <p>Complete wedding day coverage with premium editing and delivery</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">👤</div>
                        <h3>Portrait Sessions</h3>
                        <p>Professional headshots, family portraits, and personal branding photos</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🎉</div>
                        <h3>Event Photography</h3>
                        <p>Corporate events, parties, and special occasions captured beautifully</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">👨‍👩‍👧‍👦</div>
                        <h3>Family Portraits</h3>
                        <p>Photographers also offer family portrait sessions, often with options for different locations and styles.
                        </p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">⭐</div>
                        <h3>Commercial Photography</h3>
                        <p>Product photography, brand imagery, and marketing content</p>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🎨</div>
                        <h3>Digital Editing</h3>
                        <p>This studio is well-equipped and passionate about capturing quality photos. </p>
                    </div>
                </div>
            </div>
        </>
    )
}
