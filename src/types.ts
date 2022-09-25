import { ResponsiveValue, CSSProperties } from '@andideve/sx-core';

interface BaseProps {
  border?: ResponsiveValue<CSSProperties['border']>;
  borderWidth?: ResponsiveValue<CSSProperties['borderWidth']>;
  borderStyle?: ResponsiveValue<CSSProperties['borderStyle']>;
  borderColor?: ResponsiveValue<CSSProperties['borderColor']>;
  borderRadius?: ResponsiveValue<CSSProperties['borderRadius']>;
  borderTop?: ResponsiveValue<CSSProperties['borderTop']>;
  borderRight?: ResponsiveValue<CSSProperties['borderRight']>;
  borderBottom?: ResponsiveValue<CSSProperties['borderBottom']>;
  borderLeft?: ResponsiveValue<CSSProperties['borderLeft']>;
  borderX?: ResponsiveValue<CSSProperties['borderRight'] | CSSProperties['borderLeft']>;
  borderY?: ResponsiveValue<CSSProperties['borderTop'] | CSSProperties['borderBottom']>;
}

interface OtherProps {
  borderTopWidth?: ResponsiveValue<CSSProperties['borderTopWidth']>;
  borderTopColor?: ResponsiveValue<CSSProperties['borderTopColor']>;
  borderTopStyle?: ResponsiveValue<CSSProperties['borderTopStyle']>;
  borderTopLeftRadius?: ResponsiveValue<CSSProperties['borderTopLeftRadius']>;
  borderTopRightRadius?: ResponsiveValue<CSSProperties['borderTopRightRadius']>;
  borderBottomWidth?: ResponsiveValue<CSSProperties['borderBottomWidth']>;
  borderBottomColor?: ResponsiveValue<CSSProperties['borderBottomColor']>;
  borderBottomStyle?: ResponsiveValue<CSSProperties['borderBottomStyle']>;
  borderBottomLeftRadius?: ResponsiveValue<CSSProperties['borderBottomLeftRadius']>;
  borderBottomRightRadius?: ResponsiveValue<CSSProperties['borderBottomRightRadius']>;
  borderLeftWidth?: ResponsiveValue<CSSProperties['borderLeftWidth']>;
  borderLeftColor?: ResponsiveValue<CSSProperties['borderLeftColor']>;
  borderLeftStyle?: ResponsiveValue<CSSProperties['borderLeftStyle']>;
  borderRightWidth?: ResponsiveValue<CSSProperties['borderRightWidth']>;
  borderRightColor?: ResponsiveValue<CSSProperties['borderRightColor']>;
  borderRightStyle?: ResponsiveValue<CSSProperties['borderRightStyle']>;
}

export type BorderProps = BaseProps & OtherProps;
