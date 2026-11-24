import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListCurlProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListCurl: ForwardRefExoticComponent<DocumentListCurlProps & RefAttributes<Svg>>;

export default DocumentListCurl;
export { DocumentListCurl };
