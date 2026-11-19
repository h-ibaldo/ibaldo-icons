import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Cursor4Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cursor4: ForwardRefExoticComponent<Cursor4Props & RefAttributes<Svg>>;

export default Cursor4;
export { Cursor4 };
