import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Accessibility: ForwardRefExoticComponent<AccessibilityProps & RefAttributes<Svg>>;

export default Accessibility;
export { Accessibility };
