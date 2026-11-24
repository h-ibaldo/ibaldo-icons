import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilPlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilPlain: ForwardRefExoticComponent<PencilPlainProps & RefAttributes<Svg>>;

export default PencilPlain;
export { PencilPlain };
