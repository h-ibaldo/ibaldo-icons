import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilitySquareSettingsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilitySquareSettings: ForwardRefExoticComponent<AccessibilitySquareSettingsProps & RefAttributes<Svg>>;

export default AccessibilitySquareSettings;
export { AccessibilitySquareSettings };
