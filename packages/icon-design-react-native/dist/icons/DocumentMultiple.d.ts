import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentMultipleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentMultiple: ForwardRefExoticComponent<DocumentMultipleProps & RefAttributes<Svg>>;

export default DocumentMultiple;
export { DocumentMultiple };
