import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Cursor3Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cursor3: ForwardRefExoticComponent<Cursor3Props & RefAttributes<Svg>>;

export default Cursor3;
export { Cursor3 };
