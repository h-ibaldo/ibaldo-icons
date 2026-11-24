import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SeparatorHorizontalInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SeparatorHorizontalIn: ForwardRefExoticComponent<SeparatorHorizontalInProps & RefAttributes<Svg>>;

export default SeparatorHorizontalIn;
export { SeparatorHorizontalIn };
