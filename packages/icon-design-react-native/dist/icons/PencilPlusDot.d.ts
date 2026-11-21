import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilPlusDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilPlusDot: ForwardRefExoticComponent<PencilPlusDotProps & RefAttributes<Svg>>;

export default PencilPlusDot;
export { PencilPlusDot };
