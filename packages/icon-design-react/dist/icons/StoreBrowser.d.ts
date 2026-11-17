import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface StoreBrowserProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const StoreBrowser: ForwardRefExoticComponent<StoreBrowserProps & RefAttributes<SVGSVGElement>>;

export default StoreBrowser;
export { StoreBrowser };
