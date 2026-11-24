import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesCircleThreeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesCircleThree: ForwardRefExoticComponent<NodesCircleThreeProps & RefAttributes<Svg>>;

export default NodesCircleThree;
export { NodesCircleThree };
