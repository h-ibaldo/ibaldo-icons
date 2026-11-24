import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownTrayProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownTray: ForwardRefExoticComponent<ArrowDownTrayProps & RefAttributes<Svg>>;

export default ArrowDownTray;
export { ArrowDownTray };
