import {useEffect, useState} from "react";

const Route = ({ path, children }) => {
  // state to track URL and force component to re-render on change
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // define callback as separate function
  useEffect(() => {
    const onLocationChange = () => {
      //update path state to current window URL
      setCurrentPath(window.location.pathname);
    }
    window.addEventListener('popstate', onLocationChange)
    //clean up event listener
    return () => {
      window.removeEventListener('popstate', onLocationChange)
    }
  }, [])

  return currentPath === path ? children : null
}

export default Route