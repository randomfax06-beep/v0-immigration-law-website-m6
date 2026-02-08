'use client';

import Script from 'next/script';

/**
 * ChatWidget Component
 * 
 * Safely loads the CONVOCORE third-party chat widget.
 * Uses next/script with afterInteractive strategy for optimal performance.
 */
export default function ChatWidget() {
    return (
        <>
            {/* Required container for the CONVOCORE widget */}
            <div id="VG_OVERLAY_CONTAINER" style={{ width: 0, height: 0 }} />

            {/* Widget Configuration */}
            <Script id="convocore-config" strategy="afterInteractive">
                {`
          window.VG_CONFIG = {
            ID: "Qi2DKTePf6BCUQb7tWQP",
            region: "na",
            render: "bottom-right",
            stylesheets: ["https://vg-bunny-cdn.b-cdn.net/vg_live_build/styles.css"]
          }
        `}
            </Script>

            {/* Widget Script Bundle */}
            <Script
                src="https://vg-bunny-cdn.b-cdn.net/vg_live_build/vg_bundle.js"
                strategy="afterInteractive"
            />
        </>
    );
}
