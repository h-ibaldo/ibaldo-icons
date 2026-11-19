import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartZigzagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChartZigzag: ForwardRefExoticComponent<WindowChartZigzagProps & RefAttributes<Svg>>;

export default WindowChartZigzag;
export { WindowChartZigzag };
