import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AtCheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AtCheckCircle: ForwardRefExoticComponent<AtCheckCircleProps & RefAttributes<Svg>>;

export default AtCheckCircle;
export { AtCheckCircle };
