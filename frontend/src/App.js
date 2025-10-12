import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home1 from './pages/homePage';
import Contact from './pages/contactPage';
import Gallery from './pages/galleryPage';
import About from './pages/aboutPage';
import EventPage from './pages/eventPage';
import LayoutWrapper from './pages/LayoutWrapper';
import NotFoundPage from './pages/NotFoundPage';

// Teams
import KalpaPage from './pages/teams/kalpa.page';
import ObservatoryPage from './pages/teams/observatory.page';
import NewsletterPage from './pages/teams/newsletter.page';
import DesignMediaPage  from './pages/teams/media.page';
import WebTechPage from './pages/teams/tech.page';
import CoreManagementPage from './pages/teams/management.page';
import ManagementPage from './pages/teams/management.page';
import KhagolQuizzingPage from './pages/teams/khagol.page';
import DiscussionPage from './pages/teams/discussion.page';


//blog
import BlogPage from './pages/Blog/blogPage';
import BlogDetailsPage from './pages/Blog/blogDetailsPage';
import AstroFactsPage from './pages/Blog/astroFacts';
import SpaceExplorationsPage from './pages/Blog/SpaceExplorationsPage';



//Launchpad
import LaunchpadPage from '../src/pages/launchpad/launchPadPage';
// App Component with Routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homepage without layout wrapper */}
        <Route path="/" element={<Home1 />} />

        {/* Teams pages (no background if you want) */}


        {/* Pages with global layout wrapper */}
        <Route element={<LayoutWrapper />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/teams/observatory" element={<ObservatoryPage />} />
          <Route path="/teams/kalpa" element={<KalpaPage />} />

        <Route path="/teams/newsletter" element={<NewsletterPage />} />
        <Route path="/teams/design-media" element={<DesignMediaPage />} />
        <Route path="/teams/web-tech" element={<WebTechPage />} />
        <Route path="/teams/core-management" element={<CoreManagementPage />} />
        <Route path="/teams/management" element={<ManagementPage />} />
        <Route path="/teams/khagol" element={<KhagolQuizzingPage />} />
        <Route path="/teams/discussion" element={<DiscussionPage />} />
        <Route path="*" element={<NotFoundPage />} />



        {/* Blog Pages */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailsPage />} />
        <Route path="/blog/facts" element={<AstroFactsPage />} />
        <Route path="/blog/space" element={<SpaceExplorationsPage />} />


        {/* {LaunchpadPage} */}
        <Route path="/launchpad" element={<LaunchpadPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
