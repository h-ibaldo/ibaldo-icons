import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityNodesFilledProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilityNodesFilled: ForwardRefExoticComponent<AccessibilityNodesFilledProps & RefAttributes<Svg>>;

export default AccessibilityNodesFilled;
export { AccessibilityNodesFilled };
