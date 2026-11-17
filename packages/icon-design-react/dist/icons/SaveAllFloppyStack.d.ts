import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SaveAllFloppyStackProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SaveAllFloppyStack: ForwardRefExoticComponent<SaveAllFloppyStackProps & RefAttributes<SVGSVGElement>>;

export default SaveAllFloppyStack;
export { SaveAllFloppyStack };
