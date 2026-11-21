import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TvLegsProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TvLegs: ForwardRefExoticComponent<TvLegsProps & RefAttributes<Svg>>;

export default TvLegs;
export { TvLegs };
