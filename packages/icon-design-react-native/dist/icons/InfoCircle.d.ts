import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoCircle: ForwardRefExoticComponent<InfoCircleProps & RefAttributes<Svg>>;

export default InfoCircle;
export { InfoCircle };
