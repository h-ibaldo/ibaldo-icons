import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapCurveProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapCurve: ForwardRefExoticComponent<BriefcaseFlapCurveProps & RefAttributes<Svg>>;

export default BriefcaseFlapCurve;
export { BriefcaseFlapCurve };
