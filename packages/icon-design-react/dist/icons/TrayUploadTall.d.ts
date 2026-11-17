import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TrayUploadTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TrayUploadTall: ForwardRefExoticComponent<TrayUploadTallProps & RefAttributes<SVGSVGElement>>;

export default TrayUploadTall;
export { TrayUploadTall };
