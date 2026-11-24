import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearUploadAngledProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearUploadAngled: ForwardRefExoticComponent<GearUploadAngledProps & RefAttributes<SVGSVGElement>>;

export default GearUploadAngled;
export { GearUploadAngled };
