import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChartBarSquareDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChartBarSquareDot: ForwardRefExoticComponent<ChartBarSquareDotProps & RefAttributes<Svg>>;

export default ChartBarSquareDot;
export { ChartBarSquareDot };
