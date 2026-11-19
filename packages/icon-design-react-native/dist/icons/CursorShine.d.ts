import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorShine: ForwardRefExoticComponent<CursorShineProps & RefAttributes<Svg>>;

export default CursorShine;
export { CursorShine };
