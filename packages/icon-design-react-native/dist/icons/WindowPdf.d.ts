import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface WindowPdfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const WindowPdf: ForwardRefExoticComponent<WindowPdfProps & RefAttributes<Svg>>;

export default WindowPdf;
export { WindowPdf };
