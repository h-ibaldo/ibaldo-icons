import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WidgetWifiSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WidgetWifiSquare: ForwardRefExoticComponent<WidgetWifiSquareProps & RefAttributes<Svg>>;

export default WidgetWifiSquare;
export { WidgetWifiSquare };
