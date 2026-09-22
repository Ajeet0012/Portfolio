import { useState } from "react";
import ActivityBar from "@/components/ActivityBar";
import Sidebar from "@/components/Sidebar";
import EditorTabs from "@/components/EditorTabs";
import StatusBar from "@/components/StatusBar";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState("hero");
  const [openTabs, setOpenTabs] = useState<string[]>(["hero"]);
  const [activeActivityBar, setActiveActivityBar] = useState("explorer");

  const handleTabClick = (tabId: string) => {
    if (!openTabs.includes(tabId)) {
      setOpenTabs([...openTabs, tabId]);
    }
    setActiveTab(tabId);
  };

  const handleCloseTab = (tabId: string) => {
    const newTabs = openTabs.filter(t => t !== tabId);
    setOpenTabs(newTabs);
    if (activeTab === tabId) {
      setActiveTab(newTabs.length > 0 ? newTabs[newTabs.length - 1] : "");
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "hero": return <Hero />;
      case "about": return <About />;
      case "skills": return <Skills />;
      case "projects": return <Projects />;
      case "education": return <Education />;
      case "certificates": return <Certificates />;
      case "contact": return <Contact />;
      default: return null;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#000000] text-foreground overflow-hidden">
      {/* Top Main Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left Activity Bar */}
        <ActivityBar activeActivityBar={activeActivityBar} setActiveActivityBar={setActiveActivityBar} />
        
        {/* Left Sidebar (Explorer) */}
        <Sidebar activeTab={activeTab} setActiveTab={handleTabClick} activeActivityBar={activeActivityBar} />
        
        {/* Right Editor Area */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <EditorTabs 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            openTabs={openTabs} 
            onCloseTab={handleCloseTab} 
          />
          
          {/* Scrollable Content Pane */}
          <div className="flex-1 overflow-y-auto">
            {renderContent()}
          </div>
        </div>
      </div>
      
      {/* Bottom Status Bar */}
      <StatusBar />
    </div>
  );
};

export default Index;
