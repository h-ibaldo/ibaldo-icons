import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOnInsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOnInset: ForwardRefExoticComponent<ToggleOnInsetProps & RefAttributes<Svg>>;

export default ToggleOnInset;
export { ToggleOnInset };
