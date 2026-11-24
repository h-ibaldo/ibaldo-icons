import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WidgetCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WidgetCircle: ForwardRefExoticComponent<WidgetCircleProps & RefAttributes<Svg>>;

export default WidgetCircle;
export { WidgetCircle };
