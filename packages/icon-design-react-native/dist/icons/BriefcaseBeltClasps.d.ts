import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseBeltClaspsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseBeltClasps: ForwardRefExoticComponent<BriefcaseBeltClaspsProps & RefAttributes<Svg>>;

export default BriefcaseBeltClasps;
export { BriefcaseBeltClasps };
