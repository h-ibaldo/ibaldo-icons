import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface InfoCirclePointerProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const InfoCirclePointer: ForwardRefExoticComponent<InfoCirclePointerProps & RefAttributes<SVGSVGElement>>;

export default InfoCirclePointer;
export { InfoCirclePointer };
