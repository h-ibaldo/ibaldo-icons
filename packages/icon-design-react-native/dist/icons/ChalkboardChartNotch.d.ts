import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChalkboardChartNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChalkboardChartNotch: ForwardRefExoticComponent<ChalkboardChartNotchProps & RefAttributes<Svg>>;

export default ChalkboardChartNotch;
export { ChalkboardChartNotch };
