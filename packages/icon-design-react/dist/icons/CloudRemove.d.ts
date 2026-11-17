import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudRemoveProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudRemove: ForwardRefExoticComponent<CloudRemoveProps & RefAttributes<SVGSVGElement>>;

export default CloudRemove;
export { CloudRemove };
