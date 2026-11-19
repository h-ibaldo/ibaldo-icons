import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentListXCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentListXCircle: ForwardRefExoticComponent<DocumentListXCircleProps & RefAttributes<Svg>>;

export default DocumentListXCircle;
export { DocumentListXCircle };
