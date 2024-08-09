// useHashObserver.js
import { useEffect, useState } from 'react';

const useHashObserver = (ids: string[]) => {
  const [activeHash, setActiveHash] = useState<undefined | string>(undefined);

  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Set up a timeout to wait for 2 seconds before scrolling
    const timer = setTimeout(() => {
      handleScroll();
      setInitialLoading(false);
    }, 1500); // 2000 milliseconds = 2 seconds

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!initialLoading) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute('id');
              // navigate(`#${id}`, { replace: true });
              window.history.replaceState(null, '', `#${id}`);
              setActiveHash(`#${id}`);
            }
          });
        },
        {
          threshold: 0.5, // Adjust the threshold as needed
        }
      );

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        } else {
          setActiveHash(undefined);
        }
      });

      return () => {
        ids.forEach((id) => {
          const element = document.getElementById(id);
          if (element) {
            observer.unobserve(element);
          }
        });
      };
    }
    return () => {};
  }, [ids, setActiveHash, initialLoading]);

  return activeHash;
};

export default useHashObserver;
