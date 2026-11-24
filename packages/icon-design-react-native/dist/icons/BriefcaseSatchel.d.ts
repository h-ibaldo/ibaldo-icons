import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseSatchelProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseSatchel: ForwardRefExoticComponent<BriefcaseSatchelProps & RefAttributes<Svg>>;

export default BriefcaseSatchel;
export { BriefcaseSatchel };
