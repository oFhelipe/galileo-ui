const darkenChannel = (channel: number, darkenFactor: number) => {
  const black = 0;
  return Math.round((black - channel) * darkenFactor) + channel;
};

export const darkenColor = (hexColor: string, darkenFactor = 0.2) => {
  const colorValue = parseInt(hexColor.slice(1), 16);

  const red = colorValue >> 16;
  const green = (colorValue >> 8) & 0x00ff;
  const blue = colorValue & 0x0000ff;

  return (
    "#" +
    (
      0x1000000 +
      darkenChannel(red, darkenFactor) * 0x10000 +
      darkenChannel(green, darkenFactor) * 0x100 +
      darkenChannel(blue, darkenFactor)
    )
      .toString(16)
      .slice(1)
  );
};
