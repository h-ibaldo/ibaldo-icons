import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerShineLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerShineLarge: ForwardRefExoticComponent<PointerShineLargeProps & RefAttributes<Svg>>;

export default PointerShineLarge;
export { PointerShineLarge };
