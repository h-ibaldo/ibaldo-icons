import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Briefcase: ForwardRefExoticComponent<BriefcaseProps & RefAttributes<Svg>>;

export default Briefcase;
export { Briefcase };
