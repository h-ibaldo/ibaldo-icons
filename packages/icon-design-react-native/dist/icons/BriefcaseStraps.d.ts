import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseStrapsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseStraps: ForwardRefExoticComponent<BriefcaseStrapsProps & RefAttributes<Svg>>;

export default BriefcaseStraps;
export { BriefcaseStraps };
