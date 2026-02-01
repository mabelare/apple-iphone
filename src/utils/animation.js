export const animateWithGsapTimeline = (
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps = {},
) => {
  if (rotationRef && rotationRef.current && rotationRef.current.rotation) {
    timeline.to(rotationRef.current.rotation, {
      y: rotationState,
      duration: 1,
      ease: "power2.inOut",
    });
  } else {
  }

  if (firstTarget) {
    timeline.to(firstTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  }

  if (secondTarget) {
    timeline.to(secondTarget, { ...animationProps, ease: "power2.inOut" }, "<");
  }
};
