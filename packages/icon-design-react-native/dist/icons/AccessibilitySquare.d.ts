import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilitySquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilitySquare: ForwardRefExoticComponent<AccessibilitySquareProps & RefAttributes<Svg>>;

export default AccessibilitySquare;
export { AccessibilitySquare };
