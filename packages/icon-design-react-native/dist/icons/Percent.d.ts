import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PercentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Percent: ForwardRefExoticComponent<PercentProps & RefAttributes<Svg>>;

export default Percent;
export { Percent };
