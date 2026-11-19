import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LinkMinusCircleSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LinkMinusCircleSlanted: ForwardRefExoticComponent<LinkMinusCircleSlantedProps & RefAttributes<Svg>>;

export default LinkMinusCircleSlanted;
export { LinkMinusCircleSlanted };
