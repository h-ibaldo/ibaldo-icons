import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserTrashProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BrowserTrash: ForwardRefExoticComponent<BrowserTrashProps & RefAttributes<SVGSVGElement>>;

export default BrowserTrash;
export { BrowserTrash };
