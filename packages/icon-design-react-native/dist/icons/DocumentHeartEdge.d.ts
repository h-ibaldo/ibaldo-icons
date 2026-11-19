import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentHeartEdgeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentHeartEdge: ForwardRefExoticComponent<DocumentHeartEdgeProps & RefAttributes<Svg>>;

export default DocumentHeartEdge;
export { DocumentHeartEdge };
