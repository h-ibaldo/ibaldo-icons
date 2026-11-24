import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityCircleSettingsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilityCircleSettingsLarge: ForwardRefExoticComponent<AccessibilityCircleSettingsLargeProps & RefAttributes<Svg>>;

export default AccessibilityCircleSettingsLarge;
export { AccessibilityCircleSettingsLarge };
