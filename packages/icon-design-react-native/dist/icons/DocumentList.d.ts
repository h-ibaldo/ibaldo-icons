import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentList: ForwardRefExoticComponent<DocumentListProps & RefAttributes<Svg>>;

export default DocumentList;
export { DocumentList };
