import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtClock2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtClock2: ForwardRefExoticComponent<AtClock2Props & RefAttributes<Svg>>;

export default AtClock2;
export { AtClock2 };
