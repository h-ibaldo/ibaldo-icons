import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartZigzagBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChartZigzagBare: ForwardRefExoticComponent<WindowChartZigzagBareProps & RefAttributes<Svg>>;

export default WindowChartZigzagBare;
export { WindowChartZigzagBare };
