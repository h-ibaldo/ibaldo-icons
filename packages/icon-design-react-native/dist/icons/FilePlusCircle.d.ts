import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCircle: ForwardRefExoticComponent<FilePlusCircleProps & RefAttributes<Svg>>;

export default FilePlusCircle;
export { FilePlusCircle };
