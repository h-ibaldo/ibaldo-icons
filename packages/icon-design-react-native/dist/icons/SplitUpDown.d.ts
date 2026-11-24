import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SplitUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SplitUpDown: ForwardRefExoticComponent<SplitUpDownProps & RefAttributes<Svg>>;

export default SplitUpDown;
export { SplitUpDown };
