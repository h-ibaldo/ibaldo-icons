import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorUpShineProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorUpShine: ForwardRefExoticComponent<CursorUpShineProps & RefAttributes<Svg>>;

export default CursorUpShine;
export { CursorUpShine };
