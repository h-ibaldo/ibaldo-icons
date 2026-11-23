import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PenToolVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PenToolVertical: ForwardRefExoticComponent<PenToolVerticalProps & RefAttributes<Svg>>;

export default PenToolVertical;
export { PenToolVertical };
