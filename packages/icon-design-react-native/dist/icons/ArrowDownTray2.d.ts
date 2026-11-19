import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownTray2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownTray2: ForwardRefExoticComponent<ArrowDownTray2Props & RefAttributes<Svg>>;

export default ArrowDownTray2;
export { ArrowDownTray2 };
