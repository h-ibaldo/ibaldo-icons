import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileCastCornerProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileCastCorner: ForwardRefExoticComponent<FileCastCornerProps & RefAttributes<Svg>>;

export default FileCastCorner;
export { FileCastCorner };
