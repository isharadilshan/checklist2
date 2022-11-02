export const desibleToQuality = dBm => {
  if (dBm <= -100) return 0;
  else if (dBm >= -50) return 100;
  else return 2 * (dBm + 100);
};
