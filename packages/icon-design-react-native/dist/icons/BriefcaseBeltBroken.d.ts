import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseBeltBrokenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseBeltBroken: ForwardRefExoticComponent<BriefcaseBeltBrokenProps & RefAttributes<Svg>>;

export default BriefcaseBeltBroken;
export { BriefcaseBeltBroken };
