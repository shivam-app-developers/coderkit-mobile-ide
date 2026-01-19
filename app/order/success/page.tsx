'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import coursesMetadata from '@/codelab_docs/courses_metadata.json';

interface Course {
    id: string;
    title: string;
    track: string;
    icon: string;
}

function OrderSuccessContent() {
    const searchParams = useSearchParams();
    const courseId = searchParams.get('course');
    const orderId = searchParams.get('orderId') || `ORD-${Date.now()}`;

    const course = (coursesMetadata as Course[]).find(c => c.id === courseId);

    return (
        <main className="flex-grow flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                {/* Success Icon */}
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fa-solid fa-check text-4xl text-green-600"></i>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
                <p className="text-gray-600 mb-8">Thank you for your purchase</p>

                {/* Order Details */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-left mb-8">
                    <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
                        <span className="text-4xl">{course?.icon || '📚'}</span>
                        <div>
                            <p className="font-medium text-gray-900">{course?.title || 'Course'}</p>
                            <p className="text-sm text-gray-500">{course?.track}</p>
                        </div>
                    </div>

                    <div className="pt-4 space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-gray-500">Order ID</span>
                            <span className="font-mono text-gray-900">{orderId}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-500">Status</span>
                            <span className="text-green-600 font-medium">Completed</span>
                        </div>
                    </div>
                </div>

                {/* Next Steps */}
                <div className="bg-blue-50 rounded-xl p-4 mb-8">
                    <p className="text-sm text-blue-800">
                        <i className="fa-solid fa-circle-info mr-2"></i>
                        Your course is now available in the CoderKit mobile app. Download the app to start learning!
                    </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                        href="/account"
                        className="flex-1 px-6 py-3 gradient-bg text-white rounded-xl font-medium hover:opacity-90 transition text-center"
                    >
                        Go to My Courses
                    </Link>
                    <Link
                        href="/pricing"
                        className="flex-1 px-6 py-3 border border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition text-center"
                    >
                        Browse More Courses
                    </Link>
                </div>

                {/* Download App */}
                <div className="mt-8 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">Get the mobile app</p>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800"
                    >
                        <i className="fa-brands fa-google-play"></i>
                        Download on Google Play
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default function OrderSuccessPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar />
            <Suspense fallback={
                <main className="flex-grow flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary"></div>
                </main>
            }>
                <OrderSuccessContent />
            </Suspense>
            <Footer />
        </div>
    );
}
