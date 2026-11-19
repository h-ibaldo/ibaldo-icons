import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShapeMixProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShapeMix: ForwardRefExoticComponent<ShapeMixProps & RefAttributes<Svg>>;

export default ShapeMix;
export { ShapeMix };
