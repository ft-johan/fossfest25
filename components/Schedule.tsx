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
                time: "9:30 AM",
                title: "Inaugural Session & Welcome Address",
                type: "break"
            },
            {
                time: "10:15 AM",
                title: "Talk Sessions 1: How FOSS Tools and Communities Impacted my Life",
                duration: "10 Min",
                location: "ROOM 1",
                speaker: "Varsha Shaheen",
                type: "talk"
            },
              {
                time: "10:55 AM",
                title: "Talk Sessions 2: Career transformation with AI oriented digital marketing",
                duration: "60 Min",
                location: "ROOM 1",
                speaker: "Akshay Krishnan U",
                type: "talk"
            },
            {
                time: "11:35 AM",
                title: "Talk Sessions 3: Engineering For Social Impact",
                duration: "60 Min",
                location: "ROOM 1",
                speaker: "Abhiram NJ",
                type: "talk"
            },
            {
                time: "11:55 AM",
                title: "Networking Break",
                duration: "15 Min",
                location: "EC Building",
                type: "break"
            },
            {
                time: "12:10 PM",
                title: "Talk Sessions 2: Engineering  better insights with Grafana Stack",
                duration: "60 Min",
                location: "ROOM 1",
                speaker: "Iqbal",
                type: "talk"
            },
            {
                time: "01:00 PM",
                title: "Lunch Break",
                duration: "60 Min",
                location: "EC Building",
                type: "break"
            },
            
            {
                time: "2:00 PM",
                title: "Zero to hero : Your First step in Javascript",
                duration: "90 Min",
                location: "Room 1",
                speaker: "Jithu Girish",
                type: "workshop"
            },
                   {
                time: "2:00 PM",
                title: "Game ON!: Build your first 2D game using Godot Engine",
                duration: "90 Min",
                location: "Room 2",
                speaker: "Mohammed Fahad",
                type: "workshop"
            },
            
            {
                time: "03:30 PM",
                title: "Networking session + Treasure Hunt ",
                duration: "15 Min",
                location: "Network Space",
                type: "break"
            },
            {
                time: "05:00 PM",
                title: "Ending Note & Music ",
                duration: "45 Min",
                location: "EC Building",
                type: "break"
            },
        ]
    },
    {
        day: "Day 2",
        date: "October  12, 2025",
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
            return 'bg-pink-500 text-white';
        case 'talk':
            return 'bg-blue-500 text-white';
        case 'break':
            return 'bg-green-500 text-white';
        case 'registration':
            return 'bg-purple-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
};

const getEventTypeLabel = (type?: string) => {
    switch (type) {
        case 'workshop':
            return 'Workshop';
        case 'talk':
            return 'Talk';
        case 'break':
            return 'Break';
        case 'registration':
            return 'Registration';
        default:
            return 'Event';
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
                                        {/* Title and Badge */}
                                        <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                                           {event.type && (
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getEventColor(event.type)} flex-shrink-0`}>
                                                    {getEventTypeLabel(event.type)}
                                                </span>
                                            )}
                                            <h4 className="text-lg font-semibold text-gray-900">
                                                {event.title}
                                            </h4>
                                            
                                        </div>

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
