import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BrowserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Browser: ForwardRefExoticComponent<BrowserProps & RefAttributes<SVGSVGElement>>;

export default Browser;
export { Browser };
