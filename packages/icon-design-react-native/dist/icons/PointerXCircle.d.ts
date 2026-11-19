import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerXCircle: ForwardRefExoticComponent<PointerXCircleProps & RefAttributes<Svg>>;

export default PointerXCircle;
export { PointerXCircle };
