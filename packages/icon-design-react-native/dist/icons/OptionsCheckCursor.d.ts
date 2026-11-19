import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionsCheckCursorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionsCheckCursor: ForwardRefExoticComponent<OptionsCheckCursorProps & RefAttributes<Svg>>;

export default OptionsCheckCursor;
export { OptionsCheckCursor };
