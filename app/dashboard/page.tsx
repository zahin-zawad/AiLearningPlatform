import React from 'react';
import Header from './components/Header';
import DashboardStats from './components/DashboardStats';
import RecentlyAccessedCourses from './components/RecentlyAccessedCourses';
import UpcomingEvents from './components/UpcomingEvents';
import Timeline from './components/Timeline';
import Calendar from './components/Calendar';
import OnlineUsers from './components/OnlineUsers';
import Badges from './components/Badges';
import PrivateFiles from './components/PrivateFiles';
import Footer from './components/Footer';
import FloatingButtonsWithChat from '../components/FloatingButtonsWithChat';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <DashboardStats />
        <RecentlyAccessedCourses />
        <UpcomingEvents />
        <Timeline />
        <Calendar />
        <OnlineUsers />
        <Badges />
        <PrivateFiles />
        {/* Floating Buttons with Chat */}
      <FloatingButtonsWithChat />
      </main>
      <Footer />
    </div>
  );
}

export default App;