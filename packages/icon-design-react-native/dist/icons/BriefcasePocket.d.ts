import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcasePocketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcasePocket: ForwardRefExoticComponent<BriefcasePocketProps & RefAttributes<Svg>>;

export default BriefcasePocket;
export { BriefcasePocket };
