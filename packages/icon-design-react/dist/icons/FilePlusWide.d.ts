import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface FilePlusWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const FilePlusWide: ForwardRefExoticComponent<FilePlusWideProps & RefAttributes<SVGSVGElement>>;

export default FilePlusWide;
export { FilePlusWide };
