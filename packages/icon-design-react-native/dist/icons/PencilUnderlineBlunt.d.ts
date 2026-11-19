import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilUnderlineBluntProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilUnderlineBlunt: ForwardRefExoticComponent<PencilUnderlineBluntProps & RefAttributes<Svg>>;

export default PencilUnderlineBlunt;
export { PencilUnderlineBlunt };
