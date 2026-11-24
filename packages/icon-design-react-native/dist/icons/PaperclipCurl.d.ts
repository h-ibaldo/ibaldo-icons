import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipCurl: ForwardRefExoticComponent<PaperclipCurlProps & RefAttributes<Svg>>;

export default PaperclipCurl;
export { PaperclipCurl };
