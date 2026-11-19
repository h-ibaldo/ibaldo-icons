import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertSquareStackOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertSquareStackOverlap: ForwardRefExoticComponent<AlertSquareStackOverlapProps & RefAttributes<Svg>>;

export default AlertSquareStackOverlap;
export { AlertSquareStackOverlap };
