import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipArrowUpCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipArrowUpCurl: ForwardRefExoticComponent<PaperclipArrowUpCurlProps & RefAttributes<Svg>>;

export default PaperclipArrowUpCurl;
export { PaperclipArrowUpCurl };
