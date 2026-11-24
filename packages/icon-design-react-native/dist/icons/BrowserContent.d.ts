import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserContentProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserContent: ForwardRefExoticComponent<BrowserContentProps & RefAttributes<Svg>>;

export default BrowserContent;
export { BrowserContent };
