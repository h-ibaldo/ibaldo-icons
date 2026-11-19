import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapClaspsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapClasps: ForwardRefExoticComponent<BriefcaseFlapClaspsProps & RefAttributes<Svg>>;

export default BriefcaseFlapClasps;
export { BriefcaseFlapClasps };
