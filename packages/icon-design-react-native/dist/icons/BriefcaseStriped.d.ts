import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseStripedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseStriped: ForwardRefExoticComponent<BriefcaseStripedProps & RefAttributes<Svg>>;

export default BriefcaseStriped;
export { BriefcaseStriped };
