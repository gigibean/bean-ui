export const stretch = {
  description: 'If `true`, the button will take up the full width of its container.',
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};

export const isLoading = {
  description: `While isLoading prop is true, Loader component is used ans onClick event isn't invoked.`,
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};

export const href = {
  description:
    'The URL to link to when the button is clicked. If defined, an `a element` will be used instead of `button element`.',
  table: {
    type: {
      summary: 'string',
    },
  },
  control: 'text',
};
