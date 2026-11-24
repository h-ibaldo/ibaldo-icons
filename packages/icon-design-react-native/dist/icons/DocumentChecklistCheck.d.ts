import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DocumentChecklistCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DocumentChecklistCheck: ForwardRefExoticComponent<DocumentChecklistCheckProps & RefAttributes<Svg>>;

export default DocumentChecklistCheck;
export { DocumentChecklistCheck };
