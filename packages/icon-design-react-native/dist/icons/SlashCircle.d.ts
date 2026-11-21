import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SlashCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SlashCircle: ForwardRefExoticComponent<SlashCircleProps & RefAttributes<Svg>>;

export default SlashCircle;
export { SlashCircle };
