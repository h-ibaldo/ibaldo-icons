import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PercentCircleDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PercentCircleDot: ForwardRefExoticComponent<PercentCircleDotProps & RefAttributes<Svg>>;

export default PercentCircleDot;
export { PercentCircleDot };
