import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartArrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChartArrow: ForwardRefExoticComponent<WindowChartArrowProps & RefAttributes<Svg>>;

export default WindowChartArrow;
export { WindowChartArrow };
