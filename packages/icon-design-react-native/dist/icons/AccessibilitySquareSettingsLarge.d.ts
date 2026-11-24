import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilitySquareSettingsLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilitySquareSettingsLarge: ForwardRefExoticComponent<AccessibilitySquareSettingsLargeProps & RefAttributes<Svg>>;

export default AccessibilitySquareSettingsLarge;
export { AccessibilitySquareSettingsLarge };
