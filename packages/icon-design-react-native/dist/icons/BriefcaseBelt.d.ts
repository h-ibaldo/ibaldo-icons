import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseBeltProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseBelt: ForwardRefExoticComponent<BriefcaseBeltProps & RefAttributes<Svg>>;

export default BriefcaseBelt;
export { BriefcaseBelt };
