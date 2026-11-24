import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrowserFlowerPointedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BrowserFlowerPointed: ForwardRefExoticComponent<BrowserFlowerPointedProps & RefAttributes<Svg>>;

export default BrowserFlowerPointed;
export { BrowserFlowerPointed };
