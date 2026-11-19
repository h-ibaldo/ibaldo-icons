import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseSideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseSide: ForwardRefExoticComponent<BriefcaseSideProps & RefAttributes<Svg>>;

export default BriefcaseSide;
export { BriefcaseSide };
