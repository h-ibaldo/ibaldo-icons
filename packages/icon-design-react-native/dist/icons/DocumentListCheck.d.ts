import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListCheck: ForwardRefExoticComponent<DocumentListCheckProps & RefAttributes<Svg>>;

export default DocumentListCheck;
export { DocumentListCheck };
