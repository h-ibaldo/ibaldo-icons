import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SeparatorVerticalInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SeparatorVerticalIn: ForwardRefExoticComponent<SeparatorVerticalInProps & RefAttributes<Svg>>;

export default SeparatorVerticalIn;
export { SeparatorVerticalIn };
