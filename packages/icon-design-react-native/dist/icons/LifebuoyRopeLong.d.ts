import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LifebuoyRopeLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LifebuoyRopeLong: ForwardRefExoticComponent<LifebuoyRopeLongProps & RefAttributes<Svg>>;

export default LifebuoyRopeLong;
export { LifebuoyRopeLong };
