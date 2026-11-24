import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleConcentricXSProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleConcentricXS: ForwardRefExoticComponent<CircleConcentricXSProps & RefAttributes<Svg>>;

export default CircleConcentricXS;
export { CircleConcentricXS };
