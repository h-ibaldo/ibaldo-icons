import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DragImageProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DragImage: ForwardRefExoticComponent<DragImageProps & RefAttributes<Svg>>;

export default DragImage;
export { DragImage };
