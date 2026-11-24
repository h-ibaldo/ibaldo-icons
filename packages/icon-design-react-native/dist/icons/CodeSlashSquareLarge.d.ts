import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CodeSlashSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CodeSlashSquareLarge: ForwardRefExoticComponent<CodeSlashSquareLargeProps & RefAttributes<Svg>>;

export default CodeSlashSquareLarge;
export { CodeSlashSquareLarge };
