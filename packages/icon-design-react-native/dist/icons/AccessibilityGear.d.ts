import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityGearProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilityGear: ForwardRefExoticComponent<AccessibilityGearProps & RefAttributes<Svg>>;

export default AccessibilityGear;
export { AccessibilityGear };
