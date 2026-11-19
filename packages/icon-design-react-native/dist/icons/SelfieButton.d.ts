import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SelfieButtonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SelfieButton: ForwardRefExoticComponent<SelfieButtonProps & RefAttributes<Svg>>;

export default SelfieButton;
export { SelfieButton };
