import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CursorRippleDoubleStemProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CursorRippleDoubleStem: ForwardRefExoticComponent<CursorRippleDoubleStemProps & RefAttributes<Svg>>;

export default CursorRippleDoubleStem;
export { CursorRippleDoubleStem };
