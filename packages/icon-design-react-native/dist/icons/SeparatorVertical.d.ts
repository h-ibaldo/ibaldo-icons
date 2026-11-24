import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SeparatorVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SeparatorVertical: ForwardRefExoticComponent<SeparatorVerticalProps & RefAttributes<Svg>>;

export default SeparatorVertical;
export { SeparatorVertical };
