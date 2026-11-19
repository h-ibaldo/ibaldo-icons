import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ToggleOffInsetProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ToggleOffInset: ForwardRefExoticComponent<ToggleOffInsetProps & RefAttributes<Svg>>;

export default ToggleOffInset;
export { ToggleOffInset };
