import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveX: ForwardRefExoticComponent<SaveXProps & RefAttributes<SVGSVGElement>>;

export default SaveX;
export { SaveX };
