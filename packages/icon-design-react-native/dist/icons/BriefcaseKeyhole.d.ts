import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseKeyholeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseKeyhole: ForwardRefExoticComponent<BriefcaseKeyholeProps & RefAttributes<Svg>>;

export default BriefcaseKeyhole;
export { BriefcaseKeyhole };
