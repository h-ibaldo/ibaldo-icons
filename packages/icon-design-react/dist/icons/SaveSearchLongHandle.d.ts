import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveSearchLongHandleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveSearchLongHandle: ForwardRefExoticComponent<SaveSearchLongHandleProps & RefAttributes<SVGSVGElement>>;

export default SaveSearchLongHandle;
export { SaveSearchLongHandle };
