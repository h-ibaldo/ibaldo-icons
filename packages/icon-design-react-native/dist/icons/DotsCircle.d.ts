import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DotsCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DotsCircle: ForwardRefExoticComponent<DotsCircleProps & RefAttributes<Svg>>;

export default DotsCircle;
export { DotsCircle };
