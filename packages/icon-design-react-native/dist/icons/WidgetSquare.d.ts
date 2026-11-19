import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WidgetSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WidgetSquare: ForwardRefExoticComponent<WidgetSquareProps & RefAttributes<Svg>>;

export default WidgetSquare;
export { WidgetSquare };
