import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface InfoSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const InfoSquareSmall: ForwardRefExoticComponent<InfoSquareSmallProps & RefAttributes<Svg>>;

export default InfoSquareSmall;
export { InfoSquareSmall };
