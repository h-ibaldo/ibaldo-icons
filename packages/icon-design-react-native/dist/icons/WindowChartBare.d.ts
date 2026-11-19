import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChartBare: ForwardRefExoticComponent<WindowChartBareProps & RefAttributes<Svg>>;

export default WindowChartBare;
export { WindowChartBare };
