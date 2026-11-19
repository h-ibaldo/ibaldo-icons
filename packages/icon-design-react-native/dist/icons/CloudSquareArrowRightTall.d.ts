import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareArrowRightTallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareArrowRightTall: ForwardRefExoticComponent<CloudSquareArrowRightTallProps & RefAttributes<Svg>>;

export default CloudSquareArrowRightTall;
export { CloudSquareArrowRightTall };
