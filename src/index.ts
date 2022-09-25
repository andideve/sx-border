import { system, SystemConfig, ThemeKey } from '@andideve/sx-core';
import { BorderProps } from './types';

const config: SystemConfig<BorderProps> = {
  border: {
    property: 'border',
    scale: ThemeKey.borders,
  },
  borderWidth: {
    property: 'borderWidth',
    scale: ThemeKey.borderWidths,
  },
  borderStyle: {
    property: 'borderStyle',
    scale: ThemeKey.borderStyles,
  },
  borderColor: {
    property: 'borderColor',
    scale: ThemeKey.colors,
  },
  borderRadius: {
    property: 'borderRadius',
    scale: ThemeKey.radii,
  },
  borderTop: {
    property: 'borderTop',
    scale: ThemeKey.borders,
  },
  borderRight: {
    property: 'borderRight',
    scale: ThemeKey.borders,
  },
  borderBottom: {
    property: 'borderBottom',
    scale: ThemeKey.borders,
  },
  borderLeft: {
    property: 'borderLeft',
    scale: ThemeKey.borders,
  },
  borderX: {
    properties: ['borderLeft', 'borderRight'],
    scale: ThemeKey.borders,
  },
  borderY: {
    properties: ['borderTop', 'borderBottom'],
    scale: ThemeKey.borders,
  },
};
config.borderTopWidth = {
  property: 'borderTopWidth',
  scale: ThemeKey.borderWidths,
};
config.borderTopColor = {
  property: 'borderTopColor',
  scale: ThemeKey.colors,
};
config.borderTopStyle = {
  property: 'borderTopStyle',
  scale: ThemeKey.borderStyles,
};
config.borderTopLeftRadius = {
  property: 'borderTopLeftRadius',
  scale: ThemeKey.radii,
};
config.borderTopRightRadius = {
  property: 'borderTopRightRadius',
  scale: ThemeKey.radii,
};
config.borderBottomWidth = {
  property: 'borderBottomWidth',
  scale: ThemeKey.borderWidths,
};
config.borderBottomColor = {
  property: 'borderBottomColor',
  scale: ThemeKey.colors,
};
config.borderBottomStyle = {
  property: 'borderBottomStyle',
  scale: ThemeKey.borderStyles,
};
config.borderBottomLeftRadius = {
  property: 'borderBottomLeftRadius',
  scale: ThemeKey.radii,
};
config.borderBottomRightRadius = {
  property: 'borderBottomRightRadius',
  scale: ThemeKey.radii,
};
config.borderLeftWidth = {
  property: 'borderLeftWidth',
  scale: ThemeKey.borderWidths,
};
config.borderLeftColor = {
  property: 'borderLeftColor',
  scale: ThemeKey.colors,
};
config.borderLeftStyle = {
  property: 'borderLeftStyle',
  scale: ThemeKey.borderStyles,
};
config.borderRightWidth = {
  property: 'borderRightWidth',
  scale: ThemeKey.borderWidths,
};
config.borderRightColor = {
  property: 'borderRightColor',
  scale: ThemeKey.colors,
};
config.borderRightStyle = {
  property: 'borderRightStyle',
  scale: ThemeKey.borderStyles,
};

export const border = system(config);

export { BorderProps };
export default border;
