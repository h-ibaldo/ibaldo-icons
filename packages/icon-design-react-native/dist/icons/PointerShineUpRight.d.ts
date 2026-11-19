import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerShineUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerShineUpRight: ForwardRefExoticComponent<PointerShineUpRightProps & RefAttributes<Svg>>;

export default PointerShineUpRight;
export { PointerShineUpRight };
