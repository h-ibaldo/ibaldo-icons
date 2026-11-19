import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PinSearch2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PinSearch2: ForwardRefExoticComponent<PinSearch2Props & RefAttributes<Svg>>;

export default PinSearch2;
export { PinSearch2 };
