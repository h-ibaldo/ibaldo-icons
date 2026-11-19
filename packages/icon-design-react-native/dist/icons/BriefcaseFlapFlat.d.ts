import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapFlatProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapFlat: ForwardRefExoticComponent<BriefcaseFlapFlatProps & RefAttributes<Svg>>;

export default BriefcaseFlapFlat;
export { BriefcaseFlapFlat };
