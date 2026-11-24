import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BoxPerspectiveShadedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BoxPerspectiveShaded: ForwardRefExoticComponent<BoxPerspectiveShadedProps & RefAttributes<Svg>>;

export default BoxPerspectiveShaded;
export { BoxPerspectiveShaded };
