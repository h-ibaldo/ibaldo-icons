import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface VolumeLowWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const VolumeLowWide: ForwardRefExoticComponent<VolumeLowWideProps & RefAttributes<Svg>>;

export default VolumeLowWide;
export { VolumeLowWide };
