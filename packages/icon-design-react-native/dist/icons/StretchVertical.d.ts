import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface StretchVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const StretchVertical: ForwardRefExoticComponent<StretchVerticalProps & RefAttributes<Svg>>;

export default StretchVertical;
export { StretchVertical };
