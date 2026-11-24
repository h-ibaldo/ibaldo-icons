import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RecordRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RecordRing: ForwardRefExoticComponent<RecordRingProps & RefAttributes<Svg>>;

export default RecordRing;
export { RecordRing };
