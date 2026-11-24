import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface Cursor2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Cursor2: ForwardRefExoticComponent<Cursor2Props & RefAttributes<Svg>>;

export default Cursor2;
export { Cursor2 };
