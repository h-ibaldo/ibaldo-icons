import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowDownloadPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowDownloadPlain: ForwardRefExoticComponent<WindowDownloadPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowDownloadPlain;
export { WindowDownloadPlain };
