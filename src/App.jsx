import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/shared/Theme';
import GlobalStyles from './styles/shared/GlobalStyles';

// Use error boundaries
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red', background: '#111', minHeight: '100vh' }}>
          <h1>Something went wrong</h1>
          <pre>{this.state.error && this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Create fallback components
const LoadingFallback = () => (
  <div style={{ padding: '20px', color: 'white', background: '#111', minHeight: '100vh' }}>
    <h2>Loading...</h2>
  </div>
);

// Use React.lazy for component imports
const Navbar = React.lazy(() => import('./components/Navbar'));
const Footer = React.lazy(() => import('./components/Footer'));
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Quote = React.lazy(() => import('./pages/Quote'));

function App() {
  console.log('App rendering');
  
  return (
    <ErrorBoundary>
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className="app">
            <Suspense fallback={<LoadingFallback />}>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Home />
                    </Suspense>
                  } />
                  <Route path="/about" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <About />
                    </Suspense>
                  } />
                  <Route path="/services" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Services />
                    </Suspense>
                  } />
                  <Route path="/contact" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Contact />
                    </Suspense>
                  } />
                  <Route path="/quote" element={
                    <Suspense fallback={<LoadingFallback />}>
                      <Quote />
                    </Suspense>
                  } />
                </Routes>
              </main>
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;