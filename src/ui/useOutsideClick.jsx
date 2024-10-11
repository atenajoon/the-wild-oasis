import { useEffect, useRef } from 'react';

function useOutsideClick({ listenCapturing = true, handler }) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      // ref.current is the DOM element of the Modal window, which has the "contain" method to check if the clicked element is inside the Modal
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    }

    // true is the value of the useCapture, which is the third argument to make the event being handled only
    // in capturing phase(moving down the tree), not the bubbling phase(moving up the tree)
    // the third parameter can be an 'option' or a 'useCapture'. read more here: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}

export default useOutsideClick;
