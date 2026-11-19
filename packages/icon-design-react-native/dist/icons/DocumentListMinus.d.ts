import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListMinusProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListMinus: ForwardRefExoticComponent<DocumentListMinusProps & RefAttributes<Svg>>;

export default DocumentListMinus;
export { DocumentListMinus };
