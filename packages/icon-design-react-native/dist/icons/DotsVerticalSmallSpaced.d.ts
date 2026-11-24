import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DotsVerticalSmallSpacedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DotsVerticalSmallSpaced: ForwardRefExoticComponent<DotsVerticalSmallSpacedProps & RefAttributes<Svg>>;

export default DotsVerticalSmallSpaced;
export { DotsVerticalSmallSpaced };
