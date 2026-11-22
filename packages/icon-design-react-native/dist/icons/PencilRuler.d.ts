import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PencilRulerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PencilRuler: ForwardRefExoticComponent<PencilRulerProps & RefAttributes<Svg>>;

export default PencilRuler;
export { PencilRuler };
