import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GearUploadRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GearUploadRound: ForwardRefExoticComponent<GearUploadRoundProps & RefAttributes<SVGSVGElement>>;

export default GearUploadRound;
export { GearUploadRound };
