import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleConcentricSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleConcentricSmall: ForwardRefExoticComponent<CircleConcentricSmallProps & RefAttributes<Svg>>;

export default CircleConcentricSmall;
export { CircleConcentricSmall };
