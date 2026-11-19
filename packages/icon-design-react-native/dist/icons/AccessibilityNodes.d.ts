import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AccessibilityNodesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AccessibilityNodes: ForwardRefExoticComponent<AccessibilityNodesProps & RefAttributes<Svg>>;

export default AccessibilityNodes;
export { AccessibilityNodes };
