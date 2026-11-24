import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListEditProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListEdit: ForwardRefExoticComponent<DocumentListEditProps & RefAttributes<Svg>>;

export default DocumentListEdit;
export { DocumentListEdit };
