import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlignCenterVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlignCenterVertical: ForwardRefExoticComponent<AlignCenterVerticalProps & RefAttributes<Svg>>;

export default AlignCenterVertical;
export { AlignCenterVertical };
