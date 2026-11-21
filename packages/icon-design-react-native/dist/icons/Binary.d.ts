import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BinaryProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Binary: ForwardRefExoticComponent<BinaryProps & RefAttributes<Svg>>;

export default Binary;
export { Binary };
