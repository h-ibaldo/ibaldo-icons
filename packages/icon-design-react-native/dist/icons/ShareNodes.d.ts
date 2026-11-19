import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ShareNodesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ShareNodes: ForwardRefExoticComponent<ShareNodesProps & RefAttributes<Svg>>;

export default ShareNodes;
export { ShareNodes };
