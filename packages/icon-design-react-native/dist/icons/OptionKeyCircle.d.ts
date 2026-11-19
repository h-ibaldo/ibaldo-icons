import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface OptionKeyCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const OptionKeyCircle: ForwardRefExoticComponent<OptionKeyCircleProps & RefAttributes<Svg>>;

export default OptionKeyCircle;
export { OptionKeyCircle };
