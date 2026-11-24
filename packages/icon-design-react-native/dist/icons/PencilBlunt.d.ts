import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilBluntProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilBlunt: ForwardRefExoticComponent<PencilBluntProps & RefAttributes<Svg>>;

export default PencilBlunt;
export { PencilBlunt };
