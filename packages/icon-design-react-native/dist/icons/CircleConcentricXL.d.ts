import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleConcentricXLProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleConcentricXL: ForwardRefExoticComponent<CircleConcentricXLProps & RefAttributes<Svg>>;

export default CircleConcentricXL;
export { CircleConcentricXL };
