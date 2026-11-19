import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashCircleBucketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashCircleBucket: ForwardRefExoticComponent<TrashCircleBucketProps & RefAttributes<Svg>>;

export default TrashCircleBucket;
export { TrashCircleBucket };
