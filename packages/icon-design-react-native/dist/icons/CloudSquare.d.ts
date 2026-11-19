import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquare: ForwardRefExoticComponent<CloudSquareProps & RefAttributes<Svg>>;

export default CloudSquare;
export { CloudSquare };
