import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerPlusCircle: ForwardRefExoticComponent<PointerPlusCircleProps & RefAttributes<Svg>>;

export default PointerPlusCircle;
export { PointerPlusCircle };
