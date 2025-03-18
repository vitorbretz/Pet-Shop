const Header = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);
  
    // Close the nav menu when clicking outside of it
    useEffect(() => {
      const handleClickOutside = (event) => {
        const navContainer = document.querySelector(".navbar_container");
  
        // If the click was outside the nav container, close the menu
        if (navContainer && !navContainer.contains(event.target)) {
          setIsNavShowing(false);
        }
      };
  
      // Add event listener to detect clicks outside of nav
      document.addEventListener("mousedown", handleClickOutside);
  
      // Clean up event listener on component unmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
};
export default Header;