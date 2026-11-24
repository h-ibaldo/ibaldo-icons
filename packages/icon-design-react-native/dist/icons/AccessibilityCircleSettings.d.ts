import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityCircleSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilityCircleSettings: ForwardRefExoticComponent<AccessibilityCircleSettingsProps & RefAttributes<Svg>>;

export default AccessibilityCircleSettings;
export { AccessibilityCircleSettings };
