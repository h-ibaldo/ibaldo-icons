import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashXBucketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashXBucket: ForwardRefExoticComponent<TrashXBucketProps & RefAttributes<Svg>>;

export default TrashXBucket;
export { TrashXBucket };
