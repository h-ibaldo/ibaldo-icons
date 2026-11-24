import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPlusCenterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPlusCenter: ForwardRefExoticComponent<WindowPlusCenterProps & RefAttributes<Svg>>;

export default WindowPlusCenter;
export { WindowPlusCenter };
