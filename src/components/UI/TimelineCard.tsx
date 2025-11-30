
import { useRef } from 'react'
import { GraduationCapIcon, BriefcaseIcon, CertificateIcon } from "@phosphor-icons/react";

interface TimelineItem {
    year: string;
    title: string;
    organization: string;
    period: string;
    description: string;
    icon: typeof GraduationCapIcon | typeof BriefcaseIcon | typeof CertificateIcon;
    type: 'education' | 'experience';
}

interface TimelineCardProps {
    items: TimelineItem[];
}

const TimelineCard = ({ items }: TimelineCardProps) => {

    const itemRefs = useRef(new Map<number, HTMLDivElement>());

    return (
        <>
            {items.map((item, index) => (
                <div 
                    key={index}
                    className="absolute top-[calc(50%-150px)] left-[calc(50%-200px)] w-[400px] h-[400px] bg-black/80 backdrop-blur-md border border-white/20 p-6 rounded-xl transition-all duration-500 hover:scale-105 hover:z-50"
                    style={{ 
                        transform: `rotate(${index * 10}deg)`,
                        zIndex: items.length - index 
                    }}
                    ref={(el) => {
                        if (el) itemRefs.current.set(index, el);
                        else itemRefs.current.delete(index);
                    }}
                >
                    <div className="flex flex-col gap-4 h-full">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-white/10 text-white">
                                <item.icon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                                <p className="text-sm text-purple-400">{item.organization}</p>
                            </div>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto custom-scrollbar">
                            <p className="text-sm text-gray-300 mb-2">{item.period}</p>
                            <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TimelineCard;
