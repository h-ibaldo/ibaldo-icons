import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoCircleSmall: ForwardRefExoticComponent<InfoCircleSmallProps & RefAttributes<Svg>>;

export default InfoCircleSmall;
export { InfoCircleSmall };
