import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SquaresExcludeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SquaresExclude: ForwardRefExoticComponent<SquaresExcludeProps & RefAttributes<Svg>>;

export default SquaresExclude;
export { SquaresExclude };
