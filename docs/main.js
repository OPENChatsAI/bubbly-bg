function configToText(config) {
    return `
bubbly({
  canvas: ${config.cv},
  compose: ${config.compose ? `"${config.compose}"` : undefined},
  bubbles: {
      count: ${config.bubbles?.count},
      radius: ${config.bubbles?.radius},
      fill: ${config.bubbles?.fill},
      angle: ${config.bubbles?.angle},
      velocity: ${config.bubbles?.velocity},
      shadow: ${config.bubbles?.shadow},
      stroke: ${config.bubbles?.stroke},
  },
  background: ${formatBackgroundFunction(config.background)},
  animate: ${config.animate},
});`.trim();    
        // .split('\n')
        // .filter(line => !line.includes(': undefined,')) // remove undefined values
        // .join('\n');
}

function formatBackgroundFunction(func) {
    if (!func) return undefined
    if (func.toString().split("\n").length === 1) return func.toString();
    const lines = func.toString().split("\n");
    const indent = lines[1].match(/^\s*/)[0].length - 4 - 2;
    return lines.map(line => line.replace(" ".repeat(indent), "")).join('\n');
}
