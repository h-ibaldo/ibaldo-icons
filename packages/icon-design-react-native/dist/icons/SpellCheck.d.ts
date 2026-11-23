import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SpellCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SpellCheck: ForwardRefExoticComponent<SpellCheckProps & RefAttributes<Svg>>;

export default SpellCheck;
export { SpellCheck };
