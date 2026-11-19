import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerRectangleDashedStraightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerRectangleDashedStraight: ForwardRefExoticComponent<PointerRectangleDashedStraightProps & RefAttributes<Svg>>;

export default PointerRectangleDashedStraight;
export { PointerRectangleDashedStraight };
