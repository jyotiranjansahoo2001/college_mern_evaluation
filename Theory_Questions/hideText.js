const HideText = () => {
    const textRef = useRef(null);
    setTimeout(() => {
        textRef.current.style.display = "none";
    },2000);
    return (
        <>
            <div ref="textRef">
                hide text
            </div>
        </>
    )
}
export default HideText;