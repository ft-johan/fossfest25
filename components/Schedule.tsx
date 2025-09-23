"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ScheduleEvent {
    time: string;
    title: string;
    duration?: string;
    location?: string;
    speaker?: string;
    speakers?: string[];
    type?: 'workshop' | 'talk' | 'break' | 'registration';
}

interface DaySchedule {
    day: string;
    date: string;
    events: ScheduleEvent[];
}

const scheduleData: DaySchedule[] = [
    {
        day: "Day 1",
        date: "October 11, 2025",
        events: [
            {
                time: "08:30 AM",
                title: "Registration Opens",
                type: "registration"
            },
            {
                time: "10:00 AM",
                title: "Inaugural Session & Welcome Address",
                type: "break"
            },
            {
                time: "10:30 AM",
                title: "Talk Sessions#1",
                duration: "60 Min",
                location: "Workshop Room 1",
                speaker: "TBD",
                type: "talk"
            },
            {
                time: "11:30 AM",
                title: "Tea Break",
                duration: "15 Min",
                location: "EC Building",
                type: "break"
            },
            {
                time: "11:45 PM",
                title: "Talk Sessions#2",
                duration: "60 Min",
                location: "Workshop Room 1",
                speaker: "TBD",
                type: "talk"
            },
            {
                time: "12:45 PM",
                title: "Lunch Break",
                duration: "15 Min",
                location: "EC Building",
                type: "break"
            },
            {
                time: "1:30 PM",
                title: "Workshop Sessions#1",
                duration: "90 Min",
                location: "Workshop Room 2",
                speaker: "TBD",
                type: "workshop"
            },
            {
                time: "03:00 PM",
                title: "Open Source HUNT",
                duration: "60 Min",
                location: "College of Engineering Karunagapally",

                type: "workshop"
            },
            {
                time: "04:00 PM",
                title: "Tea Break",
                duration: "15 Min",
                location: "EC Building",
                type: "break"
            },
            {
                time: "04:15 PM",
                title: "Open source music jam session",
                duration: "45 Min",
                location: "EC Building",
                type: "break"
            },
        ]
    },
    {
        day: "Day 2",
        date: "December 3, 2025",
        events: [
            {
                time: "09:00 AM",
                title: "Opening Ceremony",
                type: "talk"
            },
            {
                time: "10:00 AM",
                title: "Keynote: The Future of Open Source",
                type: "talk"
            },
            {
                time: "11:00 AM",
                title: "Coffee Break",
                type: "break"
            }
        ]
    }   
];

const getEventColor = (type?: string) => {
    switch (type) {
        case 'workshop':
            return 'bg-pink-500';
        case 'talk':
            return 'bg-blue-500';
        case 'break':
            return 'bg-green-500';
        case 'registration':
            return 'bg-purple-500';
        default:
            return 'bg-gray-500';
    }
};

const getSpeakerInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
};

export default function Schedule() {
    const [currentDay, setCurrentDay] = useState(0);

    const nextDay = () => {
        setCurrentDay((prev) => (prev + 1) % scheduleData.length);
    };

    const prevDay = () => {
        setCurrentDay((prev) => (prev - 1 + scheduleData.length) % scheduleData.length);
    };

    const currentSchedule = scheduleData[currentDay];

    return (
        <section id="schedule" className="w-full py-20 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold font-jfont text-jblue mb-4">
                        Schedule
                    </h2>
                </div>

                {/* Day Navigation */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                        {/* Previous Day Button */}
                        <button
                            onClick={prevDay}
                            className="p-3 text-gray-400 hover:text-jblue hover:bg-gray-50 transition-all duration-200 border-r border-gray-100"
                            aria-label="Previous day"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Day Tabs */}
                        <div className="flex">
                            {scheduleData.map((day, index) => (
                                <div
                                    key={index}
                                    className={`px-6 py-3 cursor-pointer transition-all duration-200 ${index === currentDay
                                            ? 'bg-jblue text-white font-medium'
                                            : 'bg-white text-gray-500 hover:text-jblue hover:bg-gray-50'
                                        } ${index < scheduleData.length - 1 ? 'border-r border-gray-100' : ''}`}
                                    onClick={() => setCurrentDay(index)}
                                >
                                    <div className="text-sm font-semibold">{day.day}</div>
                                    <div className="text-xs opacity-80">{day.date}</div>
                                </div>
                            ))}
                        </div>

                        {/* Next Day Button */}
                        <button
                            onClick={nextDay}
                            className="p-3 text-gray-400 hover:text-jblue hover:bg-gray-50 transition-all duration-200 border-l border-gray-100"
                            aria-label="Next day"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Schedule Content */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">
                            {currentSchedule.day} - {currentSchedule.date}
                        </h3>

                        <div className="space-y-6">
                            {currentSchedule.events.map((event, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col md:flex-row md:items-start gap-4 p-4 border-l-4 border-gray-200 hover:border-joranage hover:bg-gray-50 rounded-r-lg transition-all"
                                >
                                    {/* Time */}
                                    <div className="flex-shrink-0">
                                        <div className="text-lg font-bold text-gray-900">
                                            {event.time}
                                        </div>
                                        {event.duration && (
                                            <div className="text-sm text-gray-500">
                                                ({event.duration})
                                            </div>
                                        )}
                                    </div>

                                    {/* Event Details */}
                                    <div className="flex-1">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                            {event.title}
                                        </h4>

                                        {event.location && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                                                <span className="font-medium">📍 {event.location}</span>
                                            </div>
                                        )}

                                        {(event.speaker || event.speakers) && (
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="font-medium">👤</span>
                                                <span>
                                                    {event.speaker || event.speakers?.join(', ')}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Speaker Avatars */}
                                    {(event.speaker || event.speakers) && (
                                        <div className="flex items-center gap-2">
                                            {event.speaker && (
                                                <div className="w-12 h-12 bg-joranage text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                    {getSpeakerInitials(event.speaker)}
                                                </div>
                                            )}
                                            {event.speakers?.map((speaker, speakerIndex) => (
                                                <div
                                                    key={speakerIndex}
                                                    className="w-12 h-12 bg-joranage text-white rounded-full flex items-center justify-center text-sm font-bold"
                                                >
                                                    {getSpeakerInitials(speaker)}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Dots */}
                <div className="flex justify-center mt-6 md:hidden">
                    <div className="flex gap-3">
                        {scheduleData.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentDay ? 'bg-jblue scale-125' : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                onClick={() => setCurrentDay(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
