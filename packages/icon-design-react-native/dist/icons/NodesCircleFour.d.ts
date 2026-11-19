import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesCircleFourProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesCircleFour: ForwardRefExoticComponent<NodesCircleFourProps & RefAttributes<Svg>>;

export default NodesCircleFour;
export { NodesCircleFour };
