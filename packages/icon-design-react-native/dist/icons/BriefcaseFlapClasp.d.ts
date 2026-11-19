import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapClaspProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapClasp: ForwardRefExoticComponent<BriefcaseFlapClaspProps & RefAttributes<Svg>>;

export default BriefcaseFlapClasp;
export { BriefcaseFlapClasp };
