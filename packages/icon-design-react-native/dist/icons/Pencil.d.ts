import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Pencil: ForwardRefExoticComponent<PencilProps & RefAttributes<Svg>>;

export default Pencil;
export { Pencil };
