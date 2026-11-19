import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BracketsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Brackets: ForwardRefExoticComponent<BracketsProps & RefAttributes<Svg>>;

export default Brackets;
export { Brackets };
