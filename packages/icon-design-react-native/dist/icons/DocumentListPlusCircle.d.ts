import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListPlusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListPlusCircle: ForwardRefExoticComponent<DocumentListPlusCircleProps & RefAttributes<Svg>>;

export default DocumentListPlusCircle;
export { DocumentListPlusCircle };
