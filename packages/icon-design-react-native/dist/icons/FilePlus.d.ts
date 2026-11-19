import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlus: ForwardRefExoticComponent<FilePlusProps & RefAttributes<Svg>>;

export default FilePlus;
export { FilePlus };
