import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PhonePauseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PhonePause: ForwardRefExoticComponent<PhonePauseProps & RefAttributes<Svg>>;

export default PhonePause;
export { PhonePause };
