import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentChecklistXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistX: ForwardRefExoticComponent<DocumentChecklistXProps & RefAttributes<Svg>>;

export default DocumentChecklistX;
export { DocumentChecklistX };
