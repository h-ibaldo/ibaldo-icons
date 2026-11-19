import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinkSlantedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinkSlanted: ForwardRefExoticComponent<FileLinkSlantedProps & RefAttributes<Svg>>;

export default FileLinkSlanted;
export { FileLinkSlanted };
