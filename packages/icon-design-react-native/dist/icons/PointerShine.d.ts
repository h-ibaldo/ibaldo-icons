import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PointerShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PointerShine: ForwardRefExoticComponent<PointerShineProps & RefAttributes<Svg>>;

export default PointerShine;
export { PointerShine };
