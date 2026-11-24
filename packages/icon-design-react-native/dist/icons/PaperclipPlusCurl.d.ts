import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface PaperclipPlusCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const PaperclipPlusCurl: ForwardRefExoticComponent<PaperclipPlusCurlProps & RefAttributes<Svg>>;

export default PaperclipPlusCurl;
export { PaperclipPlusCurl };
