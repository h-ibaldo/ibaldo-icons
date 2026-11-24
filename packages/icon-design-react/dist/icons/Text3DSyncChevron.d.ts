import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Text3DSyncChevronProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Text3DSyncChevron: ForwardRefExoticComponent<Text3DSyncChevronProps & RefAttributes<SVGSVGElement>>;

export default Text3DSyncChevron;
export { Text3DSyncChevron };
