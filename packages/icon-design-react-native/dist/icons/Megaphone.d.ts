import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface MegaphoneProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Megaphone: ForwardRefExoticComponent<MegaphoneProps & RefAttributes<Svg>>;

export default Megaphone;
export { Megaphone };
