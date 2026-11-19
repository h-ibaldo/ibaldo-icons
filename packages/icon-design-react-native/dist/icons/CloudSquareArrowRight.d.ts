import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CloudSquareArrowRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CloudSquareArrowRight: ForwardRefExoticComponent<CloudSquareArrowRightProps & RefAttributes<Svg>>;

export default CloudSquareArrowRight;
export { CloudSquareArrowRight };
