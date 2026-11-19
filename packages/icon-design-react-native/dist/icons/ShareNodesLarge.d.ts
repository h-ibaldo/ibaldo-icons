import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShareNodesLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShareNodesLarge: ForwardRefExoticComponent<ShareNodesLargeProps & RefAttributes<Svg>>;

export default ShareNodesLarge;
export { ShareNodesLarge };
