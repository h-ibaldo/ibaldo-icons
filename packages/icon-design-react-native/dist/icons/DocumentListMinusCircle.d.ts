import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListMinusCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListMinusCircle: ForwardRefExoticComponent<DocumentListMinusCircleProps & RefAttributes<Svg>>;

export default DocumentListMinusCircle;
export { DocumentListMinusCircle };
