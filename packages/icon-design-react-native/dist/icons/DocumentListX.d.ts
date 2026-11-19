import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListX: ForwardRefExoticComponent<DocumentListXProps & RefAttributes<Svg>>;

export default DocumentListX;
export { DocumentListX };
