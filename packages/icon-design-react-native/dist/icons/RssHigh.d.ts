import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface RssHighProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const RssHigh: ForwardRefExoticComponent<RssHighProps & RefAttributes<Svg>>;

export default RssHigh;
export { RssHigh };
