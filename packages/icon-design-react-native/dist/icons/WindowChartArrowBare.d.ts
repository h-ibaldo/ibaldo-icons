import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowChartArrowBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowChartArrowBare: ForwardRefExoticComponent<WindowChartArrowBareProps & RefAttributes<Svg>>;

export default WindowChartArrowBare;
export { WindowChartArrowBare };
