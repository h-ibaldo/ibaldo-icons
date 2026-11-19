import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DotsVerticalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DotsVertical: ForwardRefExoticComponent<DotsVerticalProps & RefAttributes<Svg>>;

export default DotsVertical;
export { DotsVertical };
