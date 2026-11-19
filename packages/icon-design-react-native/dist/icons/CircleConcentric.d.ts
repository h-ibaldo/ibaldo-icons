import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleConcentricProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleConcentric: ForwardRefExoticComponent<CircleConcentricProps & RefAttributes<Svg>>;

export default CircleConcentric;
export { CircleConcentric };
