export const theme = {
  description: 'change theme mode `light` or `dark`',
  table: {
    type: {
      summary: 'light | dark',
      detail: `you can test theme by changing background`,
    },
  },
  control: 'select',
  options: ['light', 'dark'],
};

export const size = {
  description: 'change component size',
  table: {
    type: {
      summary: 'small | medium | large',
    },
  },
  control: 'select',
  options: ['small', 'medium', 'large'],
};

export const variant = {
  description: 'The variant styles to use',
  table: {
    type: {
      summary: 'contained | text | outlined',
    },
  },
  control: 'select',
  options: ['contained', 'text', 'outlined'],
};

export const color = {
  description:
    'The color of the component. It supports both default and custom colors, which can be colors in common packages and also rgb or hex.',
  table: {
    type: {
      summary: 'colors | rgb or hex',
      detail:
        'red | pink | purple | deepPurple | indigo | blue | lightBlue | green | lightGreen | lime | yellow | amber | orange | deepOrange | brown | gray | rgb or hex',
    },
  },
  control: 'select',
  options: [
    'red',
    'pink',
    'purple',
    'deepPurple',
    'indigo',
    'blue',
    'lightBlue',
    'green',
    'lightGreen',
    'lime',
    'yellow',
    'amber',
    'orange',
    'deepOrange',
    'brown',
    'gray',
    '#FFB3B3',
    'rgb(63, 167, 150)',
  ],
};
export const scale = {
  description: 'The color scale of the component. It supports numbers from `50` to `900`',
  table: {
    type: {
      summary: 'number',
      detail: '50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900',
    },
  },
  control: 'select',
  options: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
};
export const children = {
  description: 'The content of the component.',
  table: {
    type: {
      summary: 'node',
    },
  },
  control: 'text',
};

export const disabled = {
  description: 'If `true``, the component is disabled.',
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};
