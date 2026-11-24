import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearDownloadAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearDownloadAngled: ForwardRefExoticComponent<GearDownloadAngledProps & RefAttributes<SVGSVGElement>>;

export default GearDownloadAngled;
export { GearDownloadAngled };
