import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserRocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserRocket: ForwardRefExoticComponent<BrowserRocketProps & RefAttributes<Svg>>;

export default BrowserRocket;
export { BrowserRocket };
