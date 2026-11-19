import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapWide: ForwardRefExoticComponent<BriefcaseFlapWideProps & RefAttributes<Svg>>;

export default BriefcaseFlapWide;
export { BriefcaseFlapWide };
