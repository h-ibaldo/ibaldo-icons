import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxOpenRaisedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxOpenRaised: ForwardRefExoticComponent<BoxOpenRaisedProps & RefAttributes<Svg>>;

export default BoxOpenRaised;
export { BoxOpenRaised };
