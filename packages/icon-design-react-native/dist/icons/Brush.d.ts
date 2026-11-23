import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BrushProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Brush: ForwardRefExoticComponent<BrushProps & RefAttributes<Svg>>;

export default Brush;
export { Brush };
