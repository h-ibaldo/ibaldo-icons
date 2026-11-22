import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesHubProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesHub: ForwardRefExoticComponent<NodesHubProps & RefAttributes<Svg>>;

export default NodesHub;
export { NodesHub };
