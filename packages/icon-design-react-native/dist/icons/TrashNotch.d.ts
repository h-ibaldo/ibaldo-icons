import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashNotch: ForwardRefExoticComponent<TrashNotchProps & RefAttributes<Svg>>;

export default TrashNotch;
export { TrashNotch };
