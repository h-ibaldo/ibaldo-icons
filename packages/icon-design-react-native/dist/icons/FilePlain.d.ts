import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FilePlainProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FilePlain: ForwardRefExoticComponent<FilePlainProps & RefAttributes<Svg>>;

export default FilePlain;
export { FilePlain };
