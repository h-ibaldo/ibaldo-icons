import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DotsVerticalSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DotsVerticalSmall: ForwardRefExoticComponent<DotsVerticalSmallProps & RefAttributes<Svg>>;

export default DotsVerticalSmall;
export { DotsVerticalSmall };
