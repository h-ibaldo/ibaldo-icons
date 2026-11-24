import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TrashBanNotchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TrashBanNotch: ForwardRefExoticComponent<TrashBanNotchProps & RefAttributes<Svg>>;

export default TrashBanNotch;
export { TrashBanNotch };
