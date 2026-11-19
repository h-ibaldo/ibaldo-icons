import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AdjustVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AdjustVertical: ForwardRefExoticComponent<AdjustVerticalProps & RefAttributes<Svg>>;

export default AdjustVertical;
export { AdjustVertical };
