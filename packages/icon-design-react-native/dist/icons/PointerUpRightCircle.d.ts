import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerUpRightCircle: ForwardRefExoticComponent<PointerUpRightCircleProps & RefAttributes<Svg>>;

export default PointerUpRightCircle;
export { PointerUpRightCircle };
