import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaintBucketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaintBucket: ForwardRefExoticComponent<PaintBucketProps & RefAttributes<Svg>>;

export default PaintBucket;
export { PaintBucket };
