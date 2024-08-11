// QueryParamRouter.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Resume from './components/Resume/ResumeNew';

const QueryParamRouter = () => {
  const { hash } = useLocation();

  const renderComponent = () => {
    switch (hash) {
      case '#projects':
        return <Projects />;
      case '#about':
        return <About />;
      case '#resume':
        return <Resume />;
      case '#home':
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default QueryParamRouter;
