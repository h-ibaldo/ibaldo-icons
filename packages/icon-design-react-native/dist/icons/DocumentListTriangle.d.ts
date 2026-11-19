import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListTriangle: ForwardRefExoticComponent<DocumentListTriangleProps & RefAttributes<Svg>>;

export default DocumentListTriangle;
export { DocumentListTriangle };
