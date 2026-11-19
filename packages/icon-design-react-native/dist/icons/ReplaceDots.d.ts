import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ReplaceDotsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ReplaceDots: ForwardRefExoticComponent<ReplaceDotsProps & RefAttributes<Svg>>;

export default ReplaceDots;
export { ReplaceDots };
