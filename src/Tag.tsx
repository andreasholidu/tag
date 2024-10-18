import { useState } from 'react';

interface TagProps {
    tagText: string;
}

export default function Tag({
    tagText,
    }: TagProps) {



    return (
        <div>
            <div className="group/badge absolute left-3 top-3 z-1 max-w-[calc(100%-1.5rem)] rounded-full border border-black/10">
                <div className="relative truncate rounded-full px-3 py-1 backdrop-blur-[6px]" 
                    style={{ background: "linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.50) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.60) 0%, rgba(255, 255, 255, 0.50) 60%, rgba(255, 255, 255, 0.80) 100%)", boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.40), 0 0 0 1px rgba(0, 0, 0, 0.10)' }}>
                    <span className="text-sm font-semibold text-black-ultra">{tagText}</span>
                </div>
            </div>
        
        </div>
    );
}
