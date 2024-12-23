useEffect(() => {
    // access the element in js using useRef
    if(document.activeElement === cmRef.current) {
      setInches(cm / 2.54);
    }else if (document.activeElement === inchesRef.current) {
      setCm(inches * 2.54);
    }
  },[inches,cm])