import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilitySettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilitySettings: ForwardRefExoticComponent<AccessibilitySettingsProps & RefAttributes<Svg>>;

export default AccessibilitySettings;
export { AccessibilitySettings };
