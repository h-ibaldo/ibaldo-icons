import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserHeartProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserHeart: ForwardRefExoticComponent<BrowserHeartProps & RefAttributes<Svg>>;

export default BrowserHeart;
export { BrowserHeart };
