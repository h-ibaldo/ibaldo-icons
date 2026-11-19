import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BriefcaseFlapLatchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BriefcaseFlapLatch: ForwardRefExoticComponent<BriefcaseFlapLatchProps & RefAttributes<Svg>>;

export default BriefcaseFlapLatch;
export { BriefcaseFlapLatch };
