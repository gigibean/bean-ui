export const checked = {
  description: 'If `true``, the component is checked.',
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};

export const defaultChecked = {
  description: 'The default checked state. ',
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};

export const required = {
  description: 'if `true`, it is required',
  table: {
    type: {
      summary: 'boolean',
    },
  },
  control: 'select',
  options: [true, false],
};

export const label = {
  description: 'A text to be used label element.',
  table: {
    type: {
      summary: 'string',
    },
  },
  control: 'text',
};

export const control = {
  description: 'A control element. For instance, it can be a Radio or a Checkbox.',
  table: {
    type: {
      summary: 'element',
    },
  },
};
