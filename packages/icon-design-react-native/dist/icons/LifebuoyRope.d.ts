import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LifebuoyRopeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LifebuoyRope: ForwardRefExoticComponent<LifebuoyRopeProps & RefAttributes<Svg>>;

export default LifebuoyRope;
export { LifebuoyRope };
