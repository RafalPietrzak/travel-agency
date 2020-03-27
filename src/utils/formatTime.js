export const formatTime = (timeInSeconds) => {
  if(
    typeof timeInSeconds === 'undefined' 
    || timeInSeconds < 0 
    || isNaN(timeInSeconds)
  ) {
    return null;
  }
  const hours = Math.floor(timeInSeconds/3600).toString().padStart(2, 0);
  const minutes = Math.floor((timeInSeconds/60)%60).toString().padStart(2, 0);
  const seconds = Math.floor((timeInSeconds)%60).toString().padStart(2, 0);
  return `${hours}:${minutes}:${seconds}`;
};
