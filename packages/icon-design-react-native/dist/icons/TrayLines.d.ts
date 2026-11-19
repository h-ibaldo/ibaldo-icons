import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrayLinesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrayLines: ForwardRefExoticComponent<TrayLinesProps & RefAttributes<Svg>>;

export default TrayLines;
export { TrayLines };
