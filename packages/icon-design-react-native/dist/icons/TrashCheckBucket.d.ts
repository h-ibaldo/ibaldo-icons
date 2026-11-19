import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashCheckBucketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashCheckBucket: ForwardRefExoticComponent<TrashCheckBucketProps & RefAttributes<Svg>>;

export default TrashCheckBucket;
export { TrashCheckBucket };
