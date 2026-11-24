import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface WindowUploadPlainProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const WindowUploadPlain: ForwardRefExoticComponent<WindowUploadPlainProps & RefAttributes<SVGSVGElement>>;

export default WindowUploadPlain;
export { WindowUploadPlain };
