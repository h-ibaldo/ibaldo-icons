import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserArmchairProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserArmchair: ForwardRefExoticComponent<BrowserArmchairProps & RefAttributes<Svg>>;

export default BrowserArmchair;
export { BrowserArmchair };
