import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveArrowRightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveArrowRight: ForwardRefExoticComponent<SaveArrowRightProps & RefAttributes<SVGSVGElement>>;

export default SaveArrowRight;
export { SaveArrowRight };
