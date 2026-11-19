import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FileLinkBracketProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FileLinkBracket: ForwardRefExoticComponent<FileLinkBracketProps & RefAttributes<Svg>>;

export default FileLinkBracket;
export { FileLinkBracket };
