import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusCirclePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlusCirclePlain: ForwardRefExoticComponent<FilePlusCirclePlainProps & RefAttributes<Svg>>;

export default FilePlusCirclePlain;
export { FilePlusCirclePlain };
