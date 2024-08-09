// useHashObserver.js
import { useEffect, useState } from 'react';

const useHashObserver = (ids: string[]) => {
  const [activeHash, setActiveHash] = useState<undefined | string>(undefined);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            // navigate(`#${id}`, { replace: true });
            // window.history.replaceState(null, '', ' ');
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
  }, [ids, setActiveHash]);

  return activeHash;
};

export default useHashObserver;
