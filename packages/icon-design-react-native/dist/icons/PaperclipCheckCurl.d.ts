import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCheckCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCheckCurl: ForwardRefExoticComponent<PaperclipCheckCurlProps & RefAttributes<Svg>>;

export default PaperclipCheckCurl;
export { PaperclipCheckCurl };
