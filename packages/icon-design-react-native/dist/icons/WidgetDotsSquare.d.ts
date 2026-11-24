import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WidgetDotsSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WidgetDotsSquare: ForwardRefExoticComponent<WidgetDotsSquareProps & RefAttributes<Svg>>;

export default WidgetDotsSquare;
export { WidgetDotsSquare };
