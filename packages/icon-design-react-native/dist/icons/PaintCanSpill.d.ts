import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintCanSpillProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintCanSpill: ForwardRefExoticComponent<PaintCanSpillProps & RefAttributes<Svg>>;

export default PaintCanSpill;
export { PaintCanSpill };
